import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import { Image } from "react-bootstrap";
import "./avatar.scss";

const Avatar = () => {
  return (
    <div className={"avatar"}>
      <LinkContainer to={`${RoutePath.dashboard}`}>
        <Image
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          roundedCircle
          className={"img"}
        />
      </LinkContainer>
    </div>
  );
};

Avatar.defaultProps = {};

export default Avatar;
