function Technologies({ technologies }) {
  return (
    <ul className="project-tech-list">
      {technologies.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  );
}

export default Technologies;
