import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area">
      <img src="assets/imgs/bg-shape-4.svg" alt="Shape" className="animation-slide-right bg-shape" />
      <div className="footer-top">
        <div className="custom-container">
          <div className="custom-row align-items-end justify-content-between">
            <div className="left-content">
              <a href="index.html" className="logo">
                <img src="assets/imgs/logo-white.svg" alt="Logo" />
              </a>
              <p>We provide the expertise and support to <br />
                propel your business forward.</p>
              <form action="https://wpriverthemes.com/HTML/synck/assets/mail/subscribe.php" method="POST" className="subscribe-form">
                {/* Your form input fields go here */}
              </form>
              <div className="footer-clients d-flex align-items-center">
                <div className="footer-client-img">
                  <img src="assets/imgs/youtube.svg" alt="Youtube" />
                </div>
                <div className="footer-client-img">
                  <img src="assets/imgs/webflow.svg" alt="webflow" />
                </div>
                <div className="footer-client-img">
                  <img src="assets/imgs/upwork.svg" alt="upwork" />
                </div>
                <div className="footer-client-img">
                  <img src="assets/imgs/shopify.svg" alt="shopify" />
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="right-content-inner">
                <h2>Let’s get started on something great</h2>
                <p>Our team of IT experts looks forward to meeting with you <br />
                  and providing valuable insights tailored to your business.</p>
                <a href="contact.html" className="theme-btn">Get an appointment now</a>

                <div className="footer-experience d-flex align-items-center">
                  <div className="footer-experience-item">
                    <h1>2 <span>Mins</span></h1>
                    <p>Response Time</p>
                  </div>
                  <div className="footer-experience-item">
                    <h1>99%</h1>
                    <p>Client Satisfaction</p>
                  </div>
                  <div className="footer-experience-item">
                    <h1>22+ <span>Years</span></h1>
                    <p>Field Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="custom-container">
          <div className="custom-row">
            {/* Your footer links and contact info go here */}
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="custom-container">
          <div className="custom-row d-flex align-items-center justify-content-between">
            <ul className="social-links d-flex align-items-center">
              <li><a href="#">
                <i className="iconoir-dribbble"></i>
              </a></li>
              <li><a href="#">
                <i className="iconoir-twitter"></i>
              </a></li>
              <li><a href="#">
                <i className="iconoir-instagram"></i>
              </a></li>
              <li><a href="#">
                <i className="iconoir-linkedin"></i>
              </a></li>
            </ul>

            <p>&copy; 2023 All rights reserved by <a href="https://themeforest.net/user/wordpressriver/portfolio">WordpressRiver</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
