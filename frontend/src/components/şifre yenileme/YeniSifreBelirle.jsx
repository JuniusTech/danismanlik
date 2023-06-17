import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SifreGüncellendi from "./SifreGüncellendi";
import { useNavigate } from "react-router-dom";

const SifreSıfırlama = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick2 = () => {
    navigate("/");
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <>
      {isButtonClicked ? (
        <SifreGüncellendi />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            fontFamily: "SF Pro Text",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "0px",
            color: "#00242E",
            textAlign: "center",
            background: "linear-gradient(to bottom right, #F4F7F9, #E8EBED)",
          }}
        >
          <Container
            style={{
              width: "400px",
              height: "450px",
              boxShadow: "0px 0px 8px #00000029",
              borderRadius: "15px",
              background: "white",
            }}
          >
            <p
              style={{
                fontWeight: "900",
                marginTop: "50px",
                fontSize: "16px",
                fontFamily: "SF Pro Tex",
              }}
            >
              Lütfen yeni şifrenizi belirleyin
            </p>
            <p
              style={{
                marginTop: "38px",
                fontSize: "14px",
                fontWeight: "normal",
                textAlign: "left",
                marginLeft: "90px",
              }}
            >
              Yeni şifre
            </p>
            <input
              type="text"
              placeholder="Yeni şifre"
              style={{
                width: "208px",
                height: "36px",
                marginTop: "-5px",
                border: "1px solid #7F9196",
                borderRadius: "4px",
                paddingLeft: "8px",
              }}
            />
            <hr
              style={{
                marginTop: "10px",
                width: "206px",
                border: "1px solid black",
                marginLeft: "89px",
              }}
            />
            <p
              style={{
                font: "normal normal normal 10px/12px SF Pro Text",
                letterSpacing: "0px",
                color: "#00242E",
                opacity: 0.5,
                width: "210px",
                marginLeft: "89px",
                textAlign: "left",
              }}
            >
              Harfler, sayılar ve semboller içeren 8 veya daha fazla karakter
              kullanın.
            </p>
            <p
              style={{
                marginTop: "18px",
                fontSize: "14px",
                fontWeight: "normal",
                textAlign: "left",
                marginLeft: "90px",
              }}
            >
              Yeni şifreyi onayla
            </p>
            <input
              type="text"
              placeholder="Yeni şifreyi onayla"
              style={{
                width: "208px",
                height: "36px",
                marginTop: "-5px",
                border: "1px solid #7F9196",
                borderRadius: "4px",
                paddingLeft: "8px",
              }}
            />
            <br />
            <button
              style={{
                background: "#A97900 0% 0% no-repeat padding-box",
                width: "140px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                color: "white",
                marginTop: "28px",
              }}
              onClick={handleButtonClick}
            >
              Şifreyi Onayla
            </button>
            <hr
              style={{
                marginTop: "10px",
                width: "204px",
                border: "1px solid black",
                marginLeft: "89px",
              }}
            />

            <p style={{ fontSize: "12px" }}>
              Hesabın yok mu? Hemen{" "}
              <span style={{ color: "#A97900" }} onClick={handleButtonClick2}>
                {" "}
                kayıt ol!
              </span>
            </p>
          </Container>
        </div>
      )}
    </>
  );
};

export default SifreSıfırlama;
