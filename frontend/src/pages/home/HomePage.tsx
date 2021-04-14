import React from "react";
import { Container, Jumbotron, Image, Row, Col } from "react-bootstrap";
import "./homePage.scss";
import { FullscreenVideoBG } from "../../component/fullscreenVideoBG";
import { JumbotronMain } from "../../component/homePageLandingGroup/jumbotronMain";

const HomePage = () => {
  return (
    <>
      <div className={"main-page-slide-1"}>
        {/*<Jumbotron>*/}
        {/*  <Container>*/}
        {/*    <h1 className={"text-center"}>*/}
        {/*      Лучшие высокодоходные инструменты нового времени в{" "}*/}
        {/*      <span className={"blue"}>одном месте!</span>*/}
        {/*    </h1>*/}
        {/*    <div className={"main-page-slide-1_img"}>*/}
        {/*      <Image*/}
        {/*        src="https://antares1.trade/core/templates/public/img/main_page/main_slide_1ru.png?ver=1.10"*/}
        {/*        fluid*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </Container>*/}
        {/*</Jumbotron>*/}

        <>
          <JumbotronMain />
        </>
      </div>
      <div className={"main-page-slide-2"}>
        <Container>
          <Row>
            <Col sm={4} className={"main-page-slide-2_text"}>
              <p>
                Valakas — платформа, продвигающая инвестиционные и сетевые
                компании, цифровые продукты и стартапы на рынок при помощи
                модели реферальных систем. Antares предоставляет пользователям
                по всему миру возможность обретения финансовой свободы и
                получения современного бизнес-образования.
              </p>
            </Col>
            <Col sm={8} className={"main-page-slide-2_video"}>
              <iframe
                width="750"
                height="430"
                src="https://www.youtube.com/embed/A3YCoorwGo0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-page-slide-3 mt-5 mb-5">
        <Container>
          <h1 className={"text-center"}>
            Valakas базируется на{" "}
            <span className={"blue"}>двух основных принципах</span>
          </h1>
          <Row>
            <Col sm={6} className={"info-block"}>
              <Image
                src={
                  "https://antares1.trade/core/templates/public/img/main_page/main_section2_1.svg"
                }
              />
              <p>
                <span className={"blue"}>
                  <strong>Развитие собственного сообщества</strong>
                </span>
                , основанного на принципах реферальных систем, с помощью которых
                каждый партнёр компании сможет создать себе неограниченный
                источник дохода.
              </p>
            </Col>
            <Col sm={6} className={"info-block"}>
              <Image
                src={
                  "https://antares1.trade/core/templates/public/img/main_page/main_section2_1.svg"
                }
              />
              <p>
                <span className={"blue"}>
                  <strong>Развитие собственного сообщества</strong>
                </span>
                , основанного на принципах реферальных систем, с помощью которых
                каждый партнёр компании сможет создать себе неограниченный
                источник дохода.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

HomePage.defaultProps = {};

export default HomePage;
