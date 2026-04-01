import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ImageLightbox from '../components/ImageLightbox';
import projects from '../data/projects';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => {
    setLightbox({ images, startIndex: index });
  };

  return (
    <div className="container">
      <PageHeader title="Projects" />

      <div className="timeline">
        {projects.map((project) => (
          <div className="timeline__item" key={project.id}>
            <div className="timeline__card">
            <h2 className="timeline__name">
              {project.name}
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
              <p className="timeline__desc">{project.description}</p>
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