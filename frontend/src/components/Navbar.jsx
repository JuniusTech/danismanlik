import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import LawyerRegister from "../pages/LawyerRegister";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import LawyerLogin from "../pages/LawyerLogin";
import { Dropdown, Navbar as NB, Container, Nav } from "react-bootstrap";
import { Store } from "../Store";
import { removeCookie } from "../cookies";
import { toast } from "react-toastify";
import ButtonMainColor from "./Buttons/ButtonMainColor";
import ButtonWhiteColor from "./Buttons/ButtonWhiteColor";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLawyerRegister, setShowLawyerRegister] = useState(false);
  const [showLawyerLogin, setShowLawyerLogin] = useState(false);
  const [showUserRegister, setShowUserRegister] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const { state, dispatch, setIsLawyer } = useContext(Store);
  const { userInfo, lawyerInfo, is_lawyer } = state;
  const navigate = useNavigate();
  const userSignOut = () => {
    dispatch({ type: "USER_SIGNOUT" });
    // localStorage.removeItem("userInfo");
    toast.success("Çıkış Yaptınız.");
    // removeCookie("jwt");
    navigate("/");
  };
  const lawyerSignOut = () => {
    dispatch({ type: "LAWYER_SIGNOUT" });
    // localStorage.removeItem("lawyerInfo");
    toast.success("Çıkış Yaptınız.");
    // setIsLawyer(false);
    console.log(is_lawyer);
    // removeCookie("jwt");
    navigate("/");
  };
  const lawyer = () => {
    setIsLawyer(true);
  };
  const user = () => {
    setIsLawyer(false);
  };

  return (
    <>
      <NB expand="lg" bg="light" variant="light">
        <Container>
          <NB.Brand onClick={() => navigate("/")}>
            <img src={logo} alt="logo" style={{ height: "50px" }} />
          </NB.Brand>
          <NB.Toggle aria-controls="responsive-navbar-nav" />
          <NB.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {!userInfo && !lawyerInfo && (
                <>
                  {is_lawyer ? (
                    <div className="d-flex">
                      <ButtonMainColor onClick={() => user()}>
                        Avukat arıyorum.
                      </ButtonMainColor>
                      <ButtonWhiteColor
                        onClick={() => setShowLawyerRegister(true)}
                      >
                        KAYIT OL
                      </ButtonWhiteColor>
                      <ButtonWhiteColor
                        onClick={() => setShowLawyerLogin(true)}
                      >
                        GİRİŞ YAP
                      </ButtonWhiteColor>
                    </div>
                  ) : (
                    <div className="d-flex">
                      <ButtonMainColor onClick={() => lawyer()}>
                        Avukat misiniz?
                      </ButtonMainColor>
                      <ButtonWhiteColor
                        onClick={() => setShowUserRegister(true)}
                      >
                        KAYIT OL
                      </ButtonWhiteColor>
                      <ButtonWhiteColor onClick={() => setShowUserLogin(true)}>
                        GİRİŞ YAP
                      </ButtonWhiteColor>
                    </div>
                  )}
                </>
              )}
              {userInfo && (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="bg-light shadow-5 text-dark m-2 border-0 "
                    >
                      {userInfo.name.toUpperCase()}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href=""
                        onClick={() => navigate("/userdashboard")}
                      >
                        Profilim
                      </Dropdown.Item>
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
                      {lawyerInfo.name.toUpperCase()}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        href=""
                        onClick={() => navigate("/lawyerdashboard")}
                      >
                        Profilim
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => lawyerSignOut()}>
                        Çıkış Yap
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Nav>
          </NB.Collapse>
        </Container>
      </NB>
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
    </>
  );
};

export default Navbar;
