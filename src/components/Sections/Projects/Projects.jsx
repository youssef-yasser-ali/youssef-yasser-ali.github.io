import { projects } from "../../../data/Data";
import MainHead from "../../MainHead/MainHead";
import OtherProjects from "./OtherProjects/OtherProjects";
import Project from "./Project/Project";
import "./_projects.scss";
function Projects() {
  return (
    <section id="projects-section">
      <div className="container">
        <MainHead name="Some Things I’ve Built" num={3} />

        <div className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.name}
                description={project.description}
                image={project.image}
                reverse={index % 2}
                links={project.links}
                technologies={project.technologies}
              />
            );
          })}
        </div>
        <OtherProjects />
      </div>
    </section>
  );
}

export default Projects;
