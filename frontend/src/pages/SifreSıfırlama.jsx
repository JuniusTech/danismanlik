import React from "react";
import ladyJustice from "../assets/Lady Justice.png";

const SifreSıfırlama = () => {
  return (
    <center
      style={{
        color: "#00242E",
        width: "803px",
        margin: " -63px auto",
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
        <svg
          style={{ margin: "30px auto" }}
          xmlns="http://www.w3.org/2000/svg"
          width="38.469"
          height="36.385"
          viewBox="0 0 38.469 46.385"
        >
          <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
            <path
              id="Exclusion_1"
              data-name="Exclusion 1"
              d="M9.658,31.167h0L0,22.331,9.658,0,19.42,22.331,9.658,31.167ZM9.727,6.644h0L3.151,21.6H16.2L9.727,6.644Z"
              transform="translate(9.474 15.217)"
              fill="#a97900"
            />
            <path
              id="Path_1"
              data-name="Path 1"
              d="M2828.9,815.875h6.01l13.046-30.232,13.491,30.232h5.921l-4.1-9.662-2.449-4.9-1.692-3.963L2857,792.41l-5.967-13.357h-5.566l-5.922,13.357-2.137,4.942-1.914,3.963-2.094,4.9Z"
              transform="translate(-2828.901 -779.053)"
              fill="#00242e"
            />
          </g>
        </svg>{" "}
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
        >
          Sıfırla
        </button>
        <p style={{ marginTop: "23px" }}>
          Bu e-posta size özeldir! <br /> Bu e-postayı siz talep etmediyseniz,
          lütfen
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
  );
};

export default SifreSıfırlama;
