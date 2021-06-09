import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { PortfolioTwoData } from "./../Components/PortfolioTwoData";
function PortfolioTwo() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio </h2>
      <span className="section_subtitle">Most Website</span>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="portfolio_container container "
      >
        <div className="swiper-wrapper overflow-swiper">
          {/* portfolio 1 */}
          {PortfolioTwoData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="portfolio_content grid ">
                <img className="portfolio_img" src={data.img} alt="" />
                <div className="portfolio_data">
                  <h3 className="portfolio_title">{data.title}</h3>
                  <p className="portfolio_description">{data.description}</p>
                  <a
                    href={data.link}
                    className="button button-flex button--small portfolio_button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button_icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default PortfolioTwo;
