import React from "react";

function Contact() {
  return (
    <section className="contact section " id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in touch</span>
      <div className="contact_container container grid">
        <div className="container grid">
          <div className="contact_information">
            <i className="uil uil-phone contact_icon"></i>
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">+254-785 859 251</span>
            </div>
          </div>
          <div className="contact_information">
            <i class="uil uil-envelope contact_icon"></i>
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">info@exergy.co.ke</span>
            </div>
          </div>
          <div className="contact_information">
            <i class="uil uil-map-marker-alt contact_icon"></i>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Nairobi, kenya</span>
            </div>
          </div>
        </div>
        <form action="submit" className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label htmlFor="Name" className="contact_lable">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text "
                className="contact_input"
              />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_lable">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email "
                className="contact_input"
              />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="Project" className="contact_lable">
              Project
            </label>
            <input
              name="Project"
              id="Project"
              type="text "
              className="contact_input"
            />
          </div>
          <div className="contact_content">
            <label htmlFor="Message" className="contact_lable">
              Message
            </label>
            <textarea
              className="contact_input"
              name="Message"
              id="Message"
              cols="0"
              rows="7"
            ></textarea>
          </div>
          <div>
            <a href="hh#" className="button button--flex">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
