import React from "react";
import styles from "./prioritySelector.module.scss";
import { Col, Image, Nav, Row, Tab } from "react-bootstrap";
import cn from "classnames";
import { PrioritySlide } from "./prioritySlide";
import { getPriorityPrograms } from "../../store/action/priorityAction";
import { useDispatchTyped, useSelectorTyped } from "../../hooks/useTypedRedux";
import { rootState } from "../../types/types";
import { Loader } from "../uiKit/loader";

interface data {
  icon: string;
  title: string;
  type: string;
  description: string;
  conditions: [];
}

interface PrioritySelectorProps {}

const PrioritySelector: React.FC<PrioritySelectorProps> = () => {
  const { priorityPrograms, isLoading } = useSelectorTyped(
    (state: rootState) => state.priority
  );

  const dispatch = useDispatchTyped();
  React.useEffect(() => {
    if (!priorityPrograms.length) {
      dispatch(getPriorityPrograms());
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  const activeTab = priorityPrograms[0] ? priorityPrograms[0].name : 1;
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab}>
      <Row>
        <Col sm={12}>
          <Nav variant="pills" bsPrefix={"PrioritySelector"}>
            {priorityPrograms.map((item, i) => {
              return (
                <Nav.Item key={i}>
                  <Nav.Link eventKey={item.name}>
                    <div className={styles.desk}>
                      <div className={cn(styles.icon, "icon")}>
                        <Image src={item.icon} />
                      </div>
                      <div className={"d-flex flex-column text"}>
                        Priority <strong>{item.name}</strong>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Col>
      </Row>
      <div className={styles.PrioritySlide}>
        {priorityPrograms.map(({ icon, ...item }) => {
          return <PrioritySlide {...item} key={icon} />;
        })}
      </div>
    </Tab.Container>
  );
};

PrioritySelector.defaultProps = {};

export default PrioritySelector;
