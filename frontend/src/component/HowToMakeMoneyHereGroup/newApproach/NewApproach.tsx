import React from "react";
import cn from "classnames";
import styles from "./newApproach.module.scss";
import { defaultComponentProps } from "../../../types/types";
import { Col, Container, Image, Row } from "react-bootstrap";

interface NewApproachProps extends defaultComponentProps {}

const NewApproach: React.FC<NewApproachProps> = () => {
  return (
    <div className={cn(styles.NewApproach)}>
      <Container>
        <Row>
          <Col lg={6}>
            <h5 className={cn(styles.title)}>Новый подход к заработку</h5>
            <p className={styles.text}>
              Почему большинство не имеет собственных накоплений, зато имеет
              непогашенный кредит, живет от зарплаты до зарплаты и знает об
              отпуске в теплых странах только из интернета? Самая существенная
              проблема заключается в том, что люди стесняются, боятся или просто
              не знают, что делать, как заработать.
            </p>
            <p className={styles.text}>
              Они живут с негативной установкой, что деньги не даются просто
              так, их тяжело заработать, и для этого нужно крутиться, как белка
              в колесе. Результат такого мышления – сущие копейки за тяжелый
              ежедневный труд. Если спросить такого человека, хочет ли он быть
              богатым, он, безусловно, ответит, что да. Но если спросить,
              сколько денег ему необходимо в месяц, он, вероятно, не сможет дать
              четкий ответ. В этом и заключается проблема. Вы должны четко
              знать, чего вы хотите достичь, и идти к своей цели, используя
              каждую возможность.
            </p>
          </Col>
          <Col lg={6}>
            <Image
              className={styles.img}
              src={
                "https://s3-alpha-sig.figma.com/img/50e7/0a98/908ef82e310ecef6e6c473e7c3b8424f?Expires=1620604800&Signature=Mhk~vutz~s~oe-tlVxghBBmW37C6hSy9xrurzGjNYXBpO1K9ouiWHD0vulCt7o8Btd0Cq0c9KgvmhjR-9uQM92Alow2emsnQ~n71ZqgzkO150G8bS62xUU17JG1IpkXahOo1RIQ9S3mhdPGmMINdI~HkPtArR1aJo6SP6vzaKtIoZROGtTqTGZPHeg~YExrhnQvYYlL~CsW2mYNXG8KioJUACpym-O0iZ~VNNtZyuj-WRuS08JDeVaO-hDs0kBVk2JEl3xS5ZDwDRp31wsY7yTr0I9HWxZwaDawFi62n12~uJldYTIG4m~PaEXzWPc1PYpQhEidGlYPlIpJgqNZtgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

NewApproach.defaultProps = {};

export default NewApproach;
