import React, { useState, useEffect } from "react";
import { Education, Work } from "./../Components/qualificationData";
function Portfolio() {
  const [showQualification, setShowQualification] = useState(true);
  return (
    <section className="qualification section">
      <h2 className="section_title"> Qualifications</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            onClick={() => {
              setShowQualification(!showQualification);
            }}
            className={`qualification_button button--flex ${
              showQualification ? "active" : null
            }`}
          >
            <i
              className={`uil uil-graduation-cap qualification_icon ${
                showQualification ? "active" : null
              } `}
            ></i>
            Education
          </div>
          <div
            onClick={() => {
              setShowQualification(!showQualification);
            }}
            className={`qualification_button button--flex ${
              showQualification ? null : "active"
            }`}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Work
          </div>
        </div>

        <div className="qualification_sections">
          {/* ==========Qualification content ================= */}
          <div className="qualification_content">
            {/* qualification 1 */}
            {Education.map((shool) => {
              return (
                <Qualifications
                  showQualification={showQualification}
                  setShowQualification={setShowQualification}
                  key={shool.id}
                  {...shool}
                ></Qualifications>
              );
            })}
            {Work.map((organization) => {
              return (
                <WorkExperience
                  showQualification={showQualification}
                  setShowQualification={setShowQualification}
                  key={organization.id}
                  {...organization}
                ></WorkExperience>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const Qualifications = ({
  showQualification,

  course,
  place,
  school,
  period,
  id,
}) => {
  const [even, setEven] = useState(true);

  useEffect(() => {
    if (id % 2 === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  }, []);
  if (showQualification) {
    return (
      <div className="qualification_data">
        {even ? null : <div></div>}
        {even ? null : (
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        )}
        <div>
          <h3 className="qualification_title">{course}</h3>
          <span className="qualification_subtitle">
            {place} - {school}
          </span>
          <div className="qualification_calender">
            <i className="uil uil-calendar-alt"></i>
            {period}
          </div>
        </div>

        {even ? (
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        ) : null}
      </div>
    );
  }
  return null;
};

const WorkExperience = ({
  showQualification,

  id,
  title,
  place,
  organization,
  period,
}) => {
  const [even, setEven] = useState(false);

  useEffect(() => {
    if (id % 2 === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  }, []);
  if (showQualification === false) {
    return (
      <div className="qualification_data">
        {even ? null : <div></div>}
        {!even ? (
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        ) : null}
        <div>
          <h3 className="qualification_title">{title}</h3>
          <span className="qualification_subtitle">
            {place} - {organization}
          </span>
          <div className="qualification_calender">
            <i class="uil uil-calendar-alt"></i>
            {period}
          </div>
        </div>

        {even ? (
          <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
          </div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};
export default Portfolio;
