import React from "react";
import styles from "./Optional.module.scss";

interface OptionalProps {}

const Optional: React.FC<OptionalProps> = () => {
  return <div>Optional</div>;
};

Optional.defaultProps = {};

export default Optional;
