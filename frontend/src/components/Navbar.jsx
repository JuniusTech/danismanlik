import React, { useState } from "react";
import logo from "../assets/logo.svg";
import LawyerRegister from "../pages/LawyerRegister";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import LawyerLogin from "../pages/LawyerLogin";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const [showLawyerRegister, setShowLawyerRegister] = useState(false);

  /*  Lawyer login */
  const [showLawyerLogin, setShowLawyerLogin] = useState(false);

  /*  User register */
  const [showUserRegister, setShowUserRegister] = useState(false);

  /*  Lawyer register */
  const [showUserLogin, setShowUserLogin] = useState(false);

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
            {/* <button
              onClick={() => setShow(true)}
              className="ms-2 btn btn-outline-black"
              style={{ border: "1px solid black" }}
            >
              KAYIT OL
            </button> */}
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                className="bg-light shadow-5 text-dark m-2 "
              >
                KAYIT OL
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setShowLawyerRegister(true)}
                  href=""
                >
                  Avukatım
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setShowUserRegister(true)}
                  href=""
                >
                  Avukat arıyorum
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <button
              onClick={() => setShow2(true)}
              className="ms-2 btn btn-outline-black"
              style={{ border: "1px solid black" }}
            >
              GiRiS YAP
            </button> */}
            <Dropdown>
              <Dropdown.Toggle
                className="bg-light shadow-5 text-dark "
                variant="success"
                id="dropdown-basic"
              >
                GİRİŞ YAP
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowLawyerLogin(true)} href="">
                  Avukatım
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setShowUserLogin(true)} href="">
                  Avukat arıyorum
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <LawyerRegister
          setShowLawyerRegister={setShowLawyerRegister}
          setShowLawyerLogin={setShowLawyerLogin}
          show={showLawyerRegister}
          onHide={() => setShowLawyerRegister(false)}
        />
        <LawyerLogin
          setShowLawyerLogin={setShowLawyerLogin}
          setShowLawyerRegister={setShowLawyerRegister}
          show={showLawyerLogin}
          onHide={() => setShowLawyerLogin(false)}
        />
        <UserRegister
          setShowUserRegister={setShowUserRegister}
          setShowUserLogin={setShowUserLogin}
          show={showUserRegister}
          onHide={() => setShowUserRegister(false)}
        />
        <UserLogin
          setShowUserRegister={setShowUserRegister}
          setShowUserLogin={setShowUserLogin}
          show={showUserLogin}
          onHide={() => setShowUserLogin(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;
