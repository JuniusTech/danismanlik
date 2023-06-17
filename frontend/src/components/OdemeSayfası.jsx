import React from "react";
import LeftSimge2 from "../assets/LeftSimge2.png";
import { Container } from "react-bootstrap";
import TL from "../assets/TL.png";

const OdemeSayfası = () => {
  return (
    <div>
      <p
        style={{
          color: "#A97900",
          height: "19px",
          fontSize: "16px",
          fontWeight: "500",
          margin: "26px 0 20px 208px",
        }}
      >
        <img
          src={LeftSimge2}
          alt=""
          style={{
            marginRight: "4px",
            width: "12px",
            height: "21px",
            marginTop: "-3px",
          }}
        />
        ÖDEME PLANLARINA GERİ DÖN
      </p>
      <Container
        style={{
          width: "1120px",
          height: "550px",
          border: "1px solid #A97900",
          borderRadius: "10px",
          marginBottom: "40px",
          padding: "40px 30px",
        }}
      >
        <div
          style={{
            width: "740px",
            borderRight: "1px solid #A97900",
            height: "470px",
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              textDecorationLine: "underline",
              color: "#00242E",
            }}
          >
            Abonelik Planları
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                width: "260px",
                height: "80px",
                border: "1px solid #A97900",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: "-5px",
                }}
              >
                499{" "}
                <span>
                  <img
                    src={TL}
                    height={"26px"}
                    width={"19px"}
                    style={{ margin: "-25px 0 0 -5px" }}
                    alt=""
                  />
                </span>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: "-15px",
                }}
              >
                Aylık Abonelik / KDV Dahil
              </p>
            </div>
            <div
              style={{
                width: "260px",
                height: "80px",
                border: "1px solid #A97900",
                borderRadius: "10px",
                background: "#00242E",
                color: "white",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: "-5px",
                }}
              >
                4499{" "}
                <span>
                  <svg
                    style={{ margin: "-20px 0 0 -5px" }}
                    width="19"
                    height="26"
                    viewBox="0 0 19 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.03473 0C5.96248 0 6.71203 0.742471 6.71203 1.66147V3.49429L12.96 1.72378C13.851 1.46937 14.7788 1.98338 15.0356 2.86604C15.2925 3.7487 14.7735 4.6677 13.8825 4.92212L6.71203 6.95223V8.47871L12.96 6.7082C13.851 6.45379 14.7788 6.9678 15.0356 7.85046C15.2925 8.73312 14.7735 9.65212 13.8825 9.90654L6.71203 11.9366V22.6771H10.0561C13.6309 22.6771 15.4445 20.351 15.6227 16.8152L15.6436 16.3998C15.6908 15.4808 16.477 14.7799 17.4048 14.8214C18.3326 14.8629 19.0402 15.6469 18.9982 16.5659L18.9773 16.9813C18.7099 22.2876 15.4183 26 10.0561 26H5.03473C4.10697 26 3.35743 25.2575 3.35743 24.3385V12.8816L2.14139 13.2243C1.25033 13.4787 0.322572 12.9647 0.0657357 12.082C-0.1911 11.1994 0.327814 10.2804 1.21888 10.026L3.35743 9.42886V7.89719L2.14139 8.23987C1.25033 8.49428 0.322572 7.98027 0.0657357 7.09761C-0.1911 6.21495 0.327814 5.29595 1.21888 5.04153L3.35743 4.44444V1.66147C3.35743 0.742471 4.10697 0 5.03473 0Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: "-15px",
                }}
              >
                Aylık Abonelik / KDV Dahil
              </p>
            </div>

            <div style={{ position: "relative" }}>
              <svg
                width="101"
                height="101"
                viewBox="0 0 101 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.063 15.0631H85.9407V85.9408H15.063V15.0631Z"
                  fill="#A97900"
                />
                <path
                  d="M15.063 15.0631H85.9407V85.9408H15.063V15.0631Z"
                  fill="#A97900"
                />
                <path
                  d="M50.5019 0.383789L100.62 50.5019L50.5019 100.62L0.383789 50.5019L50.5019 0.383789Z"
                  fill="#A97900"
                />
                <path
                  d="M50.5019 0.383789L100.62 50.5019L50.5019 100.62L0.383789 50.5019L50.5019 0.383789Z"
                  fill="#A97900"
                />
              </svg>
              <p
                style={{
                  width: "79px",
                  height: "54px",
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "white",
                  position: "absolute",
                  top: "10px",
                  left: "20px",
                }}
              >
                %30 <br />{" "}
                <span style={{ fontSize: "15px", marginTop: "-20px" }}>
                  İndirimli
                </span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "380px", height: "470px" }}></div>
      </Container>
    </div>
  );
};

export default OdemeSayfası;
