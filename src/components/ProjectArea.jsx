import React from 'react';

const ProjectArea = () => {
  return (
    <section className="project-area">
      <div className="custom-container">
        <div className="custom-row justify-content-between">
          <div className="project-left-details">
            <h5 className="section-subtitle">PROJECTS</h5>
            <h1 className="section-title">Showcase of
                our recognized
                work</h1>
            <p>Our collaborative approach ensures that we truly understand our clients  unique requirements and challenges.</p>
            <ul>
              <li>
                <i className="las la-check"></i> Managed Services and Products
              </li>
              <li>
                <i className="las la-check"></i> Flexibility and Adaptability
              </li>
              <li>
                <i className="las la-check"></i> Competitive Advantage
              </li>
            </ul>
          </div>

          <div className="project-right-slider">
            <div className="project-right-slider-inner">

              <div className="swiper project-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">E-commerce <br />
                        platform <br />
                        development.</a></h2>
                      <img src="assets/imgs/project-1.png" alt="Project" />
                    </div>
                  </div>
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">Software as a <br />
                        Service <br />
                        integration</a></h2>
                      <img src="assets/imgs/project-2.png" alt="Project" />
                    </div>
                  </div>
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">Mobile <br />
                        Platform <br />
                        Development</a></h2>
                      <img src="assets/imgs/project-3.png" alt="Project" />
                    </div>
                  </div>
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">
                        Enter into a <br />
                        Virtual Reality <br />
                        World.</a></h2>
                      <img src="assets/imgs/project-4.png" alt="Project" />
                    </div>
                  </div>
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">
                        Custom CRM <br />
                        system for a <br />
                        sales team.</a></h2>
                      <img src="assets/imgs/project-5-new.png" alt="Project" />
                    </div>
                  </div>
                  <div className="swiper-slide project-item">
                    <div className="project-item-inner">
                      <h2><a href="portfolio-details.html">
                        Wrist App<br />
                        For Your <br />
                        Productivity.</a></h2>
                      <img src="assets/imgs/project-6-new.png" alt="Project" />
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectArea;
