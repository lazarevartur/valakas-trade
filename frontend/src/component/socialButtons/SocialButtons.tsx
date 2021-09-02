import React from "react";
import "./socialButtons.scss";

const SocialButtons = ({ className = "" }) => {
  return (
    <div className={`social-buttons ${className}`}>
      <a href="https://t.me/mirax_tech_channel" target={"_blank"}>
        <i className="fab fa-telegram" />
      </a>
    </div>
  );
};

SocialButtons.defaultProps = {};

export default SocialButtons;
