import React, { useState } from "react";
import HesapDoğrulamaEkranı from "../components/şifre yenileme/HesapDoğrulamaEkrani";
import ladyJustice from "../assets/Lady Justice.png";

const SifreSıfırlama = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <>
      {isButtonClicked ? (
        <HesapDoğrulamaEkranı />
      ) : (
        <center
          style={{
            color: "#00242E",
            width: "803px",
            margin: "-63px auto",
          }}
        >
          <div
            style={{
              width: "700px",
              height: "90px",
              borderRadius: "0 0 18px 18px",
              marginTop: "64px",
              font: "normal normal bold 41px/54px Segoe UI",
              boxShadow: "0px 2px 6px #00000029",
            }}
          >
            avukatımol
          </div>
          <div
            style={{
              width: "500px",
              height: "255px",
              border: "1px solid #A9790080",
              borderRadius: "8px",
              marginTop: "51px",
            }}
          >
            <p style={{ marginTop: "30px" }}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Avukatımol</span> şifrenizi
              sıfırlamak için talebiniz alınmıştır.
            </p>
            <p style={{ marginTop: "20px" }}>
              Lütfen aşağıdaki butona tıklayarak yeni şifrenizi oluşturun.
            </p>
            <button
              style={{
                width: "170px",
                height: "40px",
                background: "#A97900",
                color: "white",
                font: "normal normal bold 20px/24px SF Pro Text",
                lineHeight: "24px",
                border: "none",
                borderRadius: "5px",
                marginTop: "13px",
              }}
              onClick={handleButtonClick}
            >
              Sıfırla
            </button>
            <p style={{ marginTop: "23px" }}>
              Bu e-posta size özeldir! <br /> Bu e-postayı siz talep
              etmediyseniz, lütfen
              <span style={{ color: "#A97900", marginLeft: "5px" }}>
                bizimle iletişime geçiniz.
              </span>
            </p>
          </div>
          <div
            style={{
              width: "150px",
              height: "150px",
              position: "relative",
              display: "flex",
              marginTop: "46px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid #A97900",
                borderRadius: "50%",
              }}
            ></div>
            <img
              src={ladyJustice}
              width={"120px"}
              height={"170px"}
              style={{
                position: "absolute",
                marginLeft: "18px",
                marginTop: "3px",
              }}
              alt=""
            />
          </div>
          <div
            style={{
              width: "700px",
              height: "100px",
              borderRadius: "18px 18px 0 0",
              boxShadow: "0px -2px 6px #00000029",
              marginTop: "20px",
              color: "#A97900",
              font: "normal normal 300 14px/16px SF Pro Text",
              lineHeight: "16px",
              paddingTop: "25px",
            }}
          >
            <p>www.avukatımol.com - Avukat bul ve randevu al</p>
            <p style={{ marginTop: "11px" }}>
              © 2023 JuniusTech Teknoloji A.Ş. Tüm hakları saklıdır.
            </p>
          </div>
        </center>
      )}
    </>
  );
};

export default SifreSıfırlama;
