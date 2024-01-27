import { technologes } from "../../../data/Data";

function Info() {
  return (
    <div className="info">
      <p>
        Youssef Yasser is a Computer and Control Systems Engineering student at
        Mansoura University. he is a software engineer with a strong passion for
        the fields of artificial intelligence and machine learning.
      </p>
      <p>
        Youssef is interested in problem-solving and desires to stay up-to-date
        with the latest technologies. He is always eager to learn new things and
        challenge himself with complex tasks. He enjoys working in teams and
        collaborating with other developers to deliver high-quality products
      </p>

      <p>
        He is passionate about applying his knowledge and skills to real-world
        problems and creating innovative solutions that can benefit society. He
        aspires to become a successful and influential software engineer in the
        future.
      </p>
      <p>Here are a few technologies I’ve been working with recently:</p>

      <ul>
        {technologes.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
