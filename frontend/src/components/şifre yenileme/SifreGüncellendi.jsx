import React from "react";

const SifreGüncellendi = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
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
      <div
        style={{
          width: "400px",
          height: "420px",
          fontFamily: "SF Pro Text",
          fontSize: "16px",
          lineHeight: "19px",
          letterSpacing: "0px",
          color: "#00242E",
          textAlign: "center",
          background: "white",
          boxShadow: " 0px 3px 8px #00000029",
          borderRadius: "25px",
        }}
      >
        <p style={{ margin: "53px auto", fontSize: "16px", fontWeight: "900" }}>
          Şifreniz güncellendi!
        </p>
        <div
          style={{
            width: "95px",
            height: "95px",
            borderRadius: "50%",
            background: "#A97900 0% 0% no-repeat padding-box",
            margin: "46px auto",
            color: "white",
            fontSize: "60px",
            fontWeight: "800",
            padding: "40px 20px",
          }}
        >
          ✓
        </div>
        <p
          style={{
            fontWeight: "500",
            fontSize: "16px",
            fontFamily: "SF Pro Text;",
          }}
        >
          Yeni şifreniz oluşturuldu!
        </p>

        <button
          style={{
            width: "140px",
            height: "40px",
            background: "#A97900 0% 0% no-repeat padding-box",
            color: "white",
            font: "normal normal bold 20px/24px SF Pro Text",
            border: "none",
            borderRadius: "3px",
            marginTop: "30px",
          }}
        >
          Giriş yap
        </button>
      </div>
    </div>
  );
};

export default SifreGüncellendi;
