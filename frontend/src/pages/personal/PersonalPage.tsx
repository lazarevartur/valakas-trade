import React from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../config";
import { RoutePath } from "../../routes/routesConfig";

const PersonalPage = () => {
  return (
    <Container>
      <h1 className={"text-center mt-5"}>
        Приветствуем вас в личном кабинете {config.siteName}.
      </h1>
      <h2 className={"text-center mb-5"}>Выберите программу:</h2>

      <CardDeck>
        <Card>
          <h3 className={"text-center mb-3 mt-3"}>
            <Link to={`${RoutePath.dashboard}`}>Binar profit team</Link>
          </h3>
          <Card.Img
            variant="top"
            src="https://antares1.trade/core/templates/public/img/header_binar.png"
          />
          <Card.Body className={"text-center"}>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
            <Link to={`${RoutePath.dashboard}`}>
              <Button>Подробнее</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <h3 className={"text-center mb-3 mt-3"}>
            <Link to={`${RoutePath.profile}`}>Binar profit team</Link>
          </h3>
          <Card.Img
            variant="top"
            src="https://antares1.trade/core/templates/public/img/header_binar.png"
          />
          <Card.Body className={"text-center"}>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
            <Link to={"#"}>
              <Button>Подробнее</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <h3 className={"text-center mb-3 mt-3"}>
            <Link to={"#"}>Binar profit team</Link>
          </h3>
          <Card.Img
            variant="top"
            src="https://antares1.trade/core/templates/public/img/header_binar.png"
          />
          <Card.Body className={"text-center"}>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
            <Link to={"#"}>
              <Button>Подробнее</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

PersonalPage.defaultProps = {};

export default PersonalPage;
