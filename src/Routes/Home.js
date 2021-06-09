import React from "react";

import profile from "./../Assets/Images/me.png";
function Home() {
  const linkedinUrl = "https://www.linkedin.com/in/lincoln-kantet-5ba48616a/";
  const githubUrl = "https://github.com/linco6054";
  const stackOFUrl = "https://stackoverflow.com/users/15736053/lincoln-kantet";
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            <a className="home_social-icon" href={linkedinUrl}>
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a className="home_social-icon" href={stackOFUrl}>
              <i className="uil uil-slack-alt"></i>
            </a>
            <a className="home_social-icon" href={githubUrl}>
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home_img">
            <div className="home_blob">
              <img className="home_blob-img" src={profile} alt="" />
            </div>
          </div>
          <div className="home_data">
            <h1 className="home_title">Hi, I'am Lincoln </h1>
            <h3 className="home_subtitle">Full Stack Developer</h3>
            <p className="home_description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sit
              minus suscipit sed a. Cum repellendus quos optio magni reiciendis!
            </p>
            <a href="contact#" className="button button--flex">
              Contact Me <i className="uil uil-message button_icon"></i>
            </a>
          </div>
        </div>
        <div className="home_scroll">
          <a href="hbhh#" className="home_scroll-button button--flex">
            <i className="uil uil-mouse-alt home_scroll-mouse"></i>
            <span className="home_scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home_scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
