import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from "../../Store";

const UserKişiselBilgiler = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div
      className="userDashboardRight"
      style={{ position: "relative", margin: "20px", width: "650px" }}
    >
      <p
        style={{
          font: "normal normal bold 20px/24px SF Pro Text",
          marginBottom: "5%",
        }}
      >
        Kişisel Bilgiler
      </p>
      <Form>
        <Form.Group>
          <Form.Label>Ad</Form.Label>
          <Form.Control placeholder="Ad" value={userInfo.name} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Soyad</Form.Label>
          <Form.Control placeholder="Soyad" value={userInfo.surname} />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Eposta
            <span style={{ color: "#A97900" }}>(E-Posta Değiştir)</span>
          </Form.Label>
          <Form.Control
            placeholder="E-Posta"
            value={userInfo.email}
            type="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Şifre* <span style={{ color: "#A97900" }}>(Şifre Değiştir)</span>
          </Form.Label>
          <Form.Control placeholder="Şifre" type="password" />
        </Form.Group>
        <Form.Label>
          Telefon
          <span style={{ color: "#A97900" }}>(Tel. Numarası Değiştir)</span>
        </Form.Label>
        <Form.Group style={{ display: "flex" }}>
          <Form.Control
            style={{ width: "15%", marginRight: "2%" }}
            placeholder="+90"
          />

          <Form.Control value={userInfo.phone} placeholder="555 444 33 22" />
        </Form.Group>
        <div
          className="userdashboardButtons"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              border: "1px solid #00242E",
              background: "white",
              color: "#00242E",
              width: "80px",
              height: "35px",
              borderRadius: "8px",
            }}
          >
            Vazgeç
          </Button>
          <Button
            style={{
              marginLeft: "6%",
              border: "none",
              background: "#A97900 0% 0% no-repeat padding-box",
              width: "80px",
              height: "35px",
              borderRadius: "8px",
            }}
          >
            Kaydet
          </Button>
        </div>
      </Form>
      <p
        style={{
          font: "normal normal medium 19px/23px SF Pro Text",
          textAlign: "center",
          color: "#A97900",
          position: "absolute",
          bottom: "-55%",
          left: "40%",
          opacity: "0.5",
        }}
      >
        Kullanıcı Hesabımı Sil
      </p>
    </div>
  );
};

export default UserKişiselBilgiler;
