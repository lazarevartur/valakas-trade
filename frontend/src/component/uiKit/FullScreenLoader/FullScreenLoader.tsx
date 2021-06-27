import React from "react";
import styles from "./FullScreenLoader.module.scss";
import { Loader } from "../loader";

interface FullScreenLoaderProps {}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = () => {
  return (
    <div className={styles.FullScreenLoader}>
      <Loader />
    </div>
  );
};

FullScreenLoader.defaultProps = {};

export default FullScreenLoader;
