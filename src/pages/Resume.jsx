import { useState } from 'react';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import './Resume.css';

const RESUMES = [
  { id: 'swe',  label: 'Software Engineering',  file: '/resumes/JosieChang_SWE.pdf' },
  { id: 'ux',   label: 'UX Research & Design',   file: '/resumes/JosieChang_UX.pdf'},
  { id: 'gov', label: 'Governance',  file: '/resumes/JosieChang_Gov.pdf', underConstruction: true },
];

export default function Resume() {
  const [active, setActive] = useState('swe');
  const current = RESUMES.find((r) => r.id === active);

  return (
    <div className="container">
      <PageHeader title="Resume" subtitle = "Select a resume to view or download. I update these as often as possible, but for the most recent versions, please contact me!" />

      <div className="resume__controls">
        <div className="resume__toggle">
          {RESUMES.map((r) => (
            <button
              key={r.id}
              className={`resume__tab ${active === r.id ? 'resume__tab--active' : ''}`}
              onClick={() => setActive(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="resume__actions">
          <a
            href={current.underConstruction ? undefined : current.file}
            download={!current.underConstruction}
            className={`resume__btn ${current.underConstruction ? 'resume__btn--disabled' : ''}`}
            aria-disabled={current.underConstruction}
            onClick={current.underConstruction ? (e) => e.preventDefault() : undefined}
          >
            <FiDownload />
            Download
          </a>
          <a
            href={current.underConstruction ? undefined : current.file}
            target={current.underConstruction ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`resume__btn ${current.underConstruction ? 'resume__btn--disabled' : ''}`}
            aria-disabled={current.underConstruction}
            onClick={current.underConstruction ? (e) => e.preventDefault() : undefined}
          >
            <FiExternalLink />
            Open in new tab
          </a>
        </div>
      </div>

      {current.underConstruction ? (
        <div className="resume__under-construction">
          <p>This resume is currently under construction.</p>
          <p>Check back later!</p>
        </div>
      ) : (
        <div className="resume__viewer">
          <iframe
            key={current.file}
            src={current.file}
            title={`${current.label} Resume`}
          />
        </div>
      )}
    </div>
  );
}
