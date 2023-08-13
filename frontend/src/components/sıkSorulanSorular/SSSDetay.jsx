import React, { useState } from "react";

import SSSGenel from "./SSSGenel";

const SıkSorulanSorularDetay = ({ info, info2, info3 }) => {
  // console.log(info);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [back, setBack] = useState("");

  const handleBack = () => {
    setIsButtonClicked(true);
  };

  return (
    <>
      {isButtonClicked ? (
        <SSSGenel />
      ) : (
        <div>
          <p
            style={{
              color: "#A97900",
              fontSize: "16px",
              fontWeight: "500",
              margin: "70px 113px",
            }}
            onClick={handleBack}
          >
            <span>
              <svg
                style={{ marginTop: "-3px", marginRight: "13px" }}
                width="9"
                height="13"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00115207 7.95016C0.0118629 7.6234 0.141316 7.31209 0.365138 7.07533L6.719 0.409904C7.04716 0.0660302 7.53247 -0.0752919 7.99213 0.0388782C8.45178 0.153066 8.81615 0.505681 8.94781 0.963753C9.07929 1.42181 8.95834 1.91576 8.63017 2.25965L3.16132 8.00001L8.63017 13.7404C8.95833 14.0842 9.07929 14.5782 8.94781 15.0363C8.81614 15.4943 8.45179 15.8467 7.99213 15.9611C7.53248 16.0753 7.04718 15.9338 6.71899 15.5901L0.365138 8.92469C0.117494 8.66284 -0.013806 8.31095 0.00115207 7.94978L0.00115207 7.95016Z"
                  fill="#A97900"
                />
              </svg>
            </span>
            {info3 === "#first" && <span>AVUKAT/ SIKÇA SORULAN SORULAR</span>}
            {info3 !== "#first" && (
              <span>MÜVEKKİL / SIKÇA SORULAN SORULAR</span>
            )}

            <span>
              <svg
                style={{ marginTop: "-3px", margin: "0 13px" }}
                width="9"
                height="13"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00115207 7.95016C0.0118629 7.6234 0.141316 7.31209 0.365138 7.07533L6.719 0.409904C7.04716 0.0660302 7.53247 -0.0752919 7.99213 0.0388782C8.45178 0.153066 8.81615 0.505681 8.94781 0.963753C9.07929 1.42181 8.95834 1.91576 8.63017 2.25965L3.16132 8.00001L8.63017 13.7404C8.95833 14.0842 9.07929 14.5782 8.94781 15.0363C8.81614 15.4943 8.45179 15.8467 7.99213 15.9611C7.53248 16.0753 7.04718 15.9338 6.71899 15.5901L0.365138 8.92469C0.117494 8.66284 -0.013806 8.31095 0.00115207 7.94978L0.00115207 7.95016Z"
                  fill="#A97900"
                />
              </svg>
            </span>
            {info2}
          </p>
          <div
            style={{
              width: "1300px",
              height: "1090px",
              margin: "40px 110px",
              border: "1px solid #00242E",
              borderRadius: "20px",
            }}
          >
            <p
              style={{
                margin: "50px 0 70px 40px",
                color: "#A97900",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              {info2}
            </p>
            <div
              style={{
                margin: "0 40px",
                height: "650px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "366px",
                  borderRight: "1px solid #A97900",
                  height: "650px",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#A97900",
                  }}
                >
                  Bu Bölümdeki Makaleler
                </p>
                <p
                  style={{
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                    width: "280px",
                  }}
                >
                  {" "}
                  Hesabımı nasıl dondurabilirim?
                </p>
                <hr style={{ marginRight: "85px", color: "#A97900" }} />
                <p
                  style={{
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                    width: "280px",
                  }}
                >
                  {" "}
                  Hesabımı dondurursam aynı bilgilerle yeni bir hesap açabilir
                  miyim?
                </p>
                <hr style={{ marginRight: "85px", color: "#A97900" }} />
                <p
                  style={{
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                    width: "280px",
                  }}
                >
                  {" "}
                  Hesabımı nasıl silebilirim?
                </p>
                <hr style={{ marginRight: "85px", color: "#A97900" }} />
                <p
                  style={{
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                    width: "280px",
                  }}
                >
                  {" "}
                  Hesabımı dondurursam bilgilerime daha sonra ulaşabilir miyim?
                </p>
                <hr style={{ marginRight: "85px", color: "#A97900" }} />
                <p
                  style={{
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                    width: "280px",
                  }}
                >
                  {" "}
                  Hesap dondurmanın bir süresi var mı?
                </p>
                <hr style={{ marginRight: "85px", color: "#A97900" }} />
                <p
                  style={{
                    width: "280px",
                    color: "#00242E",
                    fontSize: "16px",
                    fontWeight: "300",
                    margin: "33px 0",
                  }}
                >
                  {" "}
                  Hesabımı silersem aynı hesabı daha sonra yeniden açabilir
                  miyim?
                </p>
              </div>
              <div
                style={{
                  paddingLeft: "70px",
                  color: "#00242E",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: "300",
                    width: "650px",
                  }}
                >
                  {info}
                </p>
                <p
                  style={{
                    marginTop: "100px",
                    width: "740px",
                    fontSize: "24px",
                    fontWeight: "300",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore eos ipsa architecto aut repellendus dolores id
                  similique corporis eveniet, veniam, ea ducimus, aliquid iste
                  minima et a ab voluptatum cumque dolore omnis rem aperiam sit
                  aspernatur! At, quis temporibus laboriosam cum, nemo rerum
                  dolores qui laudantium ad illo officiis eligendi veniam
                  expedita esse molestias asperiores.
                </p>
                <p
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "22px",
                    fontWeight: "300",
                  }}
                >
                  {" "}
                  Hesabını dondurmak istersen linke tıklayabilirsin:{" "}
                  <span
                    style={{
                      color: "#A97900",
                      fontSize: "22px",
                      fontWeight: "300",
                    }}
                  >
                    Hesabımı nasıl dondurabilirim?
                  </span>
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "300",
                color: "#A97900",
                textAlign: "center",
                marginTop: "110px",
              }}
            >
              {" "}
              Bu makale size yardımcı oldu mu?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                paddingTop: "20px",
              }}
            >
              <button
                style={{
                  width: "120px",
                  height: "50px",
                  display: "flex",
                  border: "1px solid #A97900",
                  borderRadius: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 22.7499C13.9173 22.7499 16.7154 21.591 18.7781 19.5281C20.841 17.4651 21.9999 14.6673 21.9999 11.75C21.9999 8.83269 20.841 6.03454 18.7781 3.97183C16.7151 1.90899 13.9173 0.75 11 0.75C8.08269 0.75 5.28454 1.90899 3.22183 3.97183C1.15899 6.03484 0 8.83269 0 11.75C0 14.6673 1.15899 17.4654 3.22183 19.5281C5.28484 21.591 8.08269 22.7499 11 22.7499ZM5.29011 12.0399C5.47745 11.8538 5.7309 11.7491 5.99507 11.7491C6.25941 11.7491 6.5127 11.8538 6.7002 12.0399L9.00009 14.34L14.7901 8.55C15.0476 8.32952 15.3991 8.25452 15.7241 8.35062C16.0492 8.44671 16.3033 8.70101 16.3994 9.02596C16.4957 9.35107 16.4205 9.70263 16.2 9.96012L9.69989 16.4603L9.70006 16.4601C9.51256 16.6464 9.25927 16.7509 8.99493 16.7509C8.73075 16.7509 8.4773 16.6464 8.28997 16.4601L5.28997 13.4601C5.10063 13.2724 4.99416 13.0168 4.99416 12.7501C4.99416 12.4836 5.10063 12.2279 5.28997 12.0401L5.29011 12.0399Z"
                    fill="#00242E"
                  />
                </svg>
                <p
                  style={{
                    marginTop: "7px",
                    marginLeft: "8px",
                    fontSize: "24px",
                    fontWeight: "300",
                  }}
                >
                  Evet
                </p>
              </button>
              <button
                style={{
                  width: "120px",
                  height: "50px",
                  display: "flex",
                  border: "1px solid #A97900",
                  borderRadius: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9996 0.75C5.71161 0.75 0.599609 5.862 0.599609 12.15C0.599609 18.438 5.71161 23.55 11.9996 23.55C18.2876 23.55 23.3996 18.438 23.3996 12.15C23.3996 5.862 18.2876 0.75 11.9996 0.75ZM17.2316 16.158L16.0077 17.382L11.9997 13.374L7.99165 17.382L6.76769 16.158L10.7757 12.15L6.76769 8.142L7.99165 6.91804L11.9997 10.926L16.0077 6.91804L17.2316 8.142L13.2236 12.15L17.2316 16.158Z"
                    fill="#00242E"
                  />
                </svg>
                <p
                  style={{
                    marginTop: "7px",
                    marginLeft: "8px",
                    fontSize: "24px",
                    fontWeight: "300",
                  }}
                >
                  Hayır
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SıkSorulanSorularDetay;
