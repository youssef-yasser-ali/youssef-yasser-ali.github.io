import React from "react";
import "./social.scss";
import { socialMediaData } from "../../data/Data";

const SocialIcon = ({ link, svg, title }) => (
  <li className="social-item" key={title}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  </li>
);

function Social() {
  return (
    <div className="socialContainer">
      <ul className="social">
        {socialMediaData.map((social) => (
          <SocialIcon key={social.title} {...social} />
        ))}
      </ul>
      <div className="line"></div>
    </div>
  );
}

export default Social;
