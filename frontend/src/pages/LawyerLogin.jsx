import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../css/LoginPages.css";
import axios from "axios";

const AvukatSignPage = ({
  show,
  setShowLawyerLogin,
  setShowLawyerRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    setShowLawyerRegister(true);
    setShowLawyerLogin(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://danis.onrender.com/api/lawyers/signin",
        {
          email,
          password,
        }
      );
      console.log(data, "gönderme başarılı");
    } catch (error) {}
    console.log(email, password);
  };

  return (
    <Modal
      show={show}
      onHide={() => setShowLawyerLogin(false)}
      className="px-5  m-auto p-5"
      animation={false}
      centered
    >
      <Form className="signInForm" onSubmit={submitHandler}>
        <h1>Giriş </h1>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-Posta*</Form.Label>
          <Form.Control
            className="fs-4"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Şifre*</Form.Label>
          <Form.Control
            className="fs-4"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
          />
        </Form.Group>
        <div className="signInPage">
          <Form.Check
            className="SignInPageCheck"
            type="switch"
            id="custom-switch"
            label="Beni hatırla"
          />

          <span>Şifremi unuttum</span>
        </div>

        <div className="my-5 d-flex flex-column gap-2 justify-content-center">
          <Button
            type="submit"
            size="lg"
            className="w-75  m-auto mb-4  bg border-0"
          >
            Giriş yap
          </Button>
          <p>
            Hesabın yok mu? Hemen{" "}
            <span onClick={() => handleRegister()}>kayıt ol</span>
            <p>Doldurulması zorunlu alanlar*</p>
          </p>
        </div>
      </Form>
    </Modal>
  );
};
export default AvukatSignPage;
