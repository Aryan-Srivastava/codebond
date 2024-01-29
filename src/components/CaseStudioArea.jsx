import React from 'react';

const CaseStudioArea = () => {
  return (
    <section className="case-studio-area">
      <div className="custom-container">
        <div className="case-studio-header text-center">
          <h5 className="section-subtitle">CASE STUDIES</h5>
          <h1 className="section-title">Detailing of our products</h1>
        </div>

        <div className="case-studio">
          <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" id="development-tab" data-bs-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="true">Development</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="woo_commerce-tab" data-bs-toggle="tab" href="#woo_commerce" role="tab" aria-controls="woo_commerce" aria-selected="false">Woo Commerce</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="crm_solutions-tab" data-bs-toggle="tab" href="#crm_solutions" role="tab" aria-controls="crm_solutions" aria-selected="false">CRM Solutions</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="web_designing-tab" data-bs-toggle="tab" href="#web_designing" role="tab" aria-controls="web_designing" aria-selected="false">Web Designing</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" id="it_support-tab" data-bs-toggle="tab" href="#it_support" role="tab" aria-controls="it_support" aria-selected="false">IT Support</button>
            </li>
          </ul>

          <div className="tab-content case-studio-tab-content">
            {/* Development Tab */}
            <div className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="#" className="case-studio-cat">Web Development</a>
                    <img src="assets/imgs/case-studio-1-1.jpg" alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="#" className="case-studio-cat">Mobile Development</a>
                    <img src="assets/imgs/case-studio-2-2.jpg" alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src="assets/imgs/service-icon-1.svg" alt="ICON" />
                    <h3>Development</h3>
                    <p>Software development is a dynamic and rapidly evolving field that plays a
                      pivotal role in shaping the digital landscape we live in today. It
                      encompasses the processes, methodologies, and practices used to design,
                      create, deploy, and maintain software applications and systems.</p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Tabs - Similar structure */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudioArea;
