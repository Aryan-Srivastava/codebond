import React from 'react';

const NewsArea = () => {
  return (
    <section className="news-area">
      <div className="custom-container">
        <div className="section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">INTERESTING ARTICLES</h5>
            <h1 className="section-title">Read daily news about <br />
              startup companies</h1>
          </div>
          <p>In today's rapidly evolving world, technology is constantly shaping the way we live and interact. From artificial intelligence and automation to virtual reality, the pace of technological advancements is staggering.</p>
        </div>

        <div className="sticky-news d-flex card-h">
          <div className="news-img-box">
            <img src="assets/imgs/news-1.jpg" alt="News" />
          </div>
          <div className="news-content">
            <h5 className="section-subtitle section-subtitle1">MOBILE DEVELOPMENT</h5>
            <h1 className="section-title">
              <a href="blog-details.html">OpenAI launches new alignment division to tackle risks of superintelligent AI</a>
            </h1>
            <p>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at the point of sale.</p>
            <ul>
              <li>
                <i className="las la-check"></i> Collaboration Tools
              </li>
              <li>
                <i className="las la-check"></i> Smart Reminders
              </li>
            </ul>
            <a href="blog-details.html" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div className="news-items d-flex align-items-start">
          <div className="news-item card-h">
            <div className="news-img-box">
              <img src="assets/imgs/news-2.jpg" alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
              <h1 className="section-title">
                <a href="blog-details.html">Bluebase launches Tap to Pay on smartphone for international and domestic business</a>
              </h1>
              <p>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at the point of sale.</p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
                <li>
                  <i className="las la-check"></i> Requirement
                </li>
                <li>
                  <i className="las la-check"></i> Task Management
                </li>
              </ul>
              <a href="blog-details.html" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="news-item card-h">
            <div className="news-img-box">
              <img src="assets/imgs/news-3.jpg" alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">CLOUD COMPUTING</h5>
              <h1 className="section-title">
                <a href="blog-details.html">Google Bard launches in EU, overcoming data privacy concerns in the region</a>
              </h1>
              <p>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at the point of sale.</p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
                <li>
                  <i className="las la-check"></i> Requirement
                </li>
              </ul>
              <a href="blog-details.html" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArea;
