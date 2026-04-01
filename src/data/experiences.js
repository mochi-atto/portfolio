/*
  ============================================================
  HOW TO ADD A NEW EXPERIENCE
  ============================================================
  1. Add a new object to the array below.

     Required fields:
       - id        : unique string
       - title     : your position/role
       - org       : company or organization name
       - startDate : 'YYYY-MM-DD' string (used for sorting)

     Optional fields:
       - endDate   : 'YYYY-MM-DD' string, or omit/set to null for present/ongoing
       - link      : URL string to company/org site (shows a clickable icon)

  2. Experiences auto-sort newest-first by start date.
     Ongoing roles (no endDate) always appear at the top.
  ============================================================
*/

//   {
//     id: 'example-exp-1',
//     title: 'Research Assistant',
//     org: 'Georgia Tech',
//     startDate: '2024-08-15',
//     endDate: '2025-04-30',
//     link: '',
//   },

const experiences = [
  {
    id: 'wellnesslab',
    title: 'Volunteer Researcher',
    org: 'Wellness Technology Lab',
    startDate: '2026-01-01',
    endDate: null,
    link:'https://wtl.cc.gatech.edu/',
  },
  {
    id: 'welab',
    title: 'Student Researcher',
    org: 'WELab Vertically Integrated Project (VIP)',
    startDate: '2025-08-01',
    endDate: null,
    link:'https://sites.gatech.edu/welab/',
  },
  {
    id: 'gtmk',
    title: 'Finance Officer',
    org: 'Mechanical Keyboards at GT',
    startDate: '2025-09-01',
    endDate: null,
    link:'',
  },
  {
    id: 'qsi',
    title: 'Intern',
    org: 'Q Solutions Inc.',
    startDate: '2018-08-01',
    endDate: '2023-11-01',
    link:'',
  },
  

];

// Sort: ongoing first, then newest start date
experiences.sort((a, b) => {
  const aOngoing = !a.endDate;
  const bOngoing = !b.endDate;
  if (aOngoing && !bOngoing) return -1;
  if (!aOngoing && bOngoing) return 1;
  return new Date(b.startDate) - new Date(a.startDate);
});

export default experiences;