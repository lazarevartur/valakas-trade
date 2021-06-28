import React from "react";
import cn from "classnames";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import styles from "./InvestmentPackages.module.scss";
import { defaultComponentProps, rootState } from "../../../types/types";
import { BinarCard } from "../../binarCard";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { getMrxPrograms } from "../../../store/action/programsAction";
import { Loader } from "../../uiKit/loader";
import { getChunks } from "../../../utils/utils";
import { RoutePath } from "../../../routes/routesConfig";
import { Balance } from "../../workWithWallets/Balance";

interface InvestmentPackagesProps extends defaultComponentProps {}

const InvestmentPackages: React.FC<InvestmentPackagesProps> = () => {
  const { mrxPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.mrx
  );
  const {
    userData: { token },
  } = useSelectorTyped((state: rootState) => state.authentication);
  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    dispatch(getMrxPrograms());
  }, []);

  return (
    <div className={cn(styles.InvestmentPackages)}>
      <Balance />
      <Container>
        <Row>
          <Col lg={12}>
            <h5 className={styles.title}>Инвестиционные пакеты</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 2, span: 8 }}>
            <p className={styles.text}>
              Выберите любой пакет из представленных ниже и получайте доходность
              на следующих условиях
            </p>
          </Col>
        </Row>
        <Row className={cn(styles.description)}>
          <Col lg={4}>
            <p className={cn(styles.accent)}>
              до <span>2%</span>
            </p>
            <p>плавающая ставка</p>
          </Col>
          <Col lg={5}>
            <p className={cn(styles.accent)}>
              <span>180-270 дней</span>
            </p>
            <p>календарных дней</p>
          </Col>
          <Col lg={3}>
            {" "}
            <p className={cn(styles.accent)}>
              <span>00:00</span>
            </p>
            <p>время выставления доходности</p>
          </Col>
        </Row>
        <Row className={cn(styles.cardGroup)}>
          <Col lg={12}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {getChunks(mrxPrograms).map((chunk) => {
                  return (
                    <>
                      <CardDeck>
                        {chunk.map(({ _id, ...program }) => {
                          return (
                            <BinarCard
                              {...program}
                              linkTo={
                                !token
                                  ? RoutePath.login
                                  : RoutePath.replenishmentWallet
                              }
                            />
                          );
                        })}
                      </CardDeck>
                      <br />
                    </>
                  );
                })}
              </>
            )}
          </Col>
          <Row>
            <Col lg={7} className={cn(styles.desk)}>
              * Партнер имеет право приобрести не более одного инвестиционного
              пакета. Чтобы увеличить инвестиционный пакет, сделайте апгрейд до
              следующего пакета с объемом больше, чем предыдущий
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

InvestmentPackages.defaultProps = {};

export default InvestmentPackages;
