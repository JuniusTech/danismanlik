import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../css/LoginPages.css";
import axios from "axios";
// import { removeCookie, setCookie } from "../cookies";
import { Store } from "../Store";
import { toast } from "react-toastify";
import LoadingBox from "../components/LoadingBox";
import { getError } from "../getError";
import { useNavigate } from "react-router-dom";

const UserLogin = ({ show, setShowUserRegister, setShowUserLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();
  const handleRegister = () => {
    setShowUserRegister(true);
    setShowUserLogin(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/users/signin`,
        {
          email,
          password,
        }
      );
      setLoading(false);
      toast.success("Hoşgeldiniz");
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setShowUserLogin(false);
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };

  return (
    <Modal
      className="px-5 w-50 m-auto"
      id="userLoginModal"
      show={show}
      onHide={() => setShowUserLogin(false)}
      animation={false}
      centered
    >
      <Form className="signInForm " onSubmit={submitHandler}>
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
            required
            value={password}
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

          <span onClick={() => navigate("/forget-password")}>
            Şifremi unuttum
          </span>
        </div>

        <div className="my-5 d-flex flex-column gap-2 justify-content-center">
          <Button
            type="submit"
            size="lg"
            className="w-75 text-justify  m-auto mb-4 bg border-0"
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
export default UserLogin;
