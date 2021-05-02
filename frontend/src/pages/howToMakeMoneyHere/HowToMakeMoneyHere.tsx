import React from "react";
import styles from "./howToMakeMoneyHere.module.scss";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { HowMakingMoney } from "../../component/HowToMakeMoneyHereGroup/howMakingMoney";
import TwoCols from "../../layouts/TwoCols/TwoCols";
import cn from "classnames";
import { Button, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RoutePath } from "../../routes/routesConfig";

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
                <Image
                  className={styles.img}
                  src={
                    "https://s3-alpha-sig.figma.com/img/50e7/0a98/908ef82e310ecef6e6c473e7c3b8424f?Expires=1620604800&Signature=Mhk~vutz~s~oe-tlVxghBBmW37C6hSy9xrurzGjNYXBpO1K9ouiWHD0vulCt7o8Btd0Cq0c9KgvmhjR-9uQM92Alow2emsnQ~n71ZqgzkO150G8bS62xUU17JG1IpkXahOo1RIQ9S3mhdPGmMINdI~HkPtArR1aJo6SP6vzaKtIoZROGtTqTGZPHeg~YExrhnQvYYlL~CsW2mYNXG8KioJUACpym-O0iZ~VNNtZyuj-WRuS08JDeVaO-hDs0kBVk2JEl3xS5ZDwDRp31wsY7yTr0I9HWxZwaDawFi62n12~uJldYTIG4m~PaEXzWPc1PYpQhEidGlYPlIpJgqNZtgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                />
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
                <Image
                  className={styles.img}
                  src={
                    "https://s3-alpha-sig.figma.com/img/739f/4461/a560b358a1a2888b50e0400021082f4f?Expires=1620604800&Signature=hi5z9jRXWC1P9Q3Gb3p7g1B-07B767awCT-Jdi07fh1XuFTAcnhGdig-ra5qpxwFdBXlOBFZkoJqYaSTfQUeje99pId4JA7ecEZ9O6064yGxjzmqe0tNMRou3oy9MQU3979qnzlbPQbmnSA8siUGuShayQSHqpTlku76LCdWP40ztlximythc8JmzKageqWhhMmeg1PTAAP8~vr8eEzx4pxzoaDmhwvDYDSUWic8nDphJ7RkU09S18qE4zAg0wBSnXq21wk5J-ACaVQYF59H1zU7KIy4nUiHnQBJLLJFJ1WWrTCekw2yuZI8QPdzlfbPfgeo~-5~zlZYZf5Jt6NVIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                />
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
            return (
              <Image
                className={styles.full_width}
                src={
                  "https://s3-alpha-sig.figma.com/img/774e/422c/884f1cc9b3a05d63360f1e09206e2c64?Expires=1620604800&Signature=IGYfF3gTFqXhFeB-nAFxc-BgXecOGL7UmIYR0RnqBDv-Jp-IsuQWujZsF35DWde3nZAnMjJw2WjgqpdT1QonbLhdynNSUIMZf5j0f4hnkIC~zLIkiI5i0gEEclWYWM6d7tOZlKhfYl1ZeL9cpUpXmFc1m2C6XpseS1wI2llPQbXrgsyhJ0tfddNF6PvyobtFZBNHd0v1~rB7q~wra86IVPwxKAMfvR5r9eSUvkdh9wuQ1w2KaB5DdrU~hdwHClAPAhyYXlfKb6~li9R1u1VZu7KidbpehVQ5eTBTjoL-23WRwYs3hlF0Bbat8ZfWhfK~~O1K4V8gGBiwFxd-wxXvbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                }
              />
            );
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
                <Image
                  className={styles.img}
                  src={
                    "https://s3-alpha-sig.figma.com/img/e593/6d73/ee48bfe27d076ee449a96583a4c4b6db?Expires=1620604800&Signature=DaLcR8vhUDsAdX2lswswziIVlLgtfq9WyhDUY4KDY2UX9kc5huIfCLUN4~dGoJ5~XyfX15ubLHRQqr~hAckzDVgtiuotFgYRvattfLjArb~pY-U0e6CwBvRvAUG0Hw7qE7q6uX9Hj7P0OXYCu1ikbut9hweTqXDbWS8WeN6tLLFJZhIEm2J2yx1yhU1mDnXVMpF8~gpcbnFVopv1OZWIVCnGiqmY8aE5hnstYBwzXmRKXHLkq7k5ksTsCaLA6yf~mwgLSX82s1dRNr2kYH6MESDthig~ilzEDo3tPZAnfKzs7sSMS6lO-xfviWwuSVTBgmg85xNi32B37oaS4wLytQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  }
                />
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
                  <Button>Стать партнером</Button>
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
