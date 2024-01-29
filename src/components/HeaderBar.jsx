import React from 'react';
import "./../assets/css/style.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="custom-container">
        <div className="header-bar-body d-flex align-items-center justify-content-between">
          <div className="left">
            <select className="country-select" name="country" id="country">
              <option value="en">EN</option>
              <option value="uk">UK</option>
              <option value="dz">DZ</option>
            </select>
          </div>
          <div className="right">
            <p>
              Level up your business with <a href="about.html" data-word="SYNCK." id="dataWord">SYNCK.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
