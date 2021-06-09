import React, { useState, useEffect } from "react";

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
          <a href="jhjhs#" className="nav_logo">
            Lincoln
          </a>
          <div className="nav_menu" id={showMenu ? "show-menu" : null}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="home#"
                >
                  <i className="nav_icon uil uil-estate"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="About#"
                >
                  <i className="nav_icon uil uil-user"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="skills#"
                >
                  <i className="nav_icon uil uil-file-alt"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="Service#"
                >
                  <i className="nav_icon uil uil-briefcase-alt"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="Portfolio#"
                >
                  <i className="nav_icon uil uil-scenery"></i> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a
                  className="nav_link"
                  onClick={() => setShowMenu(!showMenu)}
                  href="Contact#"
                >
                  <i className="nav_icon uil uil-message"></i> Contact
                </a>
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
