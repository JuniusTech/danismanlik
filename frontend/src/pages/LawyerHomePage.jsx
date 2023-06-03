import React from "react";
import ladyJustice from "../assets/Lady Justice.png";

const LawyerHomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "100px  140px 0 140px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            height: "680px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "Segoe UI",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "64px",
              lineHeight: "85px",
              width: "890px",
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
              width: "150px",
              height: "40px",
              background: "#A97900",
            }}
          >
            Kayıt Ol
          </button>
        </div>

        <div style={{ width: "40%", position: "relative", display: "flex" }}>
          <div
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
            style={{ position: "absolute" }}
            alt=""
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default LawyerHomePage;
