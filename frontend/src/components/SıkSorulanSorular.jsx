import React, { useState } from "react";

import "../css/sıkSorulanSorular.css";
import background from "../assets/sıksorulansorularbackground.png";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const SıkSorulanSorular = () => {
  const [activeLink, setActiveLink] = useState("#first");

  const handleLinkClick = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <div>
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

      <h1 style={{ textAlign: "center", marginTop: "5rem", color: " #A97900" }}>
        Sıkca Sorulan Sorular
      </h1>
      {/* <Nav
              fill
              variant="tabs"
              defaultActiveKey="#first"
              activeKey={activeLink}
              onSelect={handleLinkClick}
            >
              <Nav.Item style={{ width: "50%" }}>
                <Nav.Link eventKey="#first">First</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ width: "50%" }}>
                <Nav.Link eventKey="#link">Link</Nav.Link>
              </Nav.Item>
            </Nav> */}
      <div style={{ display: "flex", width: "1250px", margin: "auto" }}>
        <Card style={{ width: "1250px" }}>
          <Card.Header>
            <Nav
              fill
              variant="tabs"
              defaultActiveKey="#first"
              activeKey={activeLink}
              onSelect={handleLinkClick}
            >
              <Nav.Item style={{ width: "50%" }}>
                <Nav.Link
                  style={{ border: activeLink === "#first" ? "none" : "" }}
                  eventKey="#first"
                  className={activeLink === "#first" ? "active-link" : ""}
                >
                  First
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ width: "50%" }}>
                <Nav.Link
                  style={{
                    border: activeLink === "#link" ? "2px solid white" : "",
                  }}
                  eventKey="#link"
                  className={activeLink === "#link" ? "active-link" : ""}
                >
                  Link
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <div
              style={{ display: activeLink === "#first" ? "block" : "none" }}
            >
              <p>Açıklama 1</p>
            </div>
            <div style={{ display: activeLink === "#link" ? "block" : "none" }}>
              <p>Açıklama 2</p>
            </div>
          </Card.Body>
        </Card>
      </div>
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
