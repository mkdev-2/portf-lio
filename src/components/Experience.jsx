import React from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';


export default function Experience({ hardSkills, softSkills }) {
  const { sectionHeading: hardSkillsHeading, allExperience: hardSkillsExperience } = hardSkills || {};
  const { sectionHeading: softSkillsHeading, allExperience: softSkillsExperience } = softSkills || {};
  if (!hardSkills || !softSkills) {
    return <p>Dados não disponíveis</p>;
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <><section className="section gray-bg">
      <div className="container">
        {hardSkillsHeading && (
          <>
            <SectionHeading miniTitle={hardSkillsHeading.miniTitle} title={hardSkillsHeading.title}  />
            <Slider {...settings}>
              {hardSkillsExperience?.map((item, index) => (
                <div
                  className="col-4"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                >
                  <div className="ex-box" style={{ background: "none" }}>
                    <div className="ex-left" style={{ 'min-height': "150px" }}>
                      <h4>{item.designation}</h4>
                      <label style={{fontSize: '14px', marginTop: '10px'}}>{item.jobType}</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="ex-right">
                      <h5>{item.companyTitle}</h5>
                      <p className="m-0">{item.companyDescription}</p>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </section><section className="section">
        <div className="container">
          {softSkillsHeading && (
            <>
              <SectionHeading miniTitle={softSkillsHeading.miniTitle} title={softSkillsHeading.title} />

              <Slider {...settings}>
                {softSkillsExperience?.map((item, index) => (
                  <div
                  className="col-4"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={index * 100}
                >
                  <div className="ex-box" style={{ background: "none" }}>
                    <div className="ex-left" style={{ 'min-height': "150px" }}>
                      <h4>{item.designation}</h4>
                      <label style={{fontSize: '14px', marginTop: '10px'}}>{item.jobType}</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="ex-right">
                      <h5>{item.companyTitle}</h5>
                      <p className="m-0">{item.companyDescription}</p>
                    </div>

                  </div>
                </div>
                ))}
              </Slider>
            </>
          )}
        </div>
      </section></>
  );
}
