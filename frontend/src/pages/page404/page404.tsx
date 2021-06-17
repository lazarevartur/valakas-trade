import React from "react";
import styles from "./page404.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/routesConfig";
import { Button, Container } from "react-bootstrap";

interface Page404Props {}

const Page404: React.FC<Page404Props> = () => {
  return (
    <div>
      <Container className={styles.page404}>
        <h2>404</h2> <p>Sorry, page you are looking is not found.</p>
        <Link to={RoutePath.home}>
          <Button>Домой</Button>
        </Link>
      </Container>
    </div>
  );
};

Page404.defaultProps = {};

export default Page404;
