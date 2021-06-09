import React from "react";
import me2 from "./../Assets/Images/me.png";
function ProjectsInMind() {
  return (
    <section className="project section">
      <div className="project_bg">
        <div className="project_container container grid">
          <div className="project_data">
            <h2 className="project_title">You have a New Project</h2>
            <p className="project_description">
              Contact me now and get a proffesional touch on you new project.
            </p>
            <a href="contact#" className="button button--flex button--white">
              Contact Me
              <i className="uil uil-message project_icon button_icon"></i>
            </a>
          </div>
          <img src={me2} className="project_img" alt="" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsInMind;
