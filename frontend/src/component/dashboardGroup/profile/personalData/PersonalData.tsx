import React from "react";
import styles from "./personalData.module.scss";
import { Col, Row, Form, Button, Image } from "react-bootstrap";
import { CustomInput } from "../../../uiKit/customInput";
import { DashboardTitleBlock } from "../../../../layouts/dashboardTitleBlock";
import userIcon from "../../../../assets/svg/icon/userIcon.jpg";
import { useForm } from "react-hook-form";
import { useDispatchTyped } from "../../../../hooks/useTypedRedux";
import { setProfile } from "../../../../store/action/dashboardAction";

interface PersonalDataProps {
  profile: any;
}
const PersonalData: React.FC<PersonalDataProps> = ({ profile }) => {
  const {
    name,
    middle_name,
    surname,
    city,
    phone_number,
    telegram,
    whatsApp,
    avatarImg,
  } = profile;
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      name,
      middle_name,
      surname,
      city,
      phone_number,
      telegram,
      whatsApp,
    },
  });
  const dispatch = useDispatchTyped();
  const [deleteAvatar, setDeleteAvatar] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState("");
  const [preview, setPreview] = React.useState(
    avatarImg ? avatarImg : userIcon
  );

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("middle_name", data.middle_name);
    formData.append("surname", data.surname);
    formData.append("city", data.city);
    formData.append("phone_number", data.phone_number);
    formData.append("telegram", data.telegram);
    formData.append("whatsApp", data.whatsApp);
    if (data.file.length && !deleteAvatar) {
      const [file] = data.file;
      formData.append("image", file);
    }
    if (deleteAvatar) {
      formData.append("delete_img", "1");
    }
    dispatch(setProfile(formData));
  };
  const onSelectFile = (e) => {
    setDeleteAvatar(false);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  React.useEffect(() => {
    if (deleteAvatar) {
      setPreview(userIcon);
      return;
    }
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, deleteAvatar]);
  return (
    <div className={styles.PersonalData}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={3} className={styles.img_block}>
            <Image
              src={preview ? preview : avatarImg ? avatarImg : userIcon}
              className={styles.img}
            />
            <Row>
              <Col className={styles.control_buttons}>
                <label className={styles.file_button}>
                  <span>Загрузить</span>
                  <CustomInput
                    type="file"
                    value={watch("file")}
                    placeholder={""}
                    name={"file"}
                    reff={register()}
                    className={styles.input}
                    accept={".png, .jpg, .jpeg"}
                    onChange={onSelectFile}
                  />
                </label>
                <a
                  className={styles.red}
                  onClick={() => {
                    setDeleteAvatar(true);
                  }}
                >
                  Удалить
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Form.Group controlId="formName">
              <CustomInput
                type="text"
                placeholder="Ваше имя"
                value={watch("name")}
                name={"name"}
                reff={register()}
              />
            </Form.Group>
            <Form.Group controlId="formSubName">
              <CustomInput
                type="text"
                placeholder="Ваше отчество (если оно есть)"
                value={watch("surname")}
                name={"surname"}
                reff={register()}
              />
            </Form.Group>
            <Form.Group controlId="formSecondName">
              <CustomInput
                type="text"
                placeholder="Ваша фамилия"
                value={watch("middle_name")}
                name={"middle_name"}
                reff={register()}
              />
            </Form.Group>
            <Form.Group controlId="formRegion">
              <CustomInput
                type="text"
                placeholder="Ваша страна"
                value={watch("city")}
                name={"city"}
                reff={register()}
              />
            </Form.Group>
            <DashboardTitleBlock
              title={"Контактные данные"}
              withOutBottomLine
            />
            <Form.Group controlId="formPhoneNumber">
              <CustomInput
                type="text"
                placeholder="Ваш телефон"
                value={watch("phone_number")}
                name={"phone_number"}
                reff={register()}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <CustomInput
                type="text"
                placeholder="WhatsApp"
                value={watch("whatsApp")}
                name={"whatsApp"}
                reff={register()}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <CustomInput
                type="text"
                placeholder="Telegram"
                value={watch("telegram")}
                name={"telegram"}
                reff={register()}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

PersonalData.defaultProps = {};

export default PersonalData;
