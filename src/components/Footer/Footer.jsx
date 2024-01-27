import { socialMediaData } from "../../data/Data";
import "./_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-footer">
        <ul className="social-items">
          {socialMediaData.map((social) => (
            <li className="social-item" key={social.title}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.svg}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copy">
        <span>&#169;</span> Youssef Yasser Ali
      </div>
    </footer>
  );
}

export default Footer;
