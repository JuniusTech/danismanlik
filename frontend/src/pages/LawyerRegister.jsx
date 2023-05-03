import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import "../css/RegisterPages.css";

const AvukatLoginPage = ({ show, handleClose }) => {
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
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <form className="formDiv" onSubmit={submitHandler}>
        <div class="row">
          <div class="col">
            <label htmlFor="">Ad*</label>
            <input
              type="text"
              class="form-control"
              value={name}
              placeholder="Ad*"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">E-posta*</label>
            <input
              type="email"
              value={email}
              class="form-control"
              placeholder="E-Posta*"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Baro Sicil Numarası*</label>
            <input
              type="text"
              class="form-control"
              placeholder="Baro Sicil Numarası"
              value={barNo}
              onChange={(e) => setBarNo(e.target.value)}
            />
            <label htmlFor="">Şifre*</label>
            <input
              type="password"
              class="form-control"
              value={password}
              placeholder="Şifre"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="col">
            <label htmlFor="">Soyad*</label>
            <input
              type="text"
              class="form-control"
              value={surName}
              placeholder="Soyad"
              onChange={(e) => setSurName(e.target.value)}
            />
            <label htmlFor="">Tel*</label>
            <div className="telDiv d-flex ">
              <select
                value={phoneRegion}
                class="custom-select"
                id="inputGroupSelect02"
                onChange={(e) => setPhoneRegion(e.target.value)}
              >
                <option selected>+90</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </select>
              <input
                type="text"
                class="form-control"
                value={phoneNo}
                placeholder=""
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <select
              className="custom-select brans w-100"
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

            <label htmlFor="">Şifre Tekrar*</label>
            <input
              id="password2"
              type="password"
              class="form-control"
              value={password2}
              placeholder="Şifre"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>

        <div class="input-group-text radio">
          <input
            onClick={() => setMemberAg(!memberAg)}
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            <span>Üyelik Sözleşmesi'ni</span> okudum ve kabul ediyorum.
          </label>
        </div>
        <div class="input-group-text radio">
          <input
            onClick={() => setInfoText(!infoText)}
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            <span>Aydınlatma Metni'ni</span> okudum ve kabul ediyorum.
          </label>
        </div>
        <div class="input-group-text  radio">
          <input
            onClick={() => setPerData(!perData)}
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            <span>
              Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni
            </span>
            okudum <br /> ve kabul ediyorum.
          </label>
        </div>
        <div className="loginPageButtons">
          <button className="loginPagebtn1" type="submit">
            İptal Et
          </button>
          <button className="loginPagebtn2">Kayıt Ol</button>
        </div>
        <p>
          Zaten üye misin? Hemen <span>giriş yap!</span>
        </p>
        <p>Doldurulması zorunlu alanlar *</p>
      </form>
    </Modal>
  );
};

export default AvukatLoginPage;
