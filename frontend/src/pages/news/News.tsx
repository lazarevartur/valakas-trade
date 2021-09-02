import React from "react";
import styles from "./news.module.scss";
import { Card, CardDeck, Container } from "react-bootstrap";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import { rootState } from "../../types/types";
import { getAllNews } from "../../store/action/newsAction";
import { getChunks, getRuDate } from "../../utils/utils";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { FullScreenLoader } from "../../component/uiKit/FullScreenLoader";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  const { news, isLoading } = useSelectorTyped(
    (state: rootState) => state.news
  );
  const dispatch = useDispatchTyped();
  const location = useLocation();
  const copyArray = [...news].reverse();
  const chunks = getChunks(copyArray);

  const $startOffer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if ($startOffer.current) {
      $startOffer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  React.useEffect(() => {
    dispatch(getAllNews());
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <div className={styles.bgf9} ref={$startOffer}>
      <Container className={styles.news}>
        <h2>Новости</h2>
        {chunks.map((chunk, i) => {
          return (
            <CardDeck className={"pb-5"} key={i}>
              {chunk.map((news, i, array) => {
                return (
                  <>
                    <Card key={news.title}>
                      <LinkContainer to={`/news/${news._id}`}>
                        <a target={"_blank"} rel="noreferrer">
                          <Card.Img
                            variant="top"
                            height={260}
                            src={news.img_url}
                          />
                          <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                            <Card.Text>{getRuDate(news.createdAt)}</Card.Text>
                          </Card.Body>
                        </a>
                      </LinkContainer>
                    </Card>
                    {array.length < 3 &&
                      i === array.length - 1 &&
                      [...Array(3 - array.length)].map((item, i) => {
                        return <Card key={i} className={"bg-transparent"} />;
                      })}
                  </>
                );
              })}
            </CardDeck>
          );
        })}
      </Container>
    </div>
  );
};

News.defaultProps = {};

export default News;
