import { otherProjects } from "../../../../data/Data";
import PrjojectCard from "./PrjojectCard";
import "./__other-projects.scss";

function OtherProjects() {
  return (
    <div className="section-other-project">
      <h2 className="second-head">Other Noteworthy Projects</h2>
      <div className="other-projects">
        {otherProjects.map((project, index) => (
          <PrjojectCard
            key={index}
            title={project.name}
            description={project.description}
            image={project.image}
            links={project.links}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
