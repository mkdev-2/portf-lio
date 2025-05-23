import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaravel, 
  faPhp, 
  faHtml5, 
  faCss3Alt, 
  faReact, 
  faVuejs, 
  faNode, 
  faJs, 
  faPython,
  faDocker,
  faGithub,
  faAws,
  faBootstrap,
  faSass,
  faWordpress,
  faAngular,
  faGitAlt,
  faNpm
} from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  faLaravel,
  faPhp,
  faHtml5,
  faCss3Alt,
  faReact,
  faVuejs,
  faNode,
  faJs,
  faPython,
  faDocker,
  faGithub,
  faAws,
  faBootstrap,
  faSass,
  faWordpress,
  faAngular,
  faGitAlt,
  faNpm
};

export default function Brands({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
                <FontAwesomeIcon 
                  icon={iconMap[item.icon]} 
                  size="4x" 
                  color="white" 
                  style={{ 
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))'
                  }}
                  className="tech-icon"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style jsx="true">{`
        .tech-icon:hover {
          opacity: 1 !important;
          transform: scale(1.1);
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.5)) !important;
        }
      `}</style>
    </div>
  );
}
