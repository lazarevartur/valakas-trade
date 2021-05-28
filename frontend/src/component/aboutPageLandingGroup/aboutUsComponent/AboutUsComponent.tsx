import React from "react";
import styles from "./AboutUsComponent.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Image, Row } from "react-bootstrap";
interface AboutUsComponentProps extends defaultComponentProps {}

const AboutUsComponent: React.FC<AboutUsComponentProps> = ({
  className = "",
}) => {
  return (
    <Row className={styles.bg}>
      <Col lg={6} className={styles.content}>
        <h2>
          Руководствуйтесь балансом между возможными рисками и потенциальной
          доходностью
        </h2>
        <p>
          На современном рынке финансовые инструменты работают в одном
          направлении, ограничивая возможности инвесторов и увеличивая риски.
        </p>
        <p>
          <span className={styles.accent}>Mirax</span> расширяет возможности
          заработка для своих партнеров, объединяя самые прибыльные и
          перспективные направления: блокчейн-проекты, майнинговые компании,
          цифровые продукты, сетевые компании и стартапы. Откройте для себя
          возможность получения финансовой свободы без рисков!
        </p>
      </Col>
      <Col lg={6}>
        <Image
          className={styles.bg_img}
          src={
            "https://s3-alpha-sig.figma.com/img/ed03/56cc/1f21eea4f24543e574c71ad07991b283?Expires=1623024000&Signature=MXsXXMpwv3I9htZVqgAGq84TJVtU2n61XGhjpNLJ6aMC5LJyygbou5g3pV1~DcLBUf~6uZn1Tn6HlMNBF9jIA1r4jNrE64AmK4HI9s60N3IGqHQEyNCVgY3IkWZEYg2ShgyTiNyMZJgJ5zy9Ohd~9WkJ59-HDnzmsYa2jq4gM7VVM9u4psbb3ddfwQdCjsJHQtD5K1R7dwO0dNWxYlvYNB9BQY6UDB2qOBdZeZ85BcxJMkT5uqEGZ4OyQ2gg89gP~uqmMB7c4HCVEmgsgUcjR-0VnuWMot34iWDwJTEyXBIbYyUYPZEGxCUea9kbFmGugW5tDRHtl~mWoCFk49L2Mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
        />
      </Col>
    </Row>
  );
};

AboutUsComponent.defaultProps = {};

export default AboutUsComponent;
