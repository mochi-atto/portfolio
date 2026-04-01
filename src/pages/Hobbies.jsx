import { useState } from 'react';
import { FiX, FiType, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import posts from '../data/hobbies';
import useMonkeyType from '../hooks/useMonkeyType';
import './Hobbies.css';

import mtlogo from '../assets/images/hobbies/monkeytype.png';

/* ======== Post detail modal ======== */
function PostModal({ post, onClose }) {
  const [current, setCurrent] = useState(0);

  if (!post) return null;

  const allMedia = post.media && post.media.length > 0
    ? post.media
    : post.cover
      ? [{ type: 'image', src: post.cover }]
      : [];

  const goNext = () => setCurrent((prev) => (prev + 1) % allMedia.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + allMedia.length) % allMedia.length);

  return (
    <div className="hobby-modal-overlay" onClick={onClose}>
      <div className="hobby-modal" onClick={(e) => e.stopPropagation()}>
        {/* Gallery side */}
        <div className="hobby-modal__gallery">
          {allMedia.length > 0 ? (
            <>
              <div className="hobby-modal__media">
                {allMedia[current].type === 'video' ? (
                  <iframe
                    src={allMedia[current].url}
                    title={`Video ${current + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    allowFullScreen
                  />
                ) : (
                  <img src={allMedia[current].src} alt={`Media ${current + 1}`} />
                )}
              </div>
              {allMedia.length > 1 && (
                <div className="hobby-modal__nav">
                  <button className="hobby-modal__arrow" onClick={goPrev}>
                    <FiChevronLeft />
                  </button>
                  <span className="hobby-modal__counter">
                    {current + 1} / {allMedia.length}
                  </span>
                  <button className="hobby-modal__arrow" onClick={goNext}>
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </>
          ) : (
            <p style={{ color: '#888', padding: 32 }}>No media yet</p>
          )}
        </div>

        {/* Caption side */}
        <div className="hobby-modal__sidebar">
          <button className="hobby-modal__close" onClick={onClose}>
            <FiX />
          </button>
          <p className="hobby-modal__caption">{post.caption}</p>
        </div>
      </div>
    </div>
  );
}

/* ======== MonkeyType slide-out tab ======== */
function MonkeyTypeTab() {
  const [open, setOpen] = useState(false);
  const { stats, loading, error } = useMonkeyType();

  return (
    <div className={`mt-tab ${open ? 'mt-tab--open' : ''}`}>
      {/* Trigger button — keyboard icon */}
      <button className="mt-tab__trigger" onClick={() => setOpen(!open)}>
        {mtlogo ? (
                  <img src={mtlogo} alt="Logo" />
                ) : (
                  <FiType />
        )}
      </button>

      {/* Panel that slides out */}
      <div className="mt-tab__panel">
        <h3>MonkeyType Stats</h3>
        {loading && <p className="mt-tab__loading">Loading…</p>}
        {error && <p className="mt-tab__error">{error}</p>}
        {stats && (
          <>
            {stats.best30Wpm && (
              <div className="mt-stat">
                <span className="mt-stat__label">30s PB</span>
                <span className="mt-stat__value">
                  {stats.best30Wpm} WPM / {stats.best30Acc}%
                </span>
              </div>
            )}
            {stats.timeTyping && (
              <div className="mt-stat">
                <span className="mt-stat__label">Time Typing</span>
                <span className="mt-stat__value">{stats.timeTyping}</span>
              </div>
            )}
            {stats.lastResultDate && (
              <div className="mt-stat">
                <span className="mt-stat__label">Last Result</span>
                <span className="mt-stat__value">{stats.lastResultDate}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ======== Main page ======== */
export default function Hobbies() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="container">
      <PageHeader
        title="Hobbies"
        subtitle={
          <>
          A glimpse into what I enjoy outside of work. My current interests include mechanical keyboards, photography, and crochet/knitting. I'm also the lead singer for Blue Hour, a band my friends and I started!
          <br />
          Click a post to see more!
          </>
        }
        
        
      />

      {/* Post grid */}
      <div className="hobby-grid">
        {posts.map((post) => (
          <div
            className="hobby-grid__item"
            key={post.id}
            onClick={() => setSelectedPost(post)}
          >
            {post.cover ? (
              <img src={post.cover} alt={post.caption?.slice(0, 40)} />
            ) : (
              <div className="hobby-grid__placeholder">No image</div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      {/* MonkeyType tab */}
      <MonkeyTypeTab />
    </div>
  );
}