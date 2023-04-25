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
    <Modal show={show} onHide={handleClose} animation={false} centered>
      {/* //! React Bootstrap Form component olarak responsivliği hatalı --------*/}
      {/* <Form>
        <Row>
          <Col>
            <Form.Label>Ad*</Form.Label>
            <Form.Control placeholder="Ad" className="input" />
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="input"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Baro Sicil Numarası*</Form.Label>
              <Form.Control
                className="input"
                placeholder="Baro Sicil Numarası"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Şifre*</Form.Label>
              <Form.Control
                type="password"
                className="input"
                placeholder="Şifre"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Soyad*</Form.Label>
              <Form.Control className="input" placeholder="Soyad" />
            </Form.Group>
            <Form.Label>Tel*</Form.Label>
            <Form.Group className="input d-flex" controlId="formBasicEmail">
              <Form.Select
                aria-label="Default select example"
                className="selectNumber"
              >
                <option placeholder="+90">+90</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">İcra</option>
                <option value="5">Boşanma</option>
                <option value="6">AğırCeza</option>
                <option value="7">İcra</option>
                <option value="8">Boşanma</option>
                <option
                  value="
                9"
                >
                  AğırCeza
                </option>
              </Form.Select>
              <Form.Control className="input" type="text" placeholder="Tel" />
            </Form.Group>
            <Form.Group className="input ">
              <Form.Label>Branş*</Form.Label>
              <Form.Select aria-label="Default select example" className="">
                <option>Branş Seçiniz</option>
                <option value="1">İcra</option>
                <option value="2">Boşanma</option>
                <option value="3">AğırCeza</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Şifre Tekar*</Form.Label>
              <Form.Control
                type="password"
                className="input3"
                placeholder="Şifre"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form> */}
      <form className="formDiv">
        <div class="row">
          <div class="col">
            <label htmlFor="">Ad*</label>
            <input type="text" class="form-control" placeholder="Ad*" />
            <label htmlFor="">E-posta*</label>
            <input type="email" class="form-control" placeholder="E-Posta*" />
            <label htmlFor="">Baro Sicil Numarası*</label>
            <input
              type="text"
              class="form-control"
              placeholder="Baro Sicil Numarası"
            />
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

            {/* //! With 100% olmuyor ---------------------------------------------------------*/}
            <select
              class="custom-select branş"
              id="inputGroupSelect01"
              className="custom-select branş"
            >
              <option selected>lütfen Branş Seçiniz:</option>
              <option value="1">İcra</option>
              <option value="2">Boşanma</option>
              <option value="3">AğırCeza</option>
            </select>
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
              Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni'ni
            </span>
            okudum <br /> ve kabul ediyorum.
          </label>
        </div>
        <div className="loginPageButtons">
          <button className="loginPagebtn1">İptal Et</button>
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
