import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="userDashboard">
      <div className="userDashboardLeft">
        <center className="userDashboardLeftImg">
          <img src="" alt="" />
          <p className="userDashboardp1">name surname</p>
        </center>
        <p className="userDashboardp2"> Hesabım</p>
        <p className="userDashboardp3"> Randevularım</p>
        <p className="userDashboardp3"> Favori Avukatlarım</p>
        <p className="userDashboardp3"> Kişisel Bilgiler</p>
      </div>
      <div className="userDashboardRight" style={{ display: "none" }}>
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
            <Form.Label>Ad*</Form.Label>
            <Form.Control placeholder="Ad" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Soyad*</Form.Label>
            <Form.Control placeholder="Soyad" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              E-Posta* <span>(E-Posta Değiştir)</span>
            </Form.Label>
            <Form.Control placeholder="E-Posta" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Şifre* <span>(Şifre Değiştir)</span>
            </Form.Label>
            <Form.Control placeholder="Şifre" type="password" />
          </Form.Group>
          <Form.Label>
            Tel. Numarası* <span>(Tel. Numarası Değiştir)</span>
          </Form.Label>
          <Form.Group style={{ display: "flex" }}>
            <Form.Control
              style={{ width: "15%", marginRight: "2%" }}
              placeholder="+90"
            />

            <Form.Control placeholder="555 444 33 22" />
          </Form.Group>
          <div className="userdashboardButtons">
            <Button
              style={{
                border: "1px solid #00242E",
                background: "white",
                color: "#00242E",
              }}
            >
              Vazgeç
            </Button>
            <Button
              style={{
                marginLeft: "6%",
                border: "none",
                background: "#A97900 0% 0% no-repeat padding-box",
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
            marginTop: "10%",
          }}
        >
          Kullanıcı Hesabımı Sil
        </p>
      </div>
      <div className="userDashboardRight2">
        <p
          style={{
            fontStyle: "normal",
            fontWeight: " bold",
            fontSize: "20px",
            lineHeight: "24px",
            fontFamily: "SF Pro Text",
          }}
        >
          Favori Avukatlarım
        </p>
        <div className="userDashboardRight2Div" style={{ display: "flex" }}>
          <img
            src=""
            alt=""
            width={"70px"}
            height={"150px"}
            style={{ marginRight: "5%" }}
          />
          <div>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: " normal",
                fontSize: "20px",
                lineHeight: "24px",
                fontFamily: "SF Pro Text",
              }}
            >
              name surname
            </p>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: " normal",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "SF Pro Text",
                  color: "#06A900",
                }}
              >
                online görüşmeye uygun
              </p>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: " normal",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontFamily: "SF Pro Text",
                  color: "#06A900",
                }}
              >
                büroda görüşmeye uygun
              </p>
            </div>
            <p>İcra Avukatı , istanbul </p>
            <p>15 Yıllık Deneyim</p>
            <p>****** 12 yorum</p>
          </div>
        </div>
        <p>
          Adres: Hasanpaşa Mah, Altunel İş Merkezi, Kurbağalıdere Cd. D:51/17,
          34730 Kadıköy/İstanbul, Türkiye
        </p>
        <div style={{ display: "flex", gap: "6%", color: "#A97900" }}>
          <p>545 545 54 54</p>
          <p
            style={{
              borderLeft: "1px solid #A97900",
              borderRight: "1px solid #A97900",
              padding: "0 5%",
            }}
          >
            Mesaj Gönder
          </p>
          <p>Websitesine Git</p>
        </div>
        <hr style={{ color: "#A97900" }} />
      </div>
    </div>
  );
};

export default UserDashboard;
