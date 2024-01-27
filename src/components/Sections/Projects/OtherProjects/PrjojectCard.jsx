import ProjectLinks from "../Project/ProjectLinks";
import Technologies from "../Technologies";

const links = {
  github: "hi",
};

function PrjojectCard({ title, description, links, technologies }) {
  return (
    <div className="project-card">
      <div className="info">
        <div className="project-top">
          <div className="folder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <ProjectLinks links={links} />
        </div>
        <h3 className="project-title">
          <a href={links.external || links.github} target="_blank">
            {title}
          </a>
        </h3>
        <div className="project-description">{description} </div>
      </div>
      <Technologies technologies={technologies} />
    </div>
  );
}

export default PrjojectCard;
