import React from "react";
import styles from "./howToMakeMoneyHere.module.scss";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { HowMakingMoney } from "../../component/HowToMakeMoneyHereGroup/howMakingMoney";
import TwoCols from "../../layouts/TwoCols/TwoCols";
import cn from "classnames";
import { Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";
import howMakeImg1 from "../../assets/img/HowToMakeMoneyHere1.jpg";
import howMakeImg2 from "../../assets/img/HowToMakeMoneyHere2.jpg";
import howMakeImg3 from "../../assets/img/HowToMakeMoneyHere3.jpg";
import howMakeImg4 from "../../assets/img/HowToMakeMoneyHere4.jpg";

interface HowToMakeMoneyHereProps {}

const HowToMakeMoneyHere: React.FC<HowToMakeMoneyHereProps> = () => {
  return (
    <div className={styles.HowToMakeMoneyHere}>
      <FullWidthRow>
        <HowMakingMoney />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          bigMargin
          className={cn(styles.NewApproach)}
          LeftCol={() => {
            return (
              <>
                <h5 className={cn(styles.title)}>Новый подход к заработку</h5>
                <p className={styles.text}>
                  Почему большинство не имеет собственных накоплений, зато имеет
                  непогашенный кредит, живет от зарплаты до зарплаты и знает об
                  отпуске в теплых странах только из интернета? Самая
                  существенная проблема заключается в том, что люди стесняются,
                  боятся или просто не знают, что делать, как заработать.
                </p>
                <p className={styles.text}>
                  Они живут с негативной установкой, что деньги не даются просто
                  так, их тяжело заработать, и для этого нужно крутиться, как
                  белка в колесе. Результат такого мышления – сущие копейки за
                  тяжелый ежедневный труд. Если спросить такого человека, хочет
                  ли он быть богатым, он, безусловно, ответит, что да. Но если
                  спросить, сколько денег ему необходимо в месяц, он, вероятно,
                  не сможет дать четкий ответ. В этом и заключается проблема. Вы
                  должны четко знать, чего вы хотите достичь, и идти к своей
                  цели, используя каждую возможность.
                </p>
              </>
            );
          }}
          RightCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg2} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        {" "}
        <TwoCols
          className={cn(styles.thinkOutside)}
          bigMargin
          RightCol={() => {
            return (
              <>
                <h5 className={cn(styles.title)}>Мыслить нестандартно</h5>
                <p className={styles.text}>
                  В детстве мы слышали: не в деньгах счастье. В итоге мы не
                  позволяем себе радоваться, отказываемся от интересных
                  предложений и медлим с принятием решения, упуская свою выгоду.
                  Конечно, деньги – это не само счастье, но они открывают новые
                  возможности, делают нашу жизнь полноценной и усиливают
                  состояние счастья.
                </p>
                <p className={styles.text}>
                  Чтобы получать достойный доход, важно выбрать подходящую
                  стратегию заработка. А еще – избавиться от заблуждений,
                  которые мешают эффективно распоряжаться деньгами и много
                  зарабатывать.
                </p>
              </>
            );
          }}
          LeftCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg3} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.Dreams)}
          LeftCol={() => {
            return (
              <div>
                <h5 className={cn(styles.title)}>От мечты до результата</h5>
                <p className={styles.text}>
                  Инвестирование в проекты блокчейн-индустрии – один из способов
                  приумножить свой капитал и обеспечить себе доход. Но без опыта
                  и знаний покорить эту нишу достаточно сложно. Вам необходимо
                  потратить большое количество времени, чтобы изучить предмет
                  ваших инвестиций, но это еще не гарантирует получение
                  стабильного дохода.
                </p>
              </div>
            );
          }}
          RightCol={() => {
            return (
              <p className={styles.text_right}>
                Инвесторам платформы Mirax предоставляется возможность
                зарабатывать регулярные вознаграждения от инвестиций сразу в
                несколько проектов – от добычи криптовалюты с помощью
                майнинговых ферм до DeFi-платформ, стейкинга и BNB Vault. Так,
                вы получаете несколько вариантов притока средств, которые в
                сочетании друг с другом могут представлять значительную сумму.
                При этом вам не нужно обладать глубокими знаниями о предмете
                инвестиций – Mirax тщательно выбирает зарекомендованные проекты
                и проводит детальный аудит, прежде чем представить их инвестору.
              </p>
            );
          }}
          FullWidthRow={() => {
            return <Image className={styles.full_width} src={howMakeImg4} />;
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.Satisfied)}
          RightCol={() => {
            return (
              <div className={styles.Satisfied_bg}>
                <h5 className={cn(styles.Satisfied_title)}>
                  Удовлетворенность жизнью растет вместе с состоянием
                </h5>
                <p className={styles.text}>
                  Наша миссия – выстроить глобальную сеть для наших инвесторов,
                  в которой вы сами решаете, когда и в какой проект
                  инвестировать, распоряжаетесь собственными деньгами и
                  обеспечиваете себе высокий доход при полном отсутствии рисков.
                  Вы можете воспользоваться разнообразным инвестиционным
                  предложением Mirax, рассчитанным на разных инвесторов с
                  различными депозитами.
                </p>
              </div>
            );
          }}
          LeftCol={() => {
            return (
              <>
                <Image className={styles.img} src={howMakeImg1} />
              </>
            );
          }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <TwoCols
          className={cn(styles.become_partner)}
          FullWidthRow={() => {
            return (
              <div className={styles.become_partner_flex}>
                <h5 className={styles.become_partner_title}>
                  Хотите изменить жизнь? Сделайте это с Mirax{" "}
                  <span>прямо сейчас</span>!
                </h5>
                <LinkContainer to={RoutePath.registration}>
                  <Button className={styles.become_partner_button}>
                    Стать партнером
                  </Button>
                </LinkContainer>
              </div>
            );
          }}
        />
      </FullWidthRow>
    </div>
  );
};

export default HowToMakeMoneyHere;
