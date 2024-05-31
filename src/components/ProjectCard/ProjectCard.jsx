import "./ProjectCard.css";

function ProjectCard({ projectSrc, projectLink, projectTitle, description }) {
  return (
    <>
      <section className="single-project">
        <span className="project-title">{projectTitle}</span>
        <div className="blur-container">
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="image-project">
            <img className="image-project" src={projectSrc} alt={projectTitle}></img>
          </a>
          <p className="project-description">{description}</p>
        </div>
      </section>
    </>
  );
}
export default ProjectCard;
