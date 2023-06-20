import React from "react";
import { Nav, NavItem, TabPane, TabContent } from "react-bootstrap";
import background from "../../assets/sıksorulansorularbackground.png";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Card from "react-bootstrap/Card";
import SSSGenel from "./SSSGenel";

const SıkSorulanSorular = () => {
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
      <Footer />
    </>
  );
};

export default SıkSorulanSorular;
