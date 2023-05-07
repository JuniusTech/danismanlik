import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../css/LoginPages.css";
import axios from "axios";
import { Store } from "../Store";
import { removeCookie, setCookie } from "../cookies";
import { toast } from "react-toastify";
import LoadingBox from "../components/LoadingBox";
import { useNavigate } from "react-router-dom";

const AvukatSignPage = ({
  show,
  setShowLawyerLogin,
  setShowLawyerRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();
  const handleRegister = () => {
    setShowLawyerRegister(true);
    setShowLawyerLogin(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/signin`,
        {
          email,
          password,
        }
      );
      setLoading(false);
      removeCookie("jwt");
      setCookie("jwt", data.token);
      toast.success("Hoşgeldiniz");
      dispatch({ type: "LAWYER_SIGNIN", payload: data });
      localStorage.setItem("lawyerInfo", JSON.stringify(data));
      setShowLawyerLogin(false);
      navigate("/lawyer");
    } catch (error) {}
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
            {loading ? (
              <>
                <LoadingBox />
              </>
            ) : (
              "Giriş yap"
            )}
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
