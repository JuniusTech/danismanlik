import React, { useState } from "react";
import background from "../../assets/sıksorulansorularbackground.png";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SSSGenel from "./SSSGenel";

const SıkSorulanSorular = () => {
  const [soru, setSoru] = useState("");
  const [email, setEmail] = useState("");
  const iletişimeGeçin = () => {
    console.log(soru, email);
    /* post işlemi */
  };
  return (
    <>
      {" "}
      <Navbar />
      <div
        style={{
          width: "1300px",
          height: "420px",
          margin: "100px auto",
          backgroundImage: `url(${background})`,
          paddingTop: "150px",
          filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",
          borderRadius: "20px",
        }}
      >
        <p
          style={{
            height: "38px",
            fontFamily: "'SF Pro Text'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "45px",
            lineHeight: "66px",
            color: "#00242E",
            textAlign: "center",
          }}
        >
          Hangi konuda sorun yaşıyorsunuz?
        </p>
        <form
          className="search-bar"
          style={{
            position: "relative",
            width: "630px",
            margin: "auto",
            height: "50px",
          }}
        >
          <i
            className="search-icon fa fa-search "
            aria-hidden="true"
            style={{
              top: "39px",
              left: "18px",
              position: "absolute",
              fontSize: "24px",
              opacity: "0.5",
            }}
          ></i>
          <input
            type="text"
            placeholder="Sorununuzu anlatacak bir kelime giriniz"
            style={{
              paddingLeft: "50px",
              width: "630px",
              height: "50px",
              borderRadius: "8px",
              marginTop: "25px",
              border: "none",
            }}
          ></input>
        </form>
      </div>
      <SSSGenel />
      <div
        style={{
          width: "494px",
          height: "280px",
          background: "#00242E",
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          margin: "80px 500px 40px 500px",
          paddingTop: "10px ",
        }}
      >
        <p
          style={{
            width: "416px",
            height: "58px",
            fontFamily: "'SF Pro Text'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#FFFFFF",
            margin: "auto",
          }}
        >
          Aradığınızı cevapları bulamadınız mı? Bizimle iletişime geçin.
        </p>
        <input
          type="text"
          style={{
            width: "450px",
            height: "100px",
            margin: "0px 23px",
            borderRadius: "10px",
          }}
          onChange={(e) => setSoru(e.target.value)}
        />
        <div
          style={{
            width: "450px",
            height: "50px",
            borderRadius: "8px",
            background: "#FFFFFF",
            margin: "24px auto",
            display: "flex",
          }}
        >
          <input
            type="text"
            style={{
              width: "350px",
              height: "50px",
              paddingLeft: "15px",
              borderRadius: "8px 0px 0px 8px",
            }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email adresiniz"
          />{" "}
          <button
            style={{
              width: "100px",
              height: "50px",
              background: "#A97900",
              borderRadius: "0px 8px 8px 0px",
              fontFamily: "'SF Pro Text'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
            onClick={iletişimeGeçin}
          >
            Gönder
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SıkSorulanSorular;
