import React from "react";

const hesapDoğrulamaEkranı = () => {
  // const yenidenGönder=()=>{
  //   try {
  //     const { data } = await axios.post(
  //       `${process.env.REACT_APP_BASE_URI}/api/law-password-reset`,
  //       {
  //         email,
  //       }
  //     );
  //     setLoading(false);
  //     toast.success(data.message);
  //     navigate("/");
  //   } catch (err) {
  //     toast.error(getError(err));
  //     setLoading(false);
  //   }
  // }

  const moveToNextInput = (event, inputNumber) => {
    const input = event.target;
    const maxLength = parseInt(input.getAttribute("maxLength"));

    if (input.value.length >= maxLength) {
      const nextInput = document.getElementById(`input${inputNumber + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div
      style={{
        width: "630px",
        height: "400px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        margin: "130px auto",
        color: "#00242E",
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      <p
        style={{
          fontFamily: "SF Pro Text",
          fontStyle: "normal",
          fontWeight: 800,
          fontSize: "16px",
          lineHeight: "19px",
        }}
      >
        Hesabınızı Doğrulayın
      </p>
      <p
        style={{
          fontFamily: "'SF Pro Text'",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "19px",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      >
        xxxxxx@gmail.com adresinize gönderilen altı haneli doğrulama kodunu
        giriniz.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input1"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 1)}
          />
        </div>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input2"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 2)}
          />
        </div>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input3"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 3)}
          />
        </div>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input4"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 4)}
          />
        </div>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input5"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 5)}
          />
        </div>
        <div
          style={{
            padding: "5px",
            width: "60px",
            height: "80px",
            background: "#FFFFFF",
            border: "1px solid rgba(169, 121, 0, 0.5)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="input6"
            maxLength="1"
            style={{
              border: "none",
              width: "40px",
              height: "50px",
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onInput={(e) => moveToNextInput(e, 6)}
          />
        </div>
      </div>
      <button
        style={{
          color: "#F5F5F5",
          width: "240px",
          height: "40px",
          background: "#A97900",
          fontSize: "20px",
          fontWeight: "600",
          border: "none",
          borderRadius: "7px",
          marginTop: "30px",
        }}
      >
        Doğrula
      </button>
      <hr
        style={{
          margin: "30px auto",
          width: "240px",
          border: "1px solid #000000",
        }}
      />
      <p
        style={{
          fontFamily: "SF Pro Text",
          fontSize: "17px",
          lineHeight: "19px",
          letterSpacing: "0px",
          color: "#00242E",
          fontWeight: "600",
        }}
      >
        Doğrulama kodunu almadınız mı?
      </p>
      <p
        style={{
          fontFamily: "SF Pro Text",
          fontSize: "16px",
          lineHeight: "19px",
          letterSpacing: "0px",
          color: "#A97900",
          fontWeight: "600",
        }}
      >
        Tekrar Gönder
      </p>
    </div>
  );
};

export default hesapDoğrulamaEkranı;
