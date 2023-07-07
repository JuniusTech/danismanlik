import React, { useState } from "react";
import LeftSimge2 from "../../assets/LeftSimge2.png";
import { Container } from "react-bootstrap";
import TL from "../../assets/TL.png";
import logo from "../../assets/Logolar.png";
import Ucretlendirme1 from "./Ucretlendirme1";

const Ucretlendirme2 = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [infoText, setInfoText] = useState(false);

  const handleCardNumberChange = (e) => {
    const input = e.target.value;

    const cleanedInput = input.replace(/\D/g, '');

    const truncatedInput = cleanedInput.slice(0, 16);

    const formattedInput = truncatedInput.replace(/(\d{4})/g, '$1 ');
    setCardNumber(formattedInput);
  };

  const handleCardHolderNameChange = (event) => {
    const input = event.target.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, ""); // Sadece harfleri tutar
    setCardHolderName(input);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };
  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };

  const formatExpirationDate = (input) => {
    const cleanedInput = input.replace(/\D/g, "");

    if (cleanedInput.length > 4) {
      return cleanedInput.slice(0, 4);
    }

    if (cleanedInput.length > 2) {
      return cleanedInput.slice(0, 2) + "/" + cleanedInput.slice(2);
    }

    return cleanedInput;
  };
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      {isButtonClicked ? (
        <Ucretlendirme1 />
      ) : (
        <div>
          <p
            style={{
              color: "#A97900",
              height: "19px",
              fontSize: "16px",
              fontWeight: "500",
              margin: "26px 0 20px 158px",
            }}
            onClick={handleButtonClick}
          >
            <img
              src={LeftSimge2}
              alt=""
              style={{
                marginRight: "4px",
                width: "12px",
                height: "21px",
                marginTop: "-3px",
              }}
            />
            ÖDEME PLANLARINA GERİ DÖN
          </p>
          <Container
            style={{
              width: "1309px",
              height: "800px",
              border: "1px solid #A97900",
              borderRadius: "10px",
              marginBottom: "40px",
              padding: "40px 80px",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "24px",
                  textAlign: "center",
                  textDecorationLine: "underline",
                  color: "#00242E",
                }}
              >
                Abonelik Planları
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                  borderBottom: "1px solid #A97900",
                  paddingBottom: "20px",
                  gap: "60px",
                }}
              >
                <div
                  style={{
                    width: "260px",
                    height: "80px",
                    border: "1px solid #A97900",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "40px",
                      fontWeight: "400",
                      textAlign: "center",
                      marginTop: "-5px",
                    }}
                  >
                    499{" "}
                    <span>
                      <img
                        src={TL}
                        height={"26px"}
                        width={"19px"}
                        style={{ margin: "-25px 0 0 -5px" }}
                        alt=""
                      />
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      textAlign: "center",
                      marginTop: "-15px",
                    }}
                  >
                    Aylık Abonelik / KDV Dahil
                  </p>
                </div>
                <div
                  style={{
                    width: "260px",
                    height: "80px",
                    border: "1px solid #A97900",
                    borderRadius: "10px",
                    background: "#00242E",
                    color: "white",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <div>
                    <p
                      style={{
                        width: "260px",
                        fontSize: "40px",
                        fontWeight: "400",
                        textAlign: "center",
                        marginTop: "-5px",
                      }}
                    >
                      4499{" "}
                      <span>
                        <svg
                          style={{ margin: "-20px 0 0 -5px" }}
                          width="19"
                          height="26"
                          viewBox="0 0 19 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.03473 0C5.96248 0 6.71203 0.742471 6.71203 1.66147V3.49429L12.96 1.72378C13.851 1.46937 14.7788 1.98338 15.0356 2.86604C15.2925 3.7487 14.7735 4.6677 13.8825 4.92212L6.71203 6.95223V8.47871L12.96 6.7082C13.851 6.45379 14.7788 6.9678 15.0356 7.85046C15.2925 8.73312 14.7735 9.65212 13.8825 9.90654L6.71203 11.9366V22.6771H10.0561C13.6309 22.6771 15.4445 20.351 15.6227 16.8152L15.6436 16.3998C15.6908 15.4808 16.477 14.7799 17.4048 14.8214C18.3326 14.8629 19.0402 15.6469 18.9982 16.5659L18.9773 16.9813C18.7099 22.2876 15.4183 26 10.0561 26H5.03473C4.10697 26 3.35743 25.2575 3.35743 24.3385V12.8816L2.14139 13.2243C1.25033 13.4787 0.322572 12.9647 0.0657357 12.082C-0.1911 11.1994 0.327814 10.2804 1.21888 10.026L3.35743 9.42886V7.89719L2.14139 8.23987C1.25033 8.49428 0.322572 7.98027 0.0657357 7.09761C-0.1911 6.21495 0.327814 5.29595 1.21888 5.04153L3.35743 4.44444V1.66147C3.35743 0.742471 4.10697 0 5.03473 0Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        textAlign: "center",
                        marginTop: "-15px",
                      }}
                    >
                      Aylık Abonelik / KDV Dahil
                    </p>
                  </div>
                  <div
                    style={{
                      top: "-52px",
                      right: "52px",
                      position: "relative",
                    }}
                  >
                    <svg
                      width="101"
                      height="101"
                      viewBox="0 0 101 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.063 15.0631H85.9407V85.9408H15.063V15.0631Z"
                        fill="#A97900"
                      />
                      <path
                        d="M15.063 15.0631H85.9407V85.9408H15.063V15.0631Z"
                        fill="#A97900"
                      />
                      <path
                        d="M50.5019 0.383789L100.62 50.5019L50.5019 100.62L0.383789 50.5019L50.5019 0.383789Z"
                        fill="#A97900"
                      />
                      <path
                        d="M50.5019 0.383789L100.62 50.5019L50.5019 100.62L0.383789 50.5019L50.5019 0.383789Z"
                        fill="#A97900"
                      />
                    </svg>
                    <p
                      style={{
                        width: "79px",
                        height: "54px", // Değer burada değiştirildi
                        fontSize: "30px",
                        fontWeight: "800",
                        color: "white",
                        position: "absolute",
                        top: "30px",
                        left: "18px",
                        lineHeight: "22px",
                      }}
                    >
                      %30 <br />{" "}
                      <span style={{ fontSize: "15px" }}>İndirimli</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex" >
              <div >
                <div style={{ width: "450px", height: "80px", margin: "0px" }}>
                  <label className="lawyerdashboard-registerLabel" style={{ width: "199px", height: "24px", fontSize: "20px" }} htmlFor="">
                    Kart numarası
                  </label>
                  <input
                    className="lawyerdashboard-registerFormControl"
                    style={{ width: "450px", height: "60px", paddingLeft: "20px", borderRadius: "10px", background: "#ebebeb", fontSize: "20px" }}
                    type="password"
                    value={cardNumber}
                    placeholder="•••• •••• •••• ••••"
                    onChange={handleCardNumberChange}

                  />
                </div>

                <div style={{ width: "450px", height: "94px", marginTop: "45px" }}>
                  <label className="lawyerdashboard-registerLabel" style={{ width: "199px", height: "24px", fontSize: "20px" }} htmlFor="">
                    Kart Üzerindeki İsim
                  </label>
                  <input
                    className="lawyerdashboard-registerFormControl"
                    style={{ width: "450px", height: "60px", paddingLeft: "20px", borderRadius: "10px", background: "#ebebeb", fontSize: "20px" }}
                    type="text"
                    value={cardHolderName}
                    placeholder="Kart sahibinin adı ve soyadı"
                    onChange={handleCardHolderNameChange}

                  />
                </div>
                <div style={{ width: "450px", height: "80px", marginTop: "45px" }}>
                  <div className="d-flex">
                    <div style={{ width: "220px", height: "94px" }}>
                      <label className="lawyerdashboard-registerLabel" style={{ width: "199px", height: "24px", fontSize: "20px" }} htmlFor="">
                        Son kullanma tarihi
                      </label>
                      <input
                        className="lawyerdashboard-registerFormControl"
                        style={{ width: "220px", height: "60px", paddingLeft: "20px", borderRadius: "10px", background: "#ebebeb", fontSize: "20px" }}
                        type="text"
                        value={formatExpirationDate(expirationDate)}
                        placeholder="Ay / Yıl"
                        onChange={handleExpirationDateChange}
                      />

                    </div>
                    <div style={{ width: "220px", height: "94px", marginLeft: "10px" }}>
                      <label className="lawyerdashboard-registerLabel" style={{ width: "183px", height: "24px", fontSize: "20px" }} htmlFor="">
                        Güvenlik Kodu
                      </label>
                      <input
                        className="lawyerdashboard-registerFormControl"
                        style={{ width: "220px", height: "60px", paddingLeft: "20px", background: "#ebebeb", fontSize: "20px" }}
                        type="text"
                        value={cvc}
                        placeholder="CVC / CVV"
                        onChange={handleCvcChange}

                      />
                    </div>

                  </div>
                  <div className="d-flex align-items-center" style={{ marginTop: "50px" }}>
                    <input
                      style={{ width: "24px", height: "24px", borderRadius: "8px" }}
                      type="checkbox"
                      aria-label="Radio button for following text input"
                      onClick={() => setInfoText(!infoText)}
                    />
                    <label style={{ fontSize: "14px", marginLeft: "10px" }} htmlFor="">
                      <span style={{ color: "#A97900" }}>Ön bilgilendirme formunu</span> ve <span style={{ color: "#A97900" }}>Mesafeli satış sözleşmesini</span> onaylıyorum.
                    </label>

                  </div>
                  <div className="d-flex align-items-center" style={{ marginTop: "10px" }}>
                    <input
                      style={{ width: "24px", height: "24px", borderRadius: "8px" }}
                      type="checkbox"
                      aria-label="Radio button for following text input"
                      onClick={() => setInfoText(!infoText)}
                    />
                    <label style={{ fontSize: "14px", marginLeft: "10px" }} htmlFor="">
                      Kart bilgilerimin Mastercard altyapısıyla kaydedilmesini onaylıyorum.
                    </label>

                  </div>
                </div>
              </div>
              <div style={{ margin: "auto", marginLeft: "185px" }}>
                <div style={{ width: "400px", height: "250px", borderRadius: "10px", color: "#FFFFFF", marginTop: "50px", border: "0.1px solid white", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)", blur: "%20" }}>
                  <div style={{ color: "black", marginTop: "140px", marginLeft: "35px", fontSize: "20px" }}>{cardNumber || "0000 0000 0000 0000"}</div>
                  <div style={{ color: "black", marginLeft: "35px", fontSize: "20px" }}>{cardHolderName || "Kart Sahibi"}</div>
                  <div style={{ color: "black", marginLeft: "35px", fontSize: "20px" }}>{expirationDate || "AA/YY"}</div>

                </div>

                <img src={logo} alt="" width={260} height={51} style={{ marginTop: "28px", marginLeft: "70px" }} />
                <div style={{ borderBottom: "2px solid #A97900", marginTop: "60px" }}></div>
                <div className="d-flex justify-content-between" style={{ marginTop: "10px" }}>
                  <p style={{ fontSize: "24px" }}>ÖDENECEK TUTAR :</p>
                  <p style={{ fontSize: "24px" }}>4.449 TL</p>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button style={{ width: "150px", height: "50px", marginTop: "5px", background: "#A97900", color: "white", fontSize: "20px", borderRadius: "10px" }} width="150px" height="50px"> SATIN AL</button>
                </div>

              </div>

            </div>





          </Container>
        </div>
      )}
    </>
  );
};

export default Ucretlendirme2;
