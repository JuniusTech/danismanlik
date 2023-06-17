import React, { useState } from "react";
import { Nav, NavItem, TabPane, TabContent } from "react-bootstrap";
import background from "../assets/sıksorulansorularbackground.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import YeniSifreBelirle from "./şifre yenileme/YeniSifreBelirle";
import SıkSorulanSorularDetay from "./SıkSorulanSorularDetay";

const SıkSorulanSorular = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const [activeTab, setActiveTab] = useState("#first");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
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
      {isButtonClicked ? (
        <SıkSorulanSorularDetay />
      ) : (
        <div>
          <Card
            style={{
              width: "1300px",
              margin: "50px auto",
              paddingBottom: "60px",
            }}
          >
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item style={{ width: "50%" }}>
                  <Nav.Link
                    href="#first"
                    active={activeTab === "#first"}
                    onClick={() => handleTabChange("#first")}
                  >
                    Avukat
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: "50%" }}>
                  <Nav.Link
                    href="#link"
                    active={activeTab === "#link"}
                    onClick={() => handleTabChange("#link")}
                  >
                    Müvekkil
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {activeTab === "#first" ? (
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div style={{ marginLeft: "40px", marginTop: "10px" }}>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p
                          style={{ fontSize: "24px", color: "#A97900" }}
                          onClick={handleButtonClick}
                        >
                          Genel (Avukat){" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          HESAP DONDURMA VEYA SİLME{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          TEKNİK DESTEK{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          ÖDEME VE İADE{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          MESAJLAŞMA / İLETİŞİM / BİLGİLENDİRME
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          GİRİŞ VE ŞİFRE
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div style={{ marginLeft: "40px", marginTop: "10px" }}>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          Genel (Müvekkil)
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          HESAP DONDURMA VEYA SİLME{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          TEKNİK DESTEK{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div style={{ marginLeft: "50px", marginTop: "10px" }}>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          ÖDEME VE İADE{" "}
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          MESAJLAŞMA / İLETİŞİM / BİLGİLENDİRME
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "550px", marginTop: "90px" }}>
                        <p style={{ fontSize: "24px", color: "#A97900" }}>
                          GİRİŞ VE ŞİFRE
                        </p>
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Bu siteyi nasıl kullanabilirim?
                        </p>
                        <hr />
                        <p style={{ fontSize: "16px", color: "#00242E" }}>
                          Neden Avukatımol’da hizmet vermeliyim?
                        </p>
                        <hr />
                        <p style={{ color: "#A97900" }}>
                          17 makalenin tümünü görüntüle{" "}
                          <span>
                            <svg
                              style={{ marginTop: "-3px", marginLeft: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="7"
                              height="12"
                              viewBox="0 0 5.912 10.134"
                              fill="##A97900"
                            >
                              <path
                                id="Icon_awesome-caret-down"
                                data-name="Icon awesome-caret-down"
                                d="M1.123,7.5h8.77a.7.7,0,0,1,.481,1.2L5.991,13.206a.67.67,0,0,1-.965,0L.642,8.7A.7.7,0,0,1,1.123,7.5Z"
                                transform="translate(-7.5 10.575) rotate(-90)"
                                fill="##A97900"
                                opacity="0.75"
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
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
      )}
      <Footer />
    </>
  );
};

export default SıkSorulanSorular;
