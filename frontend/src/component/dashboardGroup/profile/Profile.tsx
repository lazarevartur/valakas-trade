import React, { useRef, useState } from "react";
import styles from "./profile.module.scss";
import { Tab, Tabs } from "react-bootstrap";
import { PersonalData } from "./personalData";
import { Security } from "./security";
import { useSelectorTyped } from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { Loader } from "../../uiKit/loader";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { userDashboard, isLoading } = useSelectorTyped(
    (state: rootState) => state.dashboard
  );

  return (
    <>
      {isLoading ? (
        <div className={styles.fakeBg}>
          <Loader />
        </div>
      ) : (
        <Tabs
          defaultActiveKey="PersonalData"
          id="tab-personalData"
          className={styles.nav_tabs}
        >
          <Tab eventKey="PersonalData" title="Личные данные">
            <PersonalData profile={userDashboard.contact_details} />
          </Tab>
          <Tab eventKey="Security" title="Безопасность">
            <Security />
          </Tab>
        </Tabs>
      )}
    </>
  );
};

export default Profile;
