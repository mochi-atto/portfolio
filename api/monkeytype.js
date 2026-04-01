let cache = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return cached data if fresh
  if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) {
    return res.status(200).json(cache.data);
  }

  const apiKey = process.env.MONKEYTYPE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured on server' });
  }

  const headers = { Authorization: `ApeKey ${apiKey}` };

  try {
    const [pbRes, statsRes, lastRes] = await Promise.all([
      fetch('https://api.monkeytype.com/users/personalBests?mode=time', { headers }),
      fetch('https://api.monkeytype.com/users/stats', { headers }),
      fetch('https://api.monkeytype.com/results/last', { headers }),
    ]);

    if (!pbRes.ok) throw new Error(`Personal bests returned ${pbRes.status}`);
    if (!statsRes.ok) throw new Error(`Stats returned ${statsRes.status}`);
    if (!lastRes.ok) throw new Error(`Last result returned ${lastRes.status}`);

    const [pbJson, statsJson, lastJson] = await Promise.all([
      pbRes.json(),
      statsRes.json(),
      lastRes.json(),
    ]);

    const pbData = pbJson.data;
    const statsData = statsJson.data;
    const lastResultData = lastJson.data;

    // Best WPM for time 30
    const time30 = pbData['30'];
    const best30 = time30
      ? time30.reduce((best, run) => (run.wpm > best.wpm ? run : best), time30[0])
      : null;

    // Total time typing
    const totalSeconds = statsData?.timeTyping ?? 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Last test timestamp
    const latestTimestamp = lastResultData?.timestamp ?? 0;

    const parsed = {
      best30Wpm: best30 ? Math.round(best30.wpm) : null,
      best30Acc: best30 ? Math.round(best30.acc) : null,
      timeTyping: totalSeconds > 0 ? `${hours}h ${minutes}m` : null,
      lastResultDate: latestTimestamp
        ? new Date(latestTimestamp).toLocaleDateString()
        : null,
    };

    // Update server-side cache
    cache = {
      data: parsed,
      timestamp: Date.now(),
    };

    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}