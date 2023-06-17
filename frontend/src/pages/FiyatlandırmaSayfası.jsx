import React, { useState } from "react";
import User2 from "../assets/user2.png";
import lawyerHomePageMıdLogo from "../assets/lawyerHomePageMıdLogo.png";
import Users from "../assets/users.png";
import tl from "../assets/TL.png";
import tik from "../assets/fiyatlandırmaTik.png";
import X from "../assets/fiyatlandırmaX.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OdemeSayfası from "../components/OdemeSayfası";
const FiyatlandırmaSayfası = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <div>
      <Navbar />

      {isButtonClicked ? (
        <OdemeSayfası />
      ) : (
        <>
          <p
            style={{
              width: "662px",
              height: "76px",
              fontFamily: "SF Pro Text",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "76px",
              color: "#00242E",
              textAlign: "center",
              margin: "30px auto",
            }}
          >
            GEREĞİ DÜŞÜNÜLDÜ
          </p>
          <p
            style={{
              width: "366px",
              height: "38px",
              fontFamily: "SF Pro Text",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "32px",
              lineHeight: "38px",
              color: "#00242E",
              margin: "auto",
            }}
          >
            Sizin için biz düşündük.
          </p>
          <div
            style={{
              width: "1240px",
              height: "150px",
              margin: "100px 140px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                marginLeft: "50px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  border: "1px solid #00242E",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={User2}
                  width={"34px"}
                  height={"45px"}
                  style={{ marginLeft: "30px" }}
                  alt=""
                />
                <svg
                  style={{ position: "absolute", right: "30px", top: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#A97900"
                  class="bi bi-chat-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "30px",
                }}
              >
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "53px",
                    color: "#00242E",
                  }}
                >
                  20 Bin
                </p>
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#00242E",
                  }}
                >
                  aylık danışan yorum sayısı
                </p>
              </div>
              <p></p>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  border: "1px solid #00242E",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={lawyerHomePageMıdLogo}
                  width={"84px"}
                  height={"85px"}
                  style={{ marginLeft: "20px" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "30px",
                }}
              >
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "53px",
                    color: "#00242E",
                  }}
                >
                  100 Bin
                </p>
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#00242E",
                  }}
                >
                  üye avukat sayısı
                </p>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "120px",
                  border: "1px solid #00242E",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={Users}
                  width={"74px"}
                  height={"40px"}
                  style={{ margin: "auto" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "30px",
                }}
              >
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "36px",
                    lineHeight: "53px",
                    color: "#00242E",
                  }}
                >
                  20 Bin
                </p>
                <p
                  style={{
                    width: "293px",
                    height: "40px",
                    fontFamily: "'SF Pro Text'",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "20px",
                    lineHeight: "23px",
                    color: "#00242E",
                  }}
                >
                  Aylık danışan yorum sayısı
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "90px",
            }}
          >
            <div
              style={{
                width: "398px",
                height: "970px",
                background: "#FFFFFF",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  width: "243px",
                  height: "38px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "38px",
                  textAlign: "center",
                  color: "#A97900",
                  margin: "54px 77px 40px 77px",
                }}
              >
                Ücretsiz Üyelik
              </p>
              <p
                style={{
                  width: "46px",
                  height: "67px",
                  left: "369px",
                  top: "768px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "107px",
                  display: "flex",
                  margin: "auto",
                  color: "#00242E",
                }}
              >
                0{" "}
                <span
                  style={{
                    width: "25px",
                    height: "35",
                  }}
                >
                  <img
                    src={tl}
                    alt=""
                    style={{
                      width: "28px",
                      height: "38px",
                      margin: " 18px 0 0 5px",
                    }}
                  />
                </span>
              </p>
              <p
                style={{
                  width: "94px",
                  height: "29px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "29px",
                  textAlign: "center",
                  color: "#000000",
                  opacity: 0.5,
                  margin: "50px auto",
                  paddingLeft: "25px",
                }}
              >
                Ücretsiz
              </p>
              <div
                style={{
                  margin: "130px 0 0 48px",

                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "28px",
                  lineHeight: "38px",
                }}
              >
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                    alt=""
                  />{" "}
                  Profil Fotoğrafı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />
                  Temel Profil Bilgileri
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Görüşlere Cevap Verme
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Online Randevu Takvimi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Web Sitesi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Detaylı Profil Oluşturma
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Randevu Hatırlatıcı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Fotoğraflar
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Profilde Video Paylaşımı
                </p>
                <button
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "#A97900",
                    color: "white",
                    margin: "45px 65px",
                    border: "none",
                  }}
                  onClick={handleButtonClick}
                >
                  SATIN AL
                </button>
              </div>
            </div>
            <div
              style={{
                width: "398px",
                height: "970px",
                background: "#FFFFFF",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                border: "1px solid #A97900",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  width: "243px",
                  height: "38px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "38px",
                  textAlign: "center",
                  color: "#A97900",
                  margin: "54px 77px 40px 77px",
                }}
              >
                Standart Üyelik
              </p>
              <p
                style={{
                  width: "46px",
                  height: "67px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "107px",
                  display: "flex",
                  marginLeft: "120px ",
                  color: "#00242E",
                }}
              >
                249{" "}
                <span
                  style={{
                    width: "25px",
                    height: "35",
                  }}
                >
                  <img
                    src={tl}
                    alt=""
                    style={{
                      width: "28px",
                      height: "38px",
                      margin: " 18px 0 0 5px",
                    }}
                  />
                </span>
              </p>
              <p
                style={{
                  width: "190px",
                  height: "29px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "#000000",
                  opacity: 0.5,
                  margin: "50px auto",
                  paddingLeft: "25px",
                }}
              >
                KDV Dahil/Ay
              </p>
              <div
                style={{
                  margin: "130px 0 0 48px",

                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "28px",
                  lineHeight: "38px",
                }}
              >
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                    alt=""
                  />{" "}
                  Profil Fotoğrafı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />
                  Temel Profil Bilgileri
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Görüşlere Cevap Verme
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Online Randevu Takvimi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Web Sitesi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Detaylı Profil Oluşturma
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Randevu Hatırlatıcı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Fotoğraflar
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={X}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Profilde Video Paylaşımı
                </p>
                <button
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "#A97900",
                    color: "white",
                    margin: "45px 65px",
                    border: "none",
                  }}
                  onClick={handleButtonClick}
                >
                  SATIN AL
                </button>
              </div>
            </div>
            <div
              style={{
                width: "398px",
                height: "970px",
                background: "#FFFFFF",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                border: "1px solid #00242E",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  width: "243px",
                  height: "38px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "38px",
                  textAlign: "center",
                  color: "#A97900",
                  margin: "54px 77px 40px 77px",
                }}
              >
                Profesyonel Üyelik
              </p>
              <p
                style={{
                  width: "46px",
                  height: "67px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "107px",
                  display: "flex",
                  marginLeft: "120px ",
                  color: "#00242E",
                }}
              >
                499{" "}
                <span
                  style={{
                    width: "25px",
                    height: "35",
                  }}
                >
                  <img
                    src={tl}
                    alt=""
                    style={{
                      width: "28px",
                      height: "38px",
                      margin: " 18px 0 0 5px",
                    }}
                  />
                </span>
              </p>
              <p
                style={{
                  width: "190px",
                  height: "29px",
                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "29px",
                  color: "#000000",
                  opacity: 0.5,
                  margin: "50px auto",
                  paddingLeft: "25px",
                }}
              >
                KDV Dahil/Ay
              </p>
              <div
                style={{
                  margin: "130px 0 0 48px",

                  fontFamily: "SF Pro Text",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "28px",
                  lineHeight: "38px",
                }}
              >
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                    alt=""
                  />{" "}
                  Profil Fotoğrafı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />
                  Temel Profil Bilgileri
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Görüşlere Cevap Verme
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Online Randevu Takvimi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Web Sitesi
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Detaylı Profil Oluşturma
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Randevu Hatırlatıcı
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Fotoğraflar
                </p>
                <p style={{ fontSize: "24px" }}>
                  <img
                    src={tik}
                    width={"26px"}
                    height={"26px"}
                    alt=""
                    style={{ marginTop: "-5px", marginRight: "10px" }}
                  />{" "}
                  Profilde Video Paylaşımı
                </p>
                <button
                  style={{
                    width: "150px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "#A97900",
                    color: "white",
                    margin: "45px 65px",
                    border: "none",
                  }}
                  onClick={handleButtonClick}
                >
                  SATIN AL
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default FiyatlandırmaSayfası;
