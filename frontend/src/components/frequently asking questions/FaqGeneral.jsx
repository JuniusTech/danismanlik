import React, { useState } from "react";
import { Nav, NavItem, TabPane, TabContent } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SSSDetay from "./FaqDetail";

const SSSGenel = () => {
  const [activeTab, setActiveTab] = useState("#first");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [info, setInfo] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleClick = (event) => {
    setInfo(event.target.innerText);
    setInfo3(event.target.parentElement.parentElement.innerText);
    setInfo2(event.target.parentElement.firstElementChild.innerText);
    if (event.target.tagName === "P") {
      handleButtonClick();
    }
  };

  return (
    <div>
      {" "}
      {isButtonClicked ? (
        <SSSDetay info={info} info2={info2} info3={activeTab} />
      ) : (
        <div>
          <Card
            style={{
              width: "1300px",
              margin: "50px auto",
              paddingBottom: "60px",
            }}
            onClick={handleClick}
          >
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item style={{ width: "50%" }}>
                  <Nav.Link
                    style={{
                      color: "#A97900",
                      fontSize: "24px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                    href=""
                    active={activeTab === "#first"}
                    onClick={() => handleTabChange("#first")}
                  >
                    AVUKAT / SIKÇA SORULAN SORULAR
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{ width: "50%" }}>
                  <Nav.Link
                    style={{
                      color: "#A97900",
                      fontSize: "24px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                    href=""
                    active={activeTab === "#link"}
                    onClick={() => handleTabChange("#link")}
                  >
                    MÜVEKKİL / SIKÇA SORULAN SORULAR
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
                        <h4 style={{ fontSize: "24px", color: "#A97900" }}>
                          Genel (Avukat){" "}
                        </h4>
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
        </div>
      )}
    </div>
  );
};

export default SSSGenel;
