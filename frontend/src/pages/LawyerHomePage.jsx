import React from "react";
import ladyJustice from "../assets/Lady Justice.png";
import "../css/NasilCalisir.css";

const LawyerHomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          padding: "100px  140px 0 140px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "1175",
            height: "680px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            paddingLeft: "140px",
          }}
        >
          <p
            style={{
              fontFamily: "Segoe UI",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "64px",
              lineHeight: "85px",
              width: "890px",
              height: "85px",
            }}
          >
            500.000+ Müvekkil Seni Bekliyor!
          </p>
          <p
            style={{
              width: "527px",
              height: "43px",
              fontFamily: "Segoe UI",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "32px",
              lineHeight: "43px",
            }}
          >
            Dava sürecini planla ve kolayca takip et.
          </p>
          <button
            style={{
              width: "180px",
              height: "50px",
              background: "#A97900",
              borderRadius: "5px",
              border: "none",
              fontFamily: "Segoe UI",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "43px",
              color: "#FFFFFF",
            }}
          >
            Kayıt Ol
          </button>
        </div>

        <div style={{ margin: "38px", position: "relative", display: "flex" }}>
          <div
            style={{
              width: "605px",
              height: "605px",
              border: "1px solid #A97900",
              borderRadius: "50%",
            }}
          ></div>
          <img
            src={ladyJustice}
            width={"490px"}
            height={"680px"}
            style={{
              position: "absolute",
              marginLeft: "58px",
              marginTop: "5px",
            }}
            alt=""
          />
        </div>
      </div>
      <div
        className="nasilCalisir"
        style={{
          margin: "0 140px 100px 140px",
          width: "1640px",
          background: "#00242E",
          borderRadius: "15px",
        }}
      >
        <p className="nasilCalisirBaslik">Avukatımol, Nasıl Çalışıyor?</p>
        <div className="nasilCalisirContainer">
          <div
            style={{
              padding: "1rem",
              border: "1px solid #FFFFFF",
              borderRadius: "12px",
            }}
          >
            <div
              className="nasilCalisirFirstDiv"
              style={{ background: "#FFFFFF", borderRadius: "12px" }}
            >
              <div
                className="nasilCalisirFirstDivP"
                style={{ marginTop: "-3rem" }}
              >
                <p>3</p>
              </div>
              <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                <div className="ucgen"></div>
                <h1 className="mt-4">
                  Randevu <br /> Oluşturmak <br /> Ücretsizdir
                </h1>
                <h3>
                  Avukatımol'da randevu oluşturmak tamamen ücretsizdir. (Danışma
                  ücretlerini öğrenmek için avukatınıza başvurun)
                </h3>
                <svg
                  className="nasilCalisirsvg3 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                  fill="currentColor"
                >
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M641.9,10.6H622.6l-22,22.8a5.191,5.191,0,0,0,0,7.3h0l15,15a5.823,5.823,0,0,0,3.5,1.5,6.41,6.41,0,0,0,3.8-1.5l22.8-21.8V14.5ZM627.3,40.2a7.386,7.386,0,0,1-5.5,2.1H619V34.4l-3.4,1.4V33.6l3.4-1.4V30.3l-3.4,1.4V29.5l3.4-1.4V21.7h2.4v5.5l4.9-2v2.2l-4.9,2v1.9l4.9-2v2.2l-4.9,1.9v6.7h.5a5.046,5.046,0,0,0,3.8-1.5,6.163,6.163,0,0,0,1.6-4.2h2.4A8.838,8.838,0,0,1,627.3,40.2Zm13.5-19.7a3.974,3.974,0,0,1-2.6,2.6,4.027,4.027,0,0,1-4.9-2.6,3.9,3.9,0,0,1,2.6-4.9,4.027,4.027,0,0,1,4.9,2.6A4.479,4.479,0,0,1,640.8,20.5Z"
                    transform="translate(-599.1 -10.6)"
                    fill="#00242e"
                    opacity="0.75"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              border: "1px solid #FFFFFF",
              borderRadius: "12px",
            }}
          >
            <div
              className="nasilCalisirFirstDiv"
              style={{ background: "#FFFFFF", borderRadius: "12px" }}
            >
              <div
                className="nasilCalisirFirstDivP"
                style={{ marginTop: "-3rem" }}
              >
                <p>3</p>
              </div>
              <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                <div className="ucgen"></div>
                <h1 className="mt-4">
                  Randevu <br /> Oluşturmak <br /> Ücretsizdir
                </h1>
                <h3>
                  Avukatımol'da randevu oluşturmak tamamen ücretsizdir. (Danışma
                  ücretlerini öğrenmek için avukatınıza başvurun)
                </h3>
                <svg
                  className="nasilCalisirsvg3 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                  fill="currentColor"
                >
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M641.9,10.6H622.6l-22,22.8a5.191,5.191,0,0,0,0,7.3h0l15,15a5.823,5.823,0,0,0,3.5,1.5,6.41,6.41,0,0,0,3.8-1.5l22.8-21.8V14.5ZM627.3,40.2a7.386,7.386,0,0,1-5.5,2.1H619V34.4l-3.4,1.4V33.6l3.4-1.4V30.3l-3.4,1.4V29.5l3.4-1.4V21.7h2.4v5.5l4.9-2v2.2l-4.9,2v1.9l4.9-2v2.2l-4.9,1.9v6.7h.5a5.046,5.046,0,0,0,3.8-1.5,6.163,6.163,0,0,0,1.6-4.2h2.4A8.838,8.838,0,0,1,627.3,40.2Zm13.5-19.7a3.974,3.974,0,0,1-2.6,2.6,4.027,4.027,0,0,1-4.9-2.6,3.9,3.9,0,0,1,2.6-4.9,4.027,4.027,0,0,1,4.9,2.6A4.479,4.479,0,0,1,640.8,20.5Z"
                    transform="translate(-599.1 -10.6)"
                    fill="#00242e"
                    opacity="0.75"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              border: "1px solid #FFFFFF",
              borderRadius: "12px",
            }}
          >
            <div
              className="nasilCalisirFirstDiv"
              style={{ background: "#FFFFFF", borderRadius: "12px" }}
            >
              <div
                className="nasilCalisirFirstDivP"
                style={{ marginTop: "-3rem" }}
              >
                <p>3</p>
              </div>
              <div className="nasilCalisirh1" style={{ boxShadow: "none" }}>
                <div className="ucgen"></div>
                <h1 className="mt-4">
                  Randevu <br /> Oluşturmak <br /> Ücretsizdir
                </h1>
                <h3>
                  Avukatımol'da randevu oluşturmak tamamen ücretsizdir. (Danışma
                  ücretlerini öğrenmek için avukatınıza başvurun)
                </h3>
                <svg
                  className="nasilCalisirsvg3 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                  fill="currentColor"
                >
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M641.9,10.6H622.6l-22,22.8a5.191,5.191,0,0,0,0,7.3h0l15,15a5.823,5.823,0,0,0,3.5,1.5,6.41,6.41,0,0,0,3.8-1.5l22.8-21.8V14.5ZM627.3,40.2a7.386,7.386,0,0,1-5.5,2.1H619V34.4l-3.4,1.4V33.6l3.4-1.4V30.3l-3.4,1.4V29.5l3.4-1.4V21.7h2.4v5.5l4.9-2v2.2l-4.9,2v1.9l4.9-2v2.2l-4.9,1.9v6.7h.5a5.046,5.046,0,0,0,3.8-1.5,6.163,6.163,0,0,0,1.6-4.2h2.4A8.838,8.838,0,0,1,627.3,40.2Zm13.5-19.7a3.974,3.974,0,0,1-2.6,2.6,4.027,4.027,0,0,1-4.9-2.6,3.9,3.9,0,0,1,2.6-4.9,4.027,4.027,0,0,1,4.9,2.6A4.479,4.479,0,0,1,640.8,20.5Z"
                    transform="translate(-599.1 -10.6)"
                    fill="#00242e"
                    opacity="0.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default LawyerHomePage;
