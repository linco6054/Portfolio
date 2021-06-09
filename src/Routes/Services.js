import React, { useState } from "react";
import { ServicesData } from "./../Components/ServicesData";
function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i Offer</span>
      <div className="services_container container grid">
        {/* ====services  */}

        {ServicesData.map((service) => {
          return (
            <ServicesOffered key={service.id} {...service}></ServicesOffered>
          );
        })}
      </div>
    </section>
  );
}

const ServicesOffered = ({
  id,
  icon,
  pref,
  type,
  title,
  one,
  two,
  three,
  four,
}) => {
  const [showModel, setShowModel] = useState(true);
  return (
    <div className="services_content">
      <div>
        <i class={`${icon} services_icon`}></i>
        <h3 className="services_title">
          {pref} <br />
          {type}
        </h3>
      </div>
      <span
        onClick={() => {
          setShowModel(!showModel);
        }}
        className="button button--flex button--small button--link services_button"
      >
        View More
        <i class="uil uil-arrow-right button_icon"></i>
      </span>
      <div
        className={`services_model ${
          showModel ? "service_model_action" : null
        }`}
      >
        <div className="services_modal-content">
          <h4 className="services_modal-title">
            {pref} <br /> {title}
          </h4>
          <i
            onClick={() => {
              setShowModel(!showModel);
            }}
            class="uil uil-times services_modal-close"
          ></i>
          <ul className="services_modal-services grid">
            <li className="services_modal-service">
              <i class="uil uil-check-circle services_modal-icon"></i>
              <p>{one}</p>
            </li>
            <li className="services_modal-service">
              <i class="uil uil-check-circle services_modal-icon"></i>
              <p>{two}</p>
            </li>
            <li className="services_modal-service">
              <i class="uil uil-check-circle services_modal-icon"></i>
              <p>{three}</p>
            </li>
            <li className="services_modal-service">
              <i class="uil uil-check-circle services_modal-icon"></i>
              <p>{four}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
