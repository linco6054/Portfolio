import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme);
  }, [theme]);
  return (
    <div>
      <header className={`header scroll-header`} id="header">
        <nav className="nav container">
          <Link to="home" className="nav_logo">
            Lincoln
          </Link>
          <div className="nav_menu" id={showMenu ? "show-menu" : null}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="home"
                >
                  <i className="nav_icon uil uil-estate"></i> Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="about"
                >
                  <i className="nav_icon uil uil-user"></i> About
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="skills"
                >
                  <i className="nav_icon uil uil-file-alt"></i> Skills
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="services"
                >
                  <i className="nav_icon uil uil-briefcase-alt"></i> Services
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="portfolio"
                >
                  <i className="nav_icon uil uil-scenery"></i> Portfolio
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  to="contact"
                >
                  <i className="nav_icon uil uil-message"></i> Contact
                </Link>
              </li>
            </ul>
            <i
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="uil uil-times nav_close"
            ></i>
          </div>
          <div className="nav_btns">
            {/*======= Theme Change Button=========== */}
            <i
              onClick={() => setTheme(!theme)}
              class={`${theme ? "uil uil-sun" : "uil uil-moon"} change-theme`}
              id="theme-button"
            ></i>

            <div
              className="nav_toggle"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
