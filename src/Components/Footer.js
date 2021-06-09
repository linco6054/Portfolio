import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">Lincoln</h1>
            <span className="footer_subtitle">Full Stack web developer</span>
          </div>

          <ul className="footer_links">
            <li>
              <a href="jhj#" className="footer_link">
                Services
              </a>
            </li>
            <li>
              <a href="portfolio#" className="footer_link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="contact#" className="footer_link">
                Contact Me
              </a>
            </li>
          </ul>
          <div className="footer_socials">
            <a href="facebook#" className="footer_social">
              <i class="uil uil-facebook-f"></i>
            </a>
            <a href="twitter#" className="footer_social">
              <i class="uil uil-twitter-alt"></i>
            </a>
            <a href="instgram#" className="footer_social">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>
        <p className="footer_copy">&#169; Lincoln. All right reserved</p>
      </div>
      
    </footer>
  );
}

export default Footer;
