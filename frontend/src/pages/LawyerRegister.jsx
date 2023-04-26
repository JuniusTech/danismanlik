import React, { useState } from "react";

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
  const [password2, setPassword2] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      name,
      surName,
      email,
      password,
      barNo,
      phoneRegion,
      branch,
      password2,
      phone
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
              id="inputGroupSelect01"
              className="custom-select brans w-100"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option selected>Lütfen Branş Seçiniz:</option>
              <option value="1">İcra</option>
              <option value="2">Boşanma</option>
              <option value="3">AğırCeza</option>
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
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            <span>Üyelik Sözleşmesi'ni</span> okudum ve kabul ediyorum.
          </label>
        </div>
        <div class="input-group-text radio">
          <input
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            <span>Aydınlatma Metni'ni</span> okudum ve kabul ediyorum.
          </label>
        </div>
        <div class="input-group-text  radio">
          <input
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
