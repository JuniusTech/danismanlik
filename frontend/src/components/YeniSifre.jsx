import React from "react";
import { Container } from "react-bootstrap";

const SifreSıfırlama = () => {
  return (
    <Container
      style={{
        width: "540px",
        height: "580px",
        border: "1px solid darkblue",
        display: "flex",
        alignItems: "center",
        marginTop: "70px",
        fontFamily: "SF Pro Text",
        fontSize: "16px",
        lineHeight: "19px",
        letterSpacing: "0px",
        color: "#00242E",
      }}
    >
      <Container
        style={{
          width: "400px",
          height: "450px",
          boxShadow: "0px 0px 8px #00000029",
        }}
      >
        <p style={{ fontWeight: "900" }}>Lütfen yeni şifrenizi belirleyin</p>
      </Container>
    </Container>
  );
};

export default SifreSıfırlama;
