import React from 'react';
import "./../assets/css/bootstrap.min.css";
import "./../assets/css/jsvectormap.css";
import "./../assets/css/responsive.css";
import "./../assets/css/style.css";
import "./../assets/css/swiper-bundle.min.css";

const Header = () => {
  return (
    <header className="header-area">
      <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
          <div className="header-left d-flex align-items-center">
            <a href="index.html" className="logo">
              <img src="assets/imgs/logo.svg" alt="Logo" />
            </a>

            <div className="header-left-right">
              <a href="contact.html" className="theme-btn">Contact Us</a>
              <span className="menu-bar">
                <i className="las la-bars"></i>
              </span>
            </div>

            <nav className="navbar-wrapper">
              <span className="close-menu-bar">
                <i className="las la-times"></i>
              </span>
              <ul>
                {/* Add your navigation items here */}
                {/* Example: */}
                <li><a href="index.html">Home</a></li>
                <li><a href="company.html">Company</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <div className="header-contact-info d-flex align-items-center">
              <div className="phone-number">
                <a href="tel:+1-938-740-7555">
                  Call Us
                  <i className="iconoir-arrow-up-right"></i>
                </a>
                +1-938-740-7555
              </div>
              <a href="contact.html" className="theme-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
