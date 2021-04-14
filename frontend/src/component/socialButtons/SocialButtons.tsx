import React from "react";
import "./socialButtons.scss";

const SocialButtons = ({ className = "" }) => {
  return (
    <div className={`social-buttons ${className}`}>
      {/*<i className="fab fa-instagram" />*/}
      <i className="fab fa-facebook" />
      <i className="fab fa-telegram" />
      {/*<i className="fab fa-youtube" />*/}
      <i className="fab fa-twitter" />
    </div>
  );
};

SocialButtons.defaultProps = {};

export default SocialButtons;
