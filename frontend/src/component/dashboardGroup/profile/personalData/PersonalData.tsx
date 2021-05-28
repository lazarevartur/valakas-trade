import React from "react";
import styles from "./personalData.module.scss";
import { Col, Row, Form, Button, Image } from "react-bootstrap";
import { CustomInput } from "../../../uiKit/customInput";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";

interface PersonalDataProps {}
const src =
  "https://s3-alpha-sig.figma.com/img/aaf6/d86c/eb742c3d298838770f5e6737a24405ba?Expires=1622419200&Signature=cKVV-aTf889f38BR~X14cCwh24gT1MyOilVVXNs30FWp9fhsB0P3f0hZ1gXgyl8~3bB~UMFeKrvUQmaMy25F4w6iIK28NuSjU3199-OCOQ~jLDVRxwFT7bl3ZRDmk3II-LrEevm6QHkTdd7SgqX5pkTCibFKafuAgBNdW51oKXJ1GPNowflvPPTjzIJCNhZ8mAJTqzUPIzDmfYwy-KWtDcVYa9GUr9vtZV-z3euDX-le8iWITfs2iPL40d6W9BaWidVMSfZVuHFv3CCrwhX5ccnIjNRdh75SFSwxAp~LrR~DdOo8iV5SHwafcr7Ag29PxrepOyULiyIGf56jaxbu5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

const PersonalData: React.FC<PersonalDataProps> = () => {
  const [name, setName] = React.useState("");
  const [subName, setSubName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [telegram, setTelegram] = React.useState("");
  const [ourTown, setOurTown] = React.useState("");
  const [whatsApp, setWhatsApp] = React.useState("");
  const [other, setOther] = React.useState("");

  return (
    <div className={styles.PersonalData}>
      <Row>
        <Col lg={3} className={styles.img_block}>
          <Image src={src} className={styles.img} />
          <Row>
            <Col className={styles.control_buttons}>
              <a href="#">Загрузить</a>
              <a href="#" className={styles.red}>
                Удалить
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Form>
            <Form.Group controlId="formName">
              <CustomInput
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSubName">
              <CustomInput
                type="text"
                placeholder="Ваше отчество (если оно есть)"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSecondName">
              <CustomInput
                type="text"
                placeholder="Ваша фамилия"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formRegion">
              <CustomInput
                type="text"
                placeholder="Ваш регион"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formOurTown">
              <CustomInput
                type="text"
                placeholder="Ваш город"
                value={ourTown}
                onChange={(e) => setOurTown(e.target.value)}
              />
            </Form.Group>
            <DashboardTitleBlock
              title={"Контактные данные"}
              withOutBottomLine
            />
            <Form.Group controlId="formPhoneNumber">
              <CustomInput
                type="text"
                placeholder="Телефон"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTelegram">
              <CustomInput
                type="text"
                placeholder="Telegram"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <CustomInput
                type="text"
                placeholder="WhatsApp"
                value={whatsApp}
                onChange={(e) => setWhatsApp(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <CustomInput
                type="text"
                placeholder="Другое"
                value={other}
                onChange={(e) => setOther(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

PersonalData.defaultProps = {};

export default PersonalData;
