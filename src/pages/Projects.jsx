import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ImageLightbox from '../components/ImageLightbox';
import projects from '../data/projects';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function renderDescriptionBlock(block, i) {
  if (typeof block === 'string') {
    return <p key={i}>{block}</p>;
  }
  if (block.type === 'video') {
    const id = getYouTubeId(block.url);
    if (!id) return null;
    return (
      <div key={i} className="timeline__video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={`video ${i + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (Array.isArray(block)) {
    return (
      <p key={i}>
        {block.map((node, j) =>
          typeof node === 'string' ? node : (
            <a key={j} href={node.url} target="_blank" rel="noopener noreferrer" className="timeline__desc-link">
              {node.text}
            </a>
          )
        )}
      </p>
    );
  }
  return null;
}

const SKILLS_LIMIT = 5;

function SkillChips({ skills }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? skills : skills.slice(0, SKILLS_LIMIT);
  const hasMore = skills.length > SKILLS_LIMIT;

  return (
    <div className="timeline__skills">
      {visible.map((skill) => (
        <span key={skill} className="timeline__chip">{skill}</span>
      ))}
      {hasMore && !expanded && (
        <button className="timeline__skills-toggle" onClick={() => setExpanded(true)}>
          +{skills.length - SKILLS_LIMIT} more...
        </button>
      )}
      {expanded && (
        <button className="timeline__skills-toggle" onClick={() => setExpanded(false)}>
          Show less
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, startIndex: index });
  };

  return (
    <div className="container">
      <PageHeader title="Projects" subtitle = "Click on a project title to see more!"/>

      <div className="timeline">
        {projects.map((project) => (
          <div className="timeline__item" key={project.id}>
            <div className="timeline__card">
            <h2 className="timeline__name">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__title-link"
                >
                  {project.name}
                </a>
              ) : project.name}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__link"
                >
                  <FiExternalLink />
                </a>
              )}
            </h2>
              {project.affiliation && (
                <p className="timeline__affiliation">{project.affiliation}</p>
              )}
              <div className="timeline__desc">
                {typeof project.description === 'string'
                  ? <p>{project.description}</p>
                  : project.description.map((block, i) => renderDescriptionBlock(block, i))
                }
              </div>
              {project.skills && project.skills.length > 0 && (
                <SkillChips skills={project.skills} />
              )}
              {project.images && project.images.length > 0 && (
                <div className="timeline__images">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      onClick={() => openLightbox(project.images, i)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}