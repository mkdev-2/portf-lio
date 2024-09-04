import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faPhp, faHtml5, faCss3Alt, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  faLaravel: faLaravel,
  faPhp: faPhp,
  faHtml5: faHtml5,
  faCss3Alt: faCss3Alt,
  faReact: faReact,
  faVuejs: faVuejs
};
export default function Brands({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-3 py-md-4 brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <Slider {...settings} className="slider-gap-50">
          {data.map((item, index) => (
            <div key={index}>
              <div className="pt-3 pb-3 text-center d-flex align-items-center justify-content-center w-100">
              <FontAwesomeIcon icon={iconMap[item.icon]} size="4x" color="white" />
              
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
