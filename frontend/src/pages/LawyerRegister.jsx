import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import "../css/RegisterPages.css";

const AvukatLoginPage = ({
  show,
  setShowLawyerLogin,
  setShowLawyerRegister,
}) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [barNo, setBarNo] = useState("");
  const [phoneRegion, setPhoneRegion] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const phone = `${phoneRegion} + ${phoneNo}`;
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [password2, setPassword2] = useState("");
  const [infoText, setInfoText] = useState(false);
  const [memberAg, setMemberAg] = useState(false);
  const [perData, setPerData] = useState(false);

  const handleLogin = () => {
    setShowLawyerLogin(true);
    setShowLawyerRegister(false);
  };

  useEffect(() => {
    axios
      .get("https://danis.onrender.com/api/branchs")
      .then((response) => {
        setBranches(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://danis.onrender.com/api/lawyers/signup",
        {
          name,
          surName,
          email,
          password,
          barNo,
          branch,
          phone,
          infoText,
          memberAg,
          perData,
        }
      );
      console.log(data, "gönderme başarılı");
    } catch (error) {}

    // fetch("https://danis.onrender.com/api/users/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // }).then(console.log("işlem başarılı"));

    console.log(
      name,
      surName,
      email,
      password,
      barNo,
      phoneRegion,
      branch,
      password2,
      phone,
      infoText,
      perData,
      memberAg
    );
  };

  return (
    <Modal
      show={show}
      onHide={() => setShowLawyerRegister(false)}
      animation={false}
      centered
    >
      <div className="registerBaslık">
        <h1>Kayıt ol</h1>
      </div>
      <form className="lawyerRegisterFormDiv" onSubmit={submitHandler}>
        <div class="row" id="registerRowDiv">
          <div class="col">
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
              className="registerFormControl"
              type="email"
              value={email}
              placeholder="E-Posta*"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="registerLabel" htmlFor="">
              Baro Sicil Numarası*
            </label>
            <input
              className="registerFormControl"
              type="text"
              placeholder="Baro Sicil Numarası"
              value={barNo}
              onChange={(e) => setBarNo(e.target.value)}
            />
            <label className="registerLabel" htmlFor="">
              Şifre*
            </label>
            <input
              className="registerFormControl"
              type="password"
              value={password}
              placeholder="Şifre"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="col">
            <label className="registerLabel" htmlFor="">
              Soyad*
            </label>
            <input
              className="registerFormControl"
              type="text"
              value={surName}
              placeholder="Soyad"
              onChange={(e) => setSurName(e.target.value)}
            />
            <label className="registerLabel" htmlFor="">
              Tel*
            </label>
            <div className="registerTelDiv d-flex ">
              <select
                className="registerSelect"
                value={phoneRegion}
                id="inputGroupSelect02"
                onChange={(e) => setPhoneRegion(e.target.value)}
              >
                <option selected>+90</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </select>
              <input
                className="registerFormControl"
                type="text"
                value={phoneNo}
                placeholder=""
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <label className="registerLabel" htmlFor="">
              Branş*
            </label>

            <select
              className="registerBranchSelect"
              value={branch}
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
              title="Branş Seç"
              id="navbarScrollingDropdown"
            >
              <option defaultValue="all">Branş Seç</option>
              {branches
                ?.sort((a, b) => a.title.localeCompare(b.title))
                .map((item) => (
                  <option key={item._id} value={item.title}>
                    {item.title}
                  </option>
                ))}
            </select>

            <label className="registerLabel" htmlFor="">
              Şifre Tekrar*
            </label>
            <input
              className="registerFormControl"
              id="password2"
              type="password"
              value={password2}
              placeholder="Şifre"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        <div className="registerCheckBtn">
          <div>
            <input
              onClick={() => setMemberAg(!memberAg)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>Üyelik Sözleşmesi'ni</span> okudum ve kabul ediyorum.
            </label>
          </div>
          <div>
            <input
              onClick={() => setInfoText(!infoText)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>Aydınlatma Metni'ni</span> okudum ve kabul ediyorum.
            </label>
          </div>
          <div>
            <input
              onClick={() => setPerData(!perData)}
              type="radio"
              aria-label="Radio button for following text input"
            />
            <label htmlFor="">
              <span>
                Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni
              </span>
              okudum ve kabul ediyorum.
            </label>
          </div>
        </div>
        <div className="registerButtons">
          <button
            className="registerbtn1"
            onClick={() => setShowLawyerRegister()}
          >
            İptal Et
          </button>
          <button className="registerbtn2" type="submit">
            Kayıt Ol
          </button>
        </div>
        <p>
          Zaten üye misin? Hemen{" "}
          <span style={{ color: "orange" }} onClick={() => handleLogin()}>
            {" "}
            giriş yap!
          </span>
        </p>
        <p>Doldurulması zorunlu alanlar *</p>
      </form>
    </Modal>
  );
};

export default AvukatLoginPage;
