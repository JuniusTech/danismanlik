import React, { useState } from "react";
import logo from "../assets/logo.svg";
import LawyerRegister from "../pages/LawyerRegister";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import LawyerLogin from "../pages/LawyerLogin";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div>
            <img src={logo} alt="logo" style={{ height: "50px" }} />
          </div>

          <div className="d-flex text-black align-items-center">
            <button
              className="ms-2 btn btn-outline-light"
              style={{ backgroundColor: "#A97900" }}
            >
              Avukat misiniz?
            </button>
            <button
              onClick={() => setShow(true)}
              className="ms-2 btn btn-outline-black"
              style={{ border: "1px solid black" }}
            >
              KAYIT OL
            </button>
            <button
              onClick={() => setShow2(true)}
              className="ms-2 btn btn-outline-black"
              style={{ border: "1px solid black" }}
            >
              GiRiS YAP
            </button>
          </div>
        </div>
        <LawyerRegister
          show={show}
          handleClose={handleClose}
          onHide={() => setShow(false)}
        />
        <LawyerLogin
          show={show2}
          handleClose={handleClose2}
          onHide={() => setShow2(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;
