import React, { useState, useEffect } from "react";
import { skillsData } from "./../Components/skillsData";
function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title"> Skills</h2>
      <span className="section_subtitle">My Technological Level</span>

      <div className="skills_container container grid">
        {skillsData.map((skill) => {
          return (
            <IndividualSkills key={skill.id} {...skill}></IndividualSkills>
          );
        })}
      </div>
    </section>
  );
}

const IndividualSkills = ({
  skillTitle,
  skillSubTitle,
  skillOneName,
  skillOnePercentage,
  skillTwoName,
  skillTwoPercentage,
  skillThreeName,
  skillThreePercentage,
  skillFourName,
  skillFourPercentage,
}) => {
  const [icon, setIcon] = useState("");
  const [openCloseSkill, setOpenCloseSkill] = useState(false);
  const [cssClass, setCssClass] = useState("");
  useEffect(() => {
    if (skillTitle === "Frontend Developer") {
      setIcon("uil uil-brackets-curly skills_icon");
    } else if (skillTitle === "Backend Developer") {
      setIcon("uil uil-server-network  skills_icon");
    } else if (skillTitle === "Desiner") {
      setIcon("uil uil-edit-alt skills_icon");
    } else {
      setIcon("uil uil-desktop skills_icon");
    }
  }, []);

  useEffect(() => {
    if (openCloseSkill) {
      setCssClass("skills_open");
    } else {
      setCssClass("skills_close");
    }
  });
  useEffect(() => {});
  return (
    <div className={`skills_content ${cssClass}`}>
      <div className="skill_header">
        <i className={icon}></i>
        <div>
          <h1 className="skills_title">{skillTitle}</h1>
          <span className="skills_subtitle">{skillSubTitle}</span>
        </div>

        <i
          onClick={() => {
            setOpenCloseSkill(!openCloseSkill);
          }}
          className="uil uil-angle-down skill_arrow"
        ></i>
      </div>
      <div className="skills_list grid">
        {skillOneName ? (
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">{skillOneName}</h3>
              <span className="skills_number">{skillOnePercentage}</span>
            </div>
            <div className="skills_bar">
              <span
                className={`skills_percentage skills_${skillOneName}`}
              ></span>
            </div>
          </div>
        ) : null}
        {skillTwoName ? (
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">{skillTwoName}</h3>
              <span className="skills_number">{skillTwoPercentage}</span>
            </div>
            <div className="skills_bar">
              <span
                className={`skills_percentage skills_${skillTwoName}`}
              ></span>
            </div>
          </div>
        ) : null}
        {skillThreeName ? (
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">{skillThreeName}</h3>
              <span className="skills_number">{skillThreePercentage}</span>
            </div>
            <div className="skills_bar">
              <span
                className={`skills_percentage skills_${skillThreeName}`}
              ></span>
            </div>
          </div>
        ) : null}
        {skillFourName ? (
          <div className="skills_data">
            <div className="skills_titles">
              <h3 className="skills_name">{skillFourName}</h3>
              <span className="skills_number">{skillFourPercentage}</span>
            </div>
            <div className="skills_bar">
              <span
                className={`skills_percentage skills_${skillFourName}`}
              ></span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Skills;
