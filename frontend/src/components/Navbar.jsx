import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import LawyerRegister from "../pages/LawyerRegister";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import LawyerLogin from "../pages/LawyerLogin";
import { Dropdown } from "react-bootstrap";
import { Store } from "../Store";
import { removeCookie } from "../cookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLawyerRegister, setShowLawyerRegister] = useState(false);
  const [showLawyerLogin, setShowLawyerLogin] = useState(false);
  const [showUserRegister, setShowUserRegister] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { userInfo, lawyerInfo } = state;
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const userSignOut = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    toast.success("Çıkış Yaptınız.");
    removeCookie("jwt");
  };
  const lawyerSignOut = () => {
    dispatch({ type: "LAWYER_SIGNOUT" });
    localStorage.removeItem("lawyerInfo");
    toast.success("Çıkış Yaptınız.");
    removeCookie("jwt");
  };
  const lawyer = () => {
    navigate("/lawyer");
    setToggle(true);
  };
  const user = () => {
    navigate("/");
    setToggle(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div>
            <img src={logo} alt="logo" style={{ height: "50px" }} />
          </div>

          <div className="d-flex text-black align-items-center">
            {!userInfo && !lawyerInfo && (
              <>
                {toggle ? (
                  <button
                    className="ms-2 btn btn-outline-light"
                    style={{ backgroundColor: "#A97900" }}
                    onClick={() => user()}
                  >
                    Avukat arıyorum.
                  </button>
                ) : (
                  <button
                    className="ms-2 btn btn-outline-light"
                    style={{ backgroundColor: "#A97900" }}
                    onClick={() => lawyer()}
                  >
                    Avukat misiniz?
                  </button>
                )}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="bg-light shadow-5 text-dark m-2 border-0 "
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
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-light shadow-5 text-dark border-0 "
                    variant="success"
                    id="dropdown-basic"
                  >
                    GİRİŞ YAP
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setShowLawyerLogin(true)}
                      href=""
                    >
                      Avukatım
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setShowUserLogin(true)}
                      href=""
                    >
                      Avukat arıyorum
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
            {userInfo && (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="bg-light shadow-5 text-dark m-2 border-0 "
                  >
                    {userInfo.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="">Profilim</Dropdown.Item>
                    <Dropdown.Item onClick={() => userSignOut()}>
                      Çıkış Yap
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
            {lawyerInfo && (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="bg-light shadow-5 text-dark m-2 border-0 "
                  >
                    {lawyerInfo.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="">Profilim</Dropdown.Item>
                    <Dropdown.Item onClick={() => lawyerSignOut()}>
                      Çıkış Yap
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
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
