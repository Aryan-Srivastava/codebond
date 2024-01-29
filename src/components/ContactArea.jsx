import React from 'react';

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap">
            <div className="contact-form-body">
              <h5 className="section-subtitle">Contact</h5>
              <h1 className="section-title">Lets get in touch</h1>
              <p>You can reach us anytime via <a href="mailto:bluebase@mail.com">bluebase@mail.com</a></p>
              <form action="https://wpriverthemes.com/HTML/synck/assets/mail/contact.php" method="POST" className="contact-form">
                {/* Your form input fields go here */}
              </form>
            </div>
          </div>

          <div className="contact-experience">
            <ul>
              <li>
                <h1>22+ <span>Years</span></h1>
                <p>Field Experience </p>
              </li>
              <li>
                <h1>950+ <span>Projects</span></h1>
                <p>Done Around World </p>
              </li>
              <li>
                <h1>99%</h1>
                <p>Client Satisfaction</p>
              </li>
              <li>
                <h1>1995+ <span>Year</span></h1>
                <p>Established On</p>
              </li>
              <li>
                <h1>2 <span>Mins</span></h1>
                <p>Response Time</p>
              </li>
            </ul>
          </div>

          <div className="contact-infos">
            <div className="contact-infos-inner">
              {/* Your contact info, office info, and social links go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
