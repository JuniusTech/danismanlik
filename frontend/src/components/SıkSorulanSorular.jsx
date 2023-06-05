import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/sıkSorulanSorular.css";
const SıkSorulanSorular = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "4rem", color: " #A97900" }}>
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
      </Accordion>
    </div>
  );
};

export default SıkSorulanSorular;
