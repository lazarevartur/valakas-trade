import React, { useRef, useState } from "react";
import styles from "./profile.module.scss";
import { Tab, Tabs } from "react-bootstrap";
import { PersonalData } from "./personalData";
import { Security } from "./security";
import { useLocation } from "react-router-dom";
import useGetParameter from "../../../hooks/useGetParameter";
import { GET_PARAMS } from "../../../const/popup";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Tabs
      defaultActiveKey="PersonalData"
      id="tab-personalData"
      className={styles.nav_tabs}
    >
      <Tab eventKey="PersonalData" title="Личные данные">
        <PersonalData />
      </Tab>
      <Tab eventKey="Security" title="Безопасность">
        <Security />
      </Tab>
    </Tabs>
  );
};

export default Profile;
