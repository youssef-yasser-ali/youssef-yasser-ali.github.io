import { technologes, aboutMe } from "../../../data/Data";

function Info() {
  return (
    <div className="info">
      {/* Render the aboutMe string with line breaks */}
      {aboutMe.split("\n").map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <ul>
        {technologes.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
