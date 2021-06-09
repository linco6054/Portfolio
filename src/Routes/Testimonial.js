import React from "react";

import { testimony } from "./../Components/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
function Testimonial() {
  return (
    <section className="testimonial section ">
      <h2 className="section_title"> Testimonial</h2>
      <span className="section_subtitle">My Client saying:</span>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          568: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="testimonial_container container "
      >
        {testimony.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="testimonial_content container grid">
              <div className="testimonial_data">
                <div className="testimonial_header">
                  <img src={client.img} alt="" className="testiomonial_img" />
                  <div>
                    <h3 className="testimonial_name">{client.name}</h3>
                    <span className="testimonial_client">
                      {client.Ocupation}
                    </span>
                  </div>
                </div>
                <div>
                  <i className="uil uil-star testimonial_icon-star"></i>
                  <i className="uil uil-star testimonial_icon-star"></i>
                  <i className="uil uil-star testimonial_icon-star"></i>
                  <i className="uil uil-star testimonial_icon-star"></i>
                  <i className="uil uil-star testimonial_icon-star"></i>
                </div>
              </div>
              <p className="testimonial_description">{client.descriprion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
