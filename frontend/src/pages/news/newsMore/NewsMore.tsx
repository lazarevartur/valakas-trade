import React from "react";
import styles from "./newsMore.module.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import cn from "classnames";
import { RoutePath } from "../../../routes/routesConfig";
import { Link } from "react-router-dom";
import { INewsData, rootState } from "../../../types/types";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { getNewsById } from "../../../store/action/newsAction";
import { Loader } from "../../../component/uiKit/loader";
import { FullScreenLoader } from "../../../component/uiKit/FullScreenLoader";
import { getRuDate } from "../../../utils/utils";
import _ from "lodash";
import Page404 from "../../page404/page404";

interface NewsMoreProps {
  match?: any;
}

const NewsMore: React.FC<NewsMoreProps> = ({ match }) => {
  const { activeNews, isLoading } = useSelectorTyped(
    (state: rootState) => state.news
  );

  const { createdAt, title, content, img_url } = activeNews;
  const dispatch = useDispatchTyped();
  const { id } = match.params;
  React.useEffect(() => {
    dispatch(getNewsById(id));
  }, []);
  if (isLoading) {
    return <FullScreenLoader />;
  }
  if (_.isEmpty(activeNews)) {
    return <Page404 />;
  }
  return (
    <div className={cn(styles.bgf9, styles.NewsMore)}>
      <Container className={styles.container}>
        <Link to={RoutePath.news}>
          {" "}
          <a className={styles.goBack}>Назад</a>
        </Link>
        <Row>
          <Col>
            <Image src={img_url} className={styles.img} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={styles.title}>{title}</h1>
            <small>{getRuDate(createdAt)}</small>
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col>{content}</Col>
        </Row>
      </Container>
    </div>
  );
};

NewsMore.defaultProps = {};

export default NewsMore;
