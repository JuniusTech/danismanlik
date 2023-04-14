import React, { useState } from "react";
import "../css/AvukatLoginPage.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // input kontrol etmek için kullanılıyor
import icon from "../assets/Icon metro-cross.svg";
// import usePasswordToggle from "../components/usePasswordToggle";
import { library } from "@fortawesome/fontawesome-svg-core";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, FormGroup, FormLabel } from "react-bootstrap";

library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash);

// const initialValues = {
//   email: "",
//   password: "",
// };

// const validationSchema = Yup.object({
//   email: Yup.string().email("Geçersiz Email Adresi!").required("Gerekli!"),
//   password: Yup.string().required("Gerekli!"),
// });

// function LoginForm() {
//   const [PasswordInputType, ToggleIcon] = usePasswordToggle();
// }

export const AvukatLoginPage = () => {
  // const [isOpen, setisOpen] = useState(true);

  // const handleClick = () => {
  //   setisOpen(false);
  // };

  return (
    // <Formik initialValues={initialValues} validationSchema={validationSchema}>
    <Form className="avukatLoginPage">
      <Row className="avukatLoginPageRow">
        <Col>
          <FormLabel className="labelText">Ad*</FormLabel>
          <Form.Control name="ad" placeholder="Ad" />
          <FormLabel>E-Posta*</FormLabel>
          <Form.Control type="email" name="email" placeholder="E-Posta" />

          <FormLabel>Şifre*</FormLabel>
          <Form.Control type="password" name="password" placeholder="Şifre" />
          <FormLabel>Şifre Tekrar*</FormLabel>
          <Form.Control placeholder="Şifre Tekrar" />
        </Col>
        <Col>
          <FormLabel>SoyAd*</FormLabel>
          <Form.Control name="soyad" placeholder="Soyadı" />
          <FormLabel>Tel Numarası*</FormLabel>
          <Form.Control type="tel" placeholder="Tel Numarası" />
          <FormLabel>Baro Sicil Numarası*</FormLabel>
          <Form.Control placeholder="Baro Sicil Numarasaı" />
          <Form.Select
            className="formSelect"
            aria-label="Default select example"
          >
            <option>Branş*</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <div className="formCheckBox">
        <Form.Check type="checkbox" />
        <FormLabel>
          <span className="formCheckBoxSpan">Üyelik Sözleşmesi'ni</span>okudum
          ve kabul ediyorum.{" "}
        </FormLabel>
      </div>
      <div className="formCheckBox">
        <Form.Check type="checkbox" />
        <FormLabel>
          <span className="formCheckBoxSpan">Aydınlatma Metni'ni</span>okudum ve
          kabul ediyorum.{" "}
        </FormLabel>
      </div>
      <div className="formCheckBox">
        <Form.Check type="checkbox" />
        <FormLabel>
          <span className="formCheckBoxSpan">
            Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni
          </span>
          okudum ve kabul ediyorum.{" "}
        </FormLabel>
      </div>
      <div className="formButtons">
        <button>İptal Et</button>
        <button>Kayıt Ol</button>
      </div>
      <p>
        Zaten üye misin? Hemen <span>giriş yap!</span>
      </p>
      <p>* Doldurulması zorunlu alanlar</p>
    </Form>
    // </Formik>
  );
};
