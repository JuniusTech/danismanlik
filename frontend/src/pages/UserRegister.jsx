import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../css/LawyerRegister.css";

const AvukatLoginPage = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      show={show}
      className=" xxx"
      onHide={handleClose}
      animation={false}
      centered
    >
      <form className="formDiv">
        <div class="row">
          <div class="col">
            <label htmlFor="">Ad*</label>
            <input type="text" class="form-control" placeholder="Ad*" />
            <label htmlFor="">E-posta*</label>
            <input type="email" class="form-control" placeholder="E-Posta*" />

            <label htmlFor="">Şifre*</label>
            <input type="password" class="form-control" placeholder="Şifre" />
          </div>
          <div class="col">
            <label htmlFor="">Soyad*</label>
            <input type="text" class="form-control" placeholder="Soyad" />
            <label htmlFor="">Tel*</label>
            <div className="telDiv d-flex ">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>+90</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </select>
              <input type="text" class="form-control" placeholder="" />
            </div>

            <label htmlFor="">Şifre Tekrar*</label>
            <input type="password" class="form-control" placeholder="Şifre" />
          </div>
        </div>
        {/* //! gap verilecek ---------------------------------------------------------*/}
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
              Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni{" "}
            </span>{" "}
            okudum ve kabul ediyorum.
          </label>
        </div>
        <div class="input-group-text  radio">
          <input
            type="radio"
            aria-label="Radio button for following text input"
          />
          <label htmlFor="">
            AvukatımOl tarafından yukarıda belirttiğim iletişim bilgilerime
            elektronik ticari ileti <br /> gönderilmesine izin veriyorum.{" "}
          </label>
        </div>
        <div className="loginPageButtons">
          <button className="loginPagebtn1">İptal Et</button>
          <button className="loginPagebtn2">Kayıt Ol</button>
        </div>
        <p>
          Zaten üye misin? Hemen <span>giriş yap!</span>{" "}
        </p>
        <p>Doldurulması zorunlu alanlar *</p>
      </form>
    </Modal>
  );
};

export default AvukatLoginPage;
