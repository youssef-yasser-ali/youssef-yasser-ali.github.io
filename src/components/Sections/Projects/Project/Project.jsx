import Technologies from "../Technologies";
import ProjectLinks from "./ProjectLinks";
import "./__project.scss";

function Project({ title, description, image, reverse, links, technologies }) {
  return (
    <div className={`project ${reverse && "reverse"}`}>
      <div className="project-img">
        <a target="_blank" href={links.external || links.github}>
          <div className="img">
            <img src={image} alt="" />
          </div>
        </a>
      </div>
      <div className="project-info">
        <p className="project-overline">Featured Project</p>
        <h3 className="project-title">
          <a href={links.external || links.github} target="_blank">
            {title}
          </a>
        </h3>
        <div className="project-description">{description}</div>
        <Technologies technologies={technologies} />
        <ProjectLinks links={links} />
      </div>
    </div>
  );
}

export default Project;
