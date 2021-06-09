import React from "react";
import aboutImg from "./../Assets/Images/laptop1.jpg";
import myCv from "./../Assets/Cv/lincoln-kantet-cv.pdf";
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>
      <div className="about_container container grid">
        <img src={aboutImg} alt="" className="about_img" />
        <div className="about_data">
          <p className="about_description">
            and electron. Award-winning web/desktop developer with industrial
            experience in LAMP development, object-oriented and user-centered
            design, seeks a position with a top technology firm.
          </p>
          <div className="about_info">
            <div>
              <span className="about_info-title">8+</span>
              <span className="about_info-name">
                Years <br /> Experience
              </span>
            </div>
            <div>
              <span className="about_info-title">20+</span>
              <span className="about_info-name">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="about_info-title">2+</span>
              <span className="about_info-name">
                Companies <br /> Worked
              </span>
            </div>
          </div>
          <div className="about_buttons">
            <a download="" href={myCv} className="button button--flex">
              Download CV <i className="uil uil-download-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
