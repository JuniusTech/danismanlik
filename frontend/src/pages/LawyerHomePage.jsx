import React from "react";
import ladyJustice from "../assets/Lady Justice.png";
import userIcon from "../assets/User Icon.png";
import TL from "../assets/TL.png";
import Thick from "../assets/Thick.png";
import User2 from "../assets/user2.png";
import lawyerHomePageMıdLogo from "../assets/lawyerHomePageMıdLogo.png";
import Users from "../assets/users.png";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";
import secondImg from "../assets/lawyerHomePageImg.png";
import thirdImg from "../assets/lawyerHomeImg2.png";

const LawyerHomePage = () => {
  return (
    <>
      <div
        className="Bdiv"
        style={{
          width: "1640px",
          marginLeft: "140px",
          marginRight: "140px",
        }}
      >
        <div
          className="div1"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "1640px",
            margin: "2px",
            border: "2px solid red",
          }}
        >
          <div
            className="div2"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "989px",
              height: "680px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              margin: "2px",
              border: "2px solid gold",
            }}
          >
            <p
              style={{
                fontFamily: "Segoe UI",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "64px",
                lineHeight: "85px",
                width: "989px",
                height: "85px",
              }}
            >
              500.000+ Müvekkil Seni Bekliyor!
            </p>
            <p
              style={{
                width: "527px",
                height: "43px",
                fontFamily: "Segoe UI",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "32px",
                lineHeight: "43px",
              }}
            >
              Dava sürecini planla ve kolayca takip et.
            </p>
            <button
              style={{
                width: "200px",
                height: "60px",
                background: "#A97900",
                borderRadius: "8px",
                border: "none",
                fontFamily: "Segoe UI",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "43px",
                color: "#FFFFFF",
              }}
            >
              Kayıt Ol
            </button>
          </div>

          <div
            className="div3"
            style={{
              position: "relative",
              display: "flex",
              margin: "2px",
              border: "2px solid blue",
            }}
          >
            <div
              className="div4"
              style={{
                width: "605px",
                height: "605px",
                border: "1px solid #A97900",
                borderRadius: "50%",
              }}
            ></div>
            <img
              src={ladyJustice}
              width={"490px"}
              height={"680px"}
              style={{
                position: "absolute",
                marginLeft: "58px",
                marginTop: "5px",
              }}
              alt=""
            />
          </div>
        </div>
        //!--------------------------------------------------------------------------------------
        <div
          className="nasilCalisir"
          style={{
            width: "1640px",
            height: "880px",
            background: "#00242E",
            borderRadius: "15px",
            marginTop: "42px",
          }}
        >
          <p
            className="nasilCalisirBaslik"
            style={{
              fontFamily: "'SF Pro Text'",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "38px",
              lineHeight: "45px",
              color: "#FFFFFF",
            }}
          >
            Avukatımol, Nasıl Çalışıyor?
          </p>
          <div
            className="nasilCalisirContainer"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div
              style={{
                padding: "1rem",
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <div
                className="nasilCalisirFirstDiv"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  height: "650px",
                }}
              >
                <div
                  className="nasilCalisirFirstDivP"
                  style={{ marginTop: "-3rem", width: "228px" }}
                >
                  <p
                    style={{
                      paddingTop: "2rem",
                      fontSize: "81px",
                      height: "80px",
                    }}
                  >
                    1
                  </p>
                </div>
                <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                  <div className="ucgen"></div>
                  <h1
                    className="mt-4"
                    style={{
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "27px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#00242E",
                      margin: "1rem 0 4rem 0",
                    }}
                  >
                    Üyeliğinizi Oluşturun
                  </h1>
                  <h1
                    style={{
                      fontFamily: "'SF Pro Text'",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#00242E",
                      height: "120px",
                      padding: "0 10px",
                    }}
                  >
                    500.000’den fazla müvekkilin size ulaşmasını ve danışmasını
                    sağlayın.
                  </h1>
                  <div
                    style={{
                      left: "25.65%",
                      right: "24.78%",
                      top: "73.95%",
                      bottom: "9.26%",
                      background: "#FFFFFF",
                      Width: "151.2px",
                      Height: "106.62px",
                      position: "absolute",
                      paddingTop: "10%",
                      border: "1px solid #00242E",
                      borderRadius: "49% 51% 48% 52% / 67% 66% 34% 33% ",
                    }}
                  >
                    <img src={userIcon} width={"79px"} height={"61px"} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <div
                className="nasilCalisirFirstDiv"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  height: "650px",
                }}
              >
                <div
                  className="nasilCalisirFirstDivP"
                  style={{ marginTop: "-3rem", width: "228px" }}
                >
                  <p
                    style={{
                      paddingTop: "2rem",
                      fontSize: "81px",
                      height: "80px",
                    }}
                  >
                    2
                  </p>
                </div>
                <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                  <div className="ucgen"></div>
                  <h1
                    className="mt-4"
                    style={{
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "27px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#00242E",
                      margin: "1rem 0 4rem 0",
                    }}
                  >
                    Ücretinizi Belirleyin
                  </h1>
                  <h1
                    style={{
                      fontFamily: "'SF Pro Text'",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#00242E",
                      height: "120px",
                      padding: "0 10px",
                    }}
                  >
                    Belirtmiş olduğunuz ücret aralığında müşterilerinize hizmet
                    sağlayın.
                  </h1>
                  <div
                    style={{
                      left: "25.65%",
                      right: "24.78%",
                      top: "73.95%",
                      bottom: "9.26%",
                      background: "#FFFFFF",
                      Width: "151.2px",
                      Height: "106.62px",
                      position: "absolute",
                      paddingTop: "10%",
                      border: "1px solid #00242E",
                      borderRadius: "49% 51% 48% 52% / 67% 66% 34% 33% ",
                    }}
                  >
                    <img src={TL} width={"45px"} height={"61px"} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
                position: "relative",
              }}
            >
              <div
                className="nasilCalisirFirstDiv"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  height: "650px",
                }}
              >
                <div
                  className="nasilCalisirFirstDivP"
                  style={{ marginTop: "-3rem", width: "228px" }}
                >
                  <p
                    style={{
                      paddingTop: "2rem",
                      fontSize: "81px",
                      height: "80px",
                    }}
                  >
                    3
                  </p>
                </div>
                <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                  <div className="ucgen"></div>
                  <h1
                    className="mt-4"
                    style={{
                      fontFamily: "SF Pro Text",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "27px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#00242E",
                      margin: "1rem 0 4rem 0",
                    }}
                  >
                    Müşterilerinizle İletişime Geçin
                  </h1>
                  <h1
                    style={{
                      fontFamily: "'SF Pro Text'",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "25px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#00242E",
                      height: "120px",
                      padding: "0 10px",
                    }}
                  >
                    Sahip olduğunuz panel sayesinde müşteri bilgilerine ve dava
                    süreçlerine kolayca erişim sağlayın.
                  </h1>
                  <div
                    style={{
                      left: "25.65%",
                      right: "24.78%",
                      top: "73.95%",
                      bottom: "9.26%",
                      background: "#FFFFFF",
                      Width: "151.2px",
                      Height: "106.62px",
                      position: "absolute",
                      paddingTop: "12%",
                      border: "1px solid #00242E",
                      borderRadius: "49% 51% 48% 52% / 67% 66% 34% 33% ",
                    }}
                  >
                    <img src={Thick} width={"60px"} height={"43px"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1640px",
            height: "150px",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
            width: "1640px",
            height: "477px",
            display: "flex",
            padding: "40px",
            margin: "auto",
            color: " #00242E",
          }}
        >
          <div>
            <p
              style={{
                width: "557.18px",
                height: "64.47px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "48px",
              }}
            >
              100 Bin+ Avukat neden Avukatımol’u tercih ediyor?
            </p>
            <p
              style={{
                width: "530.18px",
                height: "50.47px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "28px",
                marginTop: "50px",
              }}
            >
              Üye avukatlarımızın mahremiyetini %100 güvence altına alıyoruz.{" "}
            </p>
            <p
              style={{
                width: "557.18px",
                height: "50.47px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "28px",
                margin: "20px 0",
              }}
            >
              Avukatımol platformu sayesinde, teknolojiyle birleşen hızlı ve
              kullanımı kolay bir hizmet deneyimi sunuyoruz.{" "}
            </p>
            <p
              style={{
                width: "557.18px",
                height: "50.47px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "28px",
              }}
            >
              Danışmanlık ve dava süreçlerinde takip kolaylığı sunan, ödeme
              süreçlerinin hukuken garanti altına alındığı güvenli ve pratik bir
              ağ oluşturuyoruz.
            </p>
          </div>
          <div
            style={{
              marginLeft: "300px",
              display: "flex",
              borderRadius: "15px",
            }}
          >
            <img src={box1} width={"175px"} height={"400px"} alt="" />
            <img src={box2} width={"175px"} height={"400px"} alt="" />
            <img src={box3} width={"175px"} height={"400px"} alt="" />
            <img src={box4} width={"175px"} height={"400px"} alt="" />
          </div>
        </div>
        <div
          style={{
            width: "1640px",
            height: "477px",
            display: "flex",
            margin: "auto",
            marginTop: "60px",
          }}
        >
          <img
            src={secondImg}
            width={"700px"}
            height={"400px"}
            style={{ margin: "46px 40px 40px 45px", borderRadius: "15px" }}
            alt=""
          />
          <div style={{ color: "#00242E" }}>
            <p
              style={{
                width: "700px",
                height: "116.1px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "48px",
                marginTop: "40px",
                marginLeft: "100px",
              }}
            >
              Avukatımol Pro üyelik ile internetin gücünden %100 faydalanın!
            </p>
            <p
              style={{
                width: "682.74px",
                height: "140.19px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "29px",
                margin: "32px 0 33px 100px",
              }}
            >
              Aylık ortalama 5 milyon ziyaret içerisinde profesyonel üyelik
              sayesinde öne çıkan güçlü bir online profil oluşturun.
              Müşterilerinizin yapılan yorumlar ve değerlendirmeler ile sizi
              daha hızlı tercih etmesini sağlayın.
            </p>
            <button
              style={{
                height: "78.86px",
                background: "#A97900",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "29px",
                color: "#FFFFFF",
                width: "329px",
                Height: "78px",
                borderRadius: "15px",
                border: "none",
                padding: " 0 15px",
                marginLeft: "100px",
              }}
            >
              Ödeme Planlarını Görün
            </button>
          </div>
        </div>
        <div
          style={{
            width: "1640px",
            height: "477px",
            display: "flex",
            margin: "auto",
            marginTop: "60px",
          }}
        >
          <div style={{ color: "#00242E", padding: "40px 100px 0 40px" }}>
            <p
              style={{
                width: "670px",
                height: "158.21px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "48px",
              }}
            >
              Mesafe sorununu ortadan kaldırın! Türkiye’nin her yerinden
              ulaşılabilir olun.
            </p>
            <p
              style={{
                width: "580px",
                height: "127.36px",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "29px",
                marginTop: "20px",
              }}
            >
              Randevu talebi oluşturma sistemi ile danışanlarınızın sizin
              belirlediğiniz saat aralığında, müsait zamanlarınızda görüşme
              talebi oluşturmasını sağlayın, hızlı bir şekilde iletişime geçin.
            </p>
            <button
              style={{
                height: "78.86px",
                background: "#A97900",
                fontFamily: "'SF Pro Text'",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "29px",
                color: "#FFFFFF",
                width: "329px",
                Height: "78px",
                borderRadius: "15px",
                border: "none",
                padding: " 0 15px",
                marginTop: "20px",
              }}
            >
              Ödeme Planlarını Görün
            </button>
          </div>
          <img
            src={thirdImg}
            width={"700px"}
            height={"400px"}
            style={{ margin: "60px 0px 0 60px" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LawyerHomePage;
