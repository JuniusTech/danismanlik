import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/sıkSorulanSorular.css";
import background from "../assets/sıksorulansorularbackground.png";
const SıkSorulanSorular = () => {
  return (
    <div>
      <div
        style={{
          width: "1640px",
          height: "450px",
          margin: "180px 140px 0 140px",
          backgroundImage: `url(${background})`,
          paddingTop: "200px",
          filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",
          borderRadius: "20px",
        }}
      >
        <p
          style={{
            height: "48px",
            fontFamily: "'SF Pro Text'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "55px",
            lineHeight: "66px",
            color: "#00242E",
            textAlign: "center",
          }}
        >
          Hangi konuda sorun yaşıyorsunuz?
        </p>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "5rem", color: " #A97900" }}>
        Sıkca Sorulan Sorular
      </h1>
      <Accordion
        defaultActiveKey="0"
        style={{
          margin: "5rem 3rem",
          color: "#00242E",
        }}
      >
        <Accordion.Item
          eventKey="0"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Profesyonel üyelik ile gelen hizmetler nelerdir?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Bu hizmetin bir faturasını alacak mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            12 aylık üyeliğim bittikten sonra üyeliğim otomatik olarak yenilenir
            mi?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="3"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="4"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="5"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="3"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="6"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="7"
          style={{
            margin: "1rem auto",
            border: "1px solid #A97900",
            width: "650px",
          }}
        >
          <Accordion.Header>
            Satın alma işleminden sonra hizmetten hemen yararlanmaya başlayacak
            mıyım?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div
        style={{
          width: "494px",
          height: "180px",
          background: "#00242E",
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          margin: "200px 700px 40px 700px",
          paddingTop: "28px ",
        }}
      >
        <p
          style={{
            width: "416px",
            height: "58px",
            fontFamily: "'SF Pro Text'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#FFFFFF",
            margin: "auto",
          }}
        >
          Aradığınızı cevapları bulamadınız mı? Bizimle iletişime geçin.
        </p>
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
            style={{ width: "350px", height: "50px", paddingLeft: "15px" }}
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
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SıkSorulanSorular;
