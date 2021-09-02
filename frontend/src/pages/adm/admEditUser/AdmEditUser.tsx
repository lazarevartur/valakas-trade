import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../../component/uiKit/customInput";
import {
  useDispatchTyped,
  useSelectorTyped,
} from "../../../hooks/useTypedRedux";
import {
  getAvangardById,
  getUserByEmail,
  saveUserByEmail,
} from "../../../store/action/usersAction";
import { rootState } from "../../../types/types";
import _ from "lodash";
import { ruAvangardKey } from "../../../const/normalName";
import { createNews } from "../../../store/action/newsAction";

interface AdmEditUserProps {}

const AdmEditUser: React.FC<AdmEditUserProps> = () => {
  const { isLoading, user, avangard } = useSelectorTyped(
    (state: rootState) => state.users
  );
  const dispatch = useDispatchTyped();
  const { register, handleSubmit, errors, watch, reset, control } = useForm();
  console.log(control);
  React.useEffect(() => {
    if (user.email) {
      reset(user);
    }
  }, [user]);

  const onSubmitSearch = (data) => {
    dispatch(getUserByEmail(data.emailSearch));
  };
  const onSubmitSearchAvangard = ({ avangardId }) => {
    dispatch(getAvangardById(avangardId));
  };
  const onSubmitSave = (data) => {
    dispatch(saveUserByEmail(data));
  };
  const userData = !_.isEmpty(user) ? Object.entries(user) : [];
  const avangardData = !_.isEmpty(avangard) ? Object.entries(avangard) : [];
  console.log(watch("avangardId"));

  return (
    <Container className={"pt-5"}>
      <h3 className={"mb-3 text-center"}>Редактирование пользователя</h3>
      <Form onSubmit={handleSubmit(onSubmitSearch)}>
        <CustomInput
          reff={register()}
          type="email"
          placeholder={"Введите email"}
          value={watch("emailSearch")}
          name={"emailSearch"}
        />
        <Button variant="primary" type="submit" className={"mt-3"}>
          Поиск
        </Button>
      </Form>
      {!_.isEmpty(user) && (
        <Form className={"pt-5"} onSubmit={handleSubmit(onSubmitSave)}>
          <h3 className={"pb-5"}>Пользователь: {user.email}</h3>
          {userData.map(([key, value]) => {
            switch (key) {
              case "email":
                return (
                  <CustomInput
                    reff={register()}
                    type={key}
                    placeholder={key}
                    value={`${watch(key)}`}
                    name={key}
                    className={"mb-5"}
                    // @ts-ignore
                    readOnly={value.length}
                  />
                );
              case "avangard":
                return (
                  <CustomInput
                    reff={register()}
                    type="text"
                    placeholder={key}
                    value={`${watch(key)}`}
                    name={key}
                    className={"mb-5"}
                    // @ts-ignore
                    readOnly={value.length}
                  />
                );
              default:
                return (
                  <CustomInput
                    reff={register()}
                    type="text"
                    placeholder={key}
                    value={`${watch(key)}`}
                    name={key}
                    className={"mb-5"}
                  />
                );
            }
          })}

          <Button variant="primary" type="submit">
            Сохранить
          </Button>
        </Form>
      )}
      <div className={"py-5"}>
        <h3>Поиск авангард</h3>
        <Form
          onSubmit={handleSubmit(onSubmitSearchAvangard)}
          className={"py-5"}
        >
          <CustomInput
            reff={register()}
            type="text"
            placeholder={"Введите AvangardId"}
            value={watch("avangardId")}
            name={"avangardId"}
          />
          <Button variant="primary" type="submit" className={"mt-3"}>
            Поиск
          </Button>
        </Form>

        <div className={"py-2"}>
          {avangardData.map(([key, value]) => {
            return (
              <Row key={key}>
                <Col>{ruAvangardKey[key]}</Col>
                <Col>{value}</Col>
              </Row>
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(
            createNews({
              content:
                "Теоретически начать можно с любой суммы, даже с 1000 рублей. Но такой объем не компенсирует ни комиссию посредника, ни время, потраченное на торги. Стоит начинать инвестировать, если вы готовы рискнуть несколькими десятками тысяч рублей. Лучше заранее представить ситуацию, в которой вы потеряете ваши деньги. Если вы понимаете, что для вашего бюджета это не катастрофа, можно попробовать.\n" +
                "\n",
              title: "Оцените, какую сумму вы готовы вложить",
              img_url:
                "https://fincult.info/upload/als-property-editorblock/0e6/0e673ba135a5457d15ff0797656c714f.jpg",
            })
          );
        }}
      >
        ТЕСЕ
      </Button>
    </Container>
  );
};

AdmEditUser.defaultProps = {};

export default AdmEditUser;
