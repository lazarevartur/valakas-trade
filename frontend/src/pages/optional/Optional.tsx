import React from "react";
import styles from "./Optional.module.scss";
import { JumbotronCustom } from "../../component/uiKit/JumbotronCustom";
import optionalImg from "../../assets/img/MrxInvestImg.jpg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Benefits } from "../../component/homePageLandingGroup/benefits";
import svg1 from "../../assets/svg/stopwatch.svg";
import svg2 from "../../assets/svg/ratio.svg";
import svg3 from "../../assets/svg/mrx2.svg";
import svg4 from "../../assets/svg/mrx3.svg";
import cn from "classnames";
import { TwoCols } from "../../layouts/TwoCols";
import howMakeImg1 from "../../assets/img/HowToMakeMoneyHere1.jpg";
import StagesOptions from "../../component/stagesOptions/StagesOptions";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import { rootState } from "../../types/types";
import { getOptionalPrograms } from "../../store/action/optionalAction";
import { Loader } from "../../component/uiKit/loader";
import { DashboardRoute } from "../../routes/dashboard";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import useIsAuth from "../../hooks/useIsAuth";
import { useTranslation, Trans } from "react-i18next";

interface OptionalProps {}

const Optional: React.FC<OptionalProps> = () => {
  const { t } = useTranslation();
  const dataBenefist = [
    {
      title: "",
      text: t("Optional.dataBenefist.1block"),
      icon: svg3,
    },
    {
      title: "",
      text: t("Optional.dataBenefist.2block"),
      icon: svg2,
    },
    {
      title: "",
      text: t("Optional.dataBenefist.3block"),
      icon: svg4,
    },
    {
      title: "",
      text: t("Optional.dataBenefist.4block"),
      icon: svg1,
    },
  ];
  const { optionalPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.optional
  );
  const { isAuth } = useIsAuth();

  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(getOptionalPrograms());
  }, []);

  return (
    <div className={styles.Optional}>
      <JumbotronCustom
        img={optionalImg}
        title={"Optional"}
        text={t("Optional.JumbotronCustom.title")}
        className={styles.optinonal_Jumbotron}
      />
      <Container>
        <Row>
          <Col lg={12}>
            <Benefits
              title={t("Optional.dataBenefist.title")}
              data={dataBenefist}
              fourElement
            />
          </Col>
        </Row>
      </Container>
      <div className={cn(styles.description, styles.bgf9)}>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <h3 className={cn(styles.title)}>
                  {t("Optional.description.title1")}
                </h3>
                <p>{t("Optional.description.text1")}</p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <h3 className={cn(styles.title)}>
                  {" "}
                  {t("Optional.description.title2")}
                </h3>
                <p>{t("Optional.description.text2")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={cn(styles.stages_options)}>
        {isLoading ? <Loader /> : <StagesOptions rounds={optionalPrograms} />}
        {!isLoading && (
          <Row>
            <Col lg={12}>
              <LinkContainer
                to={isAuth ? DashboardRoute.optional : RoutePath.login}
              >
                <Button className={styles.button}>
                  {t("Optional.button_buy")}
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        )}
      </Container>

      <TwoCols
        className={cn(styles.Satisfied, styles.bgf9, "p-5")}
        LeftCol={() => {
          return (
            <div>
              <h5 className={cn(styles.title)}>
                {t("Optional.Satisfied.title")}
              </h5>
              <p className={styles.text}>
                {t("Optional.Satisfied.text1")}{" "}
                <span className={styles.accent}>"Placebo"</span>
              </p>
              <p>
                <Trans>{t("Optional.Satisfied.text2")}</Trans>
              </p>
              <p className={"font-italic font-weight-light"}>
                {t("Optional.Satisfied.text3")}
              </p>
              <p>
                <strong>{t("Optional.Satisfied.desk_date_start")} </strong>
                <span className={cn(styles.accentBig, styles.accent)}>
                  {t("Optional.Satisfied.date_start")}
                </span>
              </p>
            </div>
          );
        }}
        RightCol={() => {
          return (
            <>
              <Image className={styles.img} src={howMakeImg1} />
            </>
          );
        }}
      />
    </div>
  );
};

Optional.defaultProps = {};

export default Optional;
