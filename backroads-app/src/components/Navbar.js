import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <PageLinks parentClass="nav-links" childClass="nav-link" />  

          <ul className="nav-icons">
            {socialLinks.map((social) => {
              return (
                <li key={social.id}>
                  <a href={social.href} target="_blank" className="nav-icon">
                    <i className={social.class}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
