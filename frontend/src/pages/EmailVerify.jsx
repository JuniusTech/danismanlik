import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ladyJustice from "../assets/Lady Justice.png";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "700px",
          height: "420px",
          border: "1px solid #A97900",
          margin: "50px auto",
          borderRadius: "10px",
        }}
      >
        <svg
          style={{ margin: "20px 270px" }}
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.9999 128.75C89.5863 128.75 103.577 122.955 113.891 112.641C124.205 102.326 130 88.3363 130 73.7499C130 59.1634 124.205 45.1727 113.891 34.8591C103.576 24.5449 89.5863 18.75 74.9999 18.75C60.4134 18.75 46.4227 24.5449 36.1091 34.8591C25.7949 45.1742 20 59.1634 20 73.7499C20 88.3363 25.7949 102.327 36.1091 112.641C46.4242 122.955 60.4134 128.75 74.9999 128.75ZM46.4506 75.1997C47.3872 74.2689 48.6545 73.7457 49.9754 73.7457C51.2971 73.7457 52.5635 74.2689 53.501 75.1997L65.0004 86.7L93.9504 57.75C95.2378 56.6476 96.9957 56.2726 98.6204 56.7531C100.246 57.2336 101.517 58.505 101.997 60.1298C102.478 61.7553 102.103 63.5132 101 64.8006L68.4994 97.3013L68.5003 97.3005C67.5628 98.2321 66.2963 98.7544 64.9746 98.7544C63.6538 98.7544 62.3865 98.2321 61.4498 97.3005L46.4498 82.3005C45.5031 81.3621 44.9708 80.0839 44.9708 78.7506C44.9708 77.418 45.5032 76.1397 46.4498 75.2007L46.4506 75.1997Z"
            fill="#A97900"
          />
        </svg>
        <p style={{ fontSize: "36px", fontWeight: "500", textAlign: "center" }}>
          E-mailiniz doğrulandı{" "}
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#A97900",
            color: "white",
            border: "none",
            borderRadius: "10px",
            width: "150px",
            height: "50px",
            margin: "75px 270px",
          }}
        >
          ANASAYFA
        </button>
      </div>
      <div
        style={{
          width: "274px",
          height: "311px",
          position: "relative",
          display: "flex",
          //   marginTop: "46px",
          margin: "40px auto 0",
        }}
      >
        <div
          style={{
            width: "274px",
            height: "274px",
            border: "1px solid #A97900",
            borderRadius: "50%",
          }}
        ></div>
        <img
          src={ladyJustice}
          width={"200px"}
          height={"310px"}
          style={{
            position: "absolute",
            marginLeft: "40px",
            marginTop: "1px",
          }}
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};

export default EmailVerify;
