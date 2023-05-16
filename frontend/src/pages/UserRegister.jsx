import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../css/RegisterPages.css";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../getError";
import LoadingBox from "../components/LoadingBox";

const AvukatLoginPage = ({ show, setShowUserRegister, setShowUserLogin }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneRegion, setPhoneRegion] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const phone = `${phoneRegion} + ${phoneNo}`;
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  // const [infoText, setInfoText] = useState(false);
  // const [memberAg, setMemberAg] = useState(false);
  // const [perData, setPerData] = useState(false);

  const handleLogin = () => {
    setShowUserLogin(true);
    setShowUserRegister(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Şifre eşleşmiyor");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/users/signup`,
        {
          name,
          email,
          password,
          surname,
          phone,
        }
      );
      setLoading(false);
      toast.success("Emailinize doğrulama linki gönderildi.");
      setShowUserRegister(false);
    } catch (error) {
      toast.error(getError(error));
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShowUserRegister(false)}
      animation={false}
      centered
    >
      <div className="registerBaslık">
        <h1>Kayıt ol</h1>
      </div>
      <form className="UserRegisterFormDiv " onSubmit={submitHandler}>
        <div className="row" id="registerRowDiv">
          <div className="col">
            <label className="registerLabel" htmlFor="">
              Ad*
            </label>
            <input
              type="text"
              className="registerFormControl"
              value={name}
              placeholder="Ad*"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="registerLabel" htmlFor="">
              E-posta*
            </label>
            <input
              registerFormControl
              type="email"
              className="registerFormControl"
              placeholder="E-Posta*"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label className="registerLabel" htmlFor="">
              Şifre*
            </label>
            <input
              type="password"
              className="registerFormControl"
              placeholder="Şifre"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="col">
            <label className="registerLabel" htmlFor="">
              Soyad*
            </label>
            <input
              type="text"
              className="registerFormControl"
              value={surname}
              placeholder="Soyad"
              onChange={(e) => setSurname(e.target.value)}
            />
            <label className="registerLabel" htmlFor="">
              Tel*
            </label>
            <div className="telDiv d-flex ">
              <select
                className="registerSelectuser  "
                id="inputGroupSelect01"
                value={phoneRegion}
                onChange={(e) => setPhoneRegion(e.target.value)}
              >
                <option selected>+90</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </select>
              <input
                type="text"
                className="registerFormControl "
                value={phoneNo}
                placeholder=""
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <label className="registerLabel" htmlFor="">
              Şifre Tekrar*
            </label>
            <input
              type="password"
              className="registerFormControl"
              value={password2}
              placeholder="Şifre"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="registerCheckBtn">
          <div className="input-group-text radio">
            <input
              onClick={() => setMemberAg(!memberAg)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>Üyelik Sözleşmesi'ni</span> okudum ve kabul ediyorum.
            </label>
          </div>
          <div className="input-group-text  radio">
            <input
              onClick={() => setInfoText(!infoText)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>Aydınlatma Metni'ni</span> okudum ve kabul ediyorum.
            </label>
          </div>
          <div className="input-group-text  radio">
            <input
              onClick={() => setPerData(!perData)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>
                Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni <br />
              </span>{" "}
              okudum ve kabul ediyorum.
            </label>
          </div>
          <div className="input-group-text  radio">
            <input
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              AvukatımOl tarafından yukarıda belirttiğim iletişim bilgilerime{" "}
              <br />
              elektronik ticari ileti <br /> gönderilmesine izin veriyorum.{" "}
            </label>
          </div>
        </div> */}
        <div className="registerButtons mt-4 mb-3">
          <button
            className="registerbtn1"
            onClick={() => setShowUserRegister(false)}
          >
            İptal Et
          </button>
          <button
            style={{
              BackgroundColor: "#a97900",
              color: "#f5f5f5",
              fontWeight: "normal",
              fontSize: "normal",
            }}
            className="registerbtn2"
            type="submit"
          >
            {loading ? (
              <>
                <LoadingBox />
              </>
            ) : (
              "Kayıt ol"
            )}
          </button>
        </div>
        <p>
          Zaten üye misin? Hemen{" "}
          <span style={{ color: "#a97900" }} onClick={() => handleLogin()}>
            giriş yap!
          </span>{" "}
        </p>
        <p>Doldurulması zorunlu alanlar *</p>
      </form>
    </Modal>
  );
};

export default AvukatLoginPage;
