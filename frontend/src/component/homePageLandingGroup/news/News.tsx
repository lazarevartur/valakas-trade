import React from "react";
import styles from "./News.module.scss";
import { defaultComponentProps, rootState } from "../../../types/types";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import HomeBg from "../../../assets/svg/HomeBg";
import cn from "classnames";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../routes/routesConfig";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { last3News } from "../../../store/action/newsAction";
import { LinkContainer } from "react-router-bootstrap";
import { getRuDate } from "../../../utils/utils";
import { useTranslation } from "react-i18next";

interface NewsProps extends defaultComponentProps {}

const News: React.FC<NewsProps> = ({ className = "" }) => {
  const { t } = useTranslation();
  const { isLoading, news } = useSelectorTyped(
    (state: rootState) => state.news
  );
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(last3News());
  }, []);
  return (
    <div className={cn(styles.bg, { [className]: className })}>
      <HomeBg className={styles.bg_svg} />
      <Container>
        <Row>
          <Col>
            <h5 className={styles.title}>{t("HomePage.news.title")}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              {news.map(({ img_url, title, createdAt, _id }) => {
                return (
                  <Card>
                    <LinkContainer to={`/news/${_id}`}>
                      <a>
                        <Card.Img variant="top" height={260} src={img_url} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{getRuDate(createdAt)}</Card.Text>
                        </Card.Body>
                      </a>
                    </LinkContainer>
                  </Card>
                );
              })}
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 10, span: 2 }}>
            <Link to={RoutePath.news} className={styles.all_news}>
              {t("HomePage.news.all_news")}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

News.defaultProps = {};

export default News;
