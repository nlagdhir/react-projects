import { socialLinks, pageLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <>
      <footer className="section footer">

      <PageLinks parentClass="footer-links" childClass="footer-link" />  
      
        <ul className="footer-icons">
          {socialLinks.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={socialLink.class}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
