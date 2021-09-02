import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import { rootState } from "../../../types/types";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../../component/uiKit/customInput";
import { createNews, deleteNewsById } from "../../../store/action/newsAction";
import { FullScreenLoader } from "../../../component/uiKit/FullScreenLoader";

interface AdmMediaProps {}

const AdmMedia: React.FC<AdmMediaProps> = () => {
  const { isLoading } = useSelectorTyped((state: rootState) => state.news);
  const dispatch = useDispatchTyped();

  const { register, handleSubmit, errors, watch } = useForm();
  const { register: regDel, handleSubmit: handleDel } = useForm();
  const onSubmit = (data) => {
    dispatch(createNews(data));
  };
  const onSubmitDel = ({ news_id }) => {
    console.log(news_id);
    dispatch(deleteNewsById(news_id));
  };
  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <Container>
      <h2 className={"text-center py-3"}>Добавить новость</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className={"py-3"}>
          <Col>
            <CustomInput
              reff={register}
              type="text"
              placeholder={"Заголовок"}
              value={watch("title")}
              name={"title"}
            />
          </Col>
        </Row>
        <Row className={"py-3"}>
          <Col>
            <CustomInput
              reff={register}
              type="text"
              placeholder={"url картинки"}
              value={watch("img_url")}
              name={"img_url"}
            />
          </Col>
        </Row>
        <Row className={"pt-3"}>
          <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Текст новости</Form.Label>
              <Form.Control
                placeholder={"Текст"}
                as="textarea"
                rows={6}
                // @ts-ignore
                ref={register()}
                name={"content"}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type={"submit"}>Создать</Button>
      </Form>
      <h2 className={"text-center py-3"}>Удалить новость</h2>
      <Form onSubmit={handleSubmit(onSubmitDel)}>
        <Row className={"py-3"}>
          <Col>
            <CustomInput
              reff={register}
              type="text"
              placeholder={"Введите id новости"}
              value={watch("news_id")}
              name={"news_id"}
            />
          </Col>
        </Row>
        <Button type={"submit"}>Удалить</Button>
      </Form>
    </Container>
  );
};

AdmMedia.defaultProps = {};

export default AdmMedia;
