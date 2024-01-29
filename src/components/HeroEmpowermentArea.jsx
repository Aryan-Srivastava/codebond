import React from 'react';

const HeroEmpowermentArea = () => {
  return (
    <section className="hero-empowerment-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="hero-empowerment-left-content">
            <h5 className="section-subtitle">EMPOWERMENT</h5>
            <h1 className="section-title fade-in">Seamless IT for your business, boosting your growth.</h1>
            <p>We provide the expertise and support to propel your
              business forward in the digital landscape.</p>
            <div className="btns-group d-flex">
              <a href="#" className="theme-btn">Learn More</a>
              <a href="contact.html" className="theme-btn2">Let's Talk
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <div className="hero-empowerment-right-content">
            <div className="top-content">
              <img className="desktop fade-in" src="assets/imgs/bg1-1.png" alt="Empowerment" />
              <img className="mobile" src="assets/imgs/bg1.png" alt="Empowerment" />

              <div className="experience-box simple-shadow bounce-in">
                <div className="experience-body d-flex align-items-center">
                  <img src="assets/imgs/icon1.svg" alt="Icon" />

                  <div className="experience-content d-flex align-items-center">
                    <h1>+8</h1>
                    <p>
                      Years
                      <span>Experience</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-content d-flex">
              <a href="team.html" className="our-expert-team-box simple-shadow bounce-in delay-2">
                <div className="our-expert-team-box-inner d-flex align-items-center">
                  <div className="imgs imgs1 d-flex align-items-center">
                    <img src="assets/imgs/small-img-4.png" alt="team" />
                    <img src="assets/imgs/small-img-3.png" alt="team" />
                    <img src="assets/imgs/small-img-2.png" alt="team" />
                    <img src="assets/imgs/small-img-1.png" alt="team" />
                  </div>
                  <p>
                    Meet
                    <span>Our Experts</span>
                  </p>
                </div>
              </a>

              <div className="google-reviews-box simple-shadow bounce-in delay-3">
                <div className="left">
                  <span>Verified by</span>
                  <img src="assets/imgs/icon2.svg" alt="Google" />
                </div>
                <div className="right">
                  <div className="stars d-flex align-items-center">
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                  </div>
                  <p>
                    3245
                    <span>Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpowermentArea;
