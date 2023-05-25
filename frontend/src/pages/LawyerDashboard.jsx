import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { getError } from "../getError";
import LoadingBox from "../components/LoadingBox";
import photo from "../assets/photo.svg"
import eye from "../assets/eye.svg"

import "../css/lawyerdashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonMainColor from "../components/Buttons/ButtonMainColor";
import ButtonWhiteColor from "../components/Buttons/ButtonWhiteColor";

const LawyerDashboard = ({
    show,
    setShowLawyerLogin,
    setShowLawyerRegister,
}) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [barNo, setBarNo] = useState("");
    const [phoneRegion, setPhoneRegion] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const phone = `${phoneRegion} + ${phoneNo}`;
    const [branch, setBranch] = useState("");
    const [branches, setBranches] = useState([]);
    const [password2, setPassword2] = useState("");
    const [infoText, setInfoText] = useState(false);
    const [memberAg, setMemberAg] = useState(false);
    const [perData, setPerData] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleLogin = () => {
        setShowLawyerLogin(true);
        setShowLawyerRegister(false);
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/api/branchs`)
            .then((response) => {
                setBranches(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error("Şifre eşleşmiyor");
            return;
        }
        setLoading(true);
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/signup`,
                {
                    name,
                    surname,
                    email,
                    password,
                    barNo,
                    branch,
                    phone,
                    infoText,
                    memberAg,
                    perData,
                }
            );
            setLoading(false);
            toast.success("Emailinize doğrulama linki gönderildi.");
            setShowLawyerRegister(false);
        } catch (error) {
            toast.error(getError(error));
            setLoading(false);
        }
    };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <>
            <Navbar />
            <div className="d-flex border border-warning w-50 m-auto mb-5 rounded-3">
                <div className="w-25">
                    <div className="d-flex justify-content-center ">
                        <div className="lawyerdashboard-photo">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center m-auto">
                        {userInfo.name}
                    </div>
                    <div className="border-bottom"></div>
                    <div className="m-4 ">
                        <h2>Hesabım</h2>

                        <h3>Randevularım</h3>
                        <h3>Kişisel Bilgiler</h3>
                        <h3>Hesap Ayarları</h3>
                        <h3>Ödeme Ayarları</h3>
                        <h3>Yardım ve Destek</h3>
                    </div>

                </div>
                <div className="search-left-border"></div>
                <div className="w-75">
                    <div className="registerBaslık">
                        <h1>Kişisel Bilgiler</h1>
                    </div>
                    <form className="lawyerRegisterFormDiv" onSubmit={submitHandler}>
                        <div className="row" id="registerRowDiv">
                            <div className="col">
                                <label className="registerLabel" htmlFor="">
                                    Ad
                                </label>
                                <input
                                    type="text"
                                    className="registerFormControl"
                                    value={name}
                                    placeholder={userInfo.name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="registerLabel" htmlFor="">
                                    Soyad
                                </label>
                                <input
                                    className="registerFormControl"
                                    type="text"
                                    value={surname}
                                    placeholder={userInfo.surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                                <label className="registerLabel" htmlFor="">
                                    Baro Sicil Numarası
                                </label>
                                <input
                                    className="registerFormControl"
                                    type="text"
                                    placeholder={userInfo._id}
                                    value={barNo}
                                    onChange={(e) => setBarNo(e.target.value)}
                                />
                                <label className="registerLabel" htmlFor="">
                                    Branş
                                </label>

                                <select
                                    className="registerBranchSelect"
                                    value={branch}
                                    name="branch"
                                    onChange={(e) => setBranch(e.target.value)}
                                    title="Branş Seç"
                                    id="navbarScrollingDropdown"
                                >
                                    <option defaultValue="all">Branş Seç</option>
                                    {branches
                                        ?.sort((a, b) => a.title.localeCompare(b.title))
                                        .map((item) => (
                                            <option key={item._id} value={item.title}>
                                                {item.title}
                                            </option>
                                        ))}
                                </select>

                            </div>
                            <div className="col">
                                <label className="registerLabel" htmlFor="">
                                    E-posta {" "}
                                    <span style={{ color: "#a97900" }} onClick={() => handleLogin()}>
                                        {" "}
                                        (E-posta değiştir)
                                    </span>
                                </label>
                                <input
                                    className="registerFormControl"
                                    type="email"
                                    value={email}
                                    placeholder={userInfo.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="registerLabel" htmlFor="">
                                    Şifre <span style={{ color: "#a97900" }} onClick={() => handleLogin()}>
                                        {" "}
                                        (Şifre değiştir)
                                    </span>
                                </label>
                                <input
                                    className="registerFormControl"
                                    type="password"
                                    value={password}
                                    placeholder="Şifre"
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <label className="registerLabel" htmlFor="">
                                    Tel. Numarası <span style={{ color: "#a97900" }} onClick={() => handleLogin()}>
                                        {" "}
                                        (Numara değiştir)
                                    </span>
                                </label>
                                <div className="registerTelDiv d-flex ">
                                    <select
                                        className="registerSelect"
                                        value={phoneRegion}
                                        id="inputGroupSelect02"
                                        onChange={(e) => setPhoneRegion(e.target.value)}
                                    >
                                        <option selected>+90</option>
                                        <option value="1">+91</option>
                                        <option value="2">+92</option>
                                        <option value="3">+93</option>
                                    </select>
                                    <input
                                        className="registerFormControl"
                                        type="text"
                                        value={phoneNo}
                                        placeholder=""
                                        onChange={(e) => setPhoneNo(e.target.value)}
                                    />
                                </div><br />
                                <div className="d-flex justify-content-start align-items-center">
                                    <div className="d-flex justify-content-start align-items-center star mt-3">
                                        <i className="fa-solid fa-circle-plus fa-xl mx-3  "></i>  <p className="pt-1">Branş Ekle</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div className="registerButtons">
                            <button
                                className="lawyerdashboard-button-vazgec"
                                onClick={() => setShowLawyerRegister()}
                            >
                                Vazgeç
                            </button>
                            <button className="lawyerdashboard-button-kaydet" type="submit">
                                {loading ? (
                                    <>
                                        <LoadingBox />
                                    </>
                                ) : (
                                    "Kaydet"
                                )}
                            </button>
                        </div>
                        <br />
                        <br />
                        <p className="d-flex justify-conter">

                            <span style={{ color: "#a97900", margin: "auto" }} onClick={() => handleLogin()}>
                                {" "}
                                Avukat Hesabımı Sil
                            </span>
                        </p>

                    </form>
                </div >
            </div >
            <Footer />
        </>
    );
}

export default LawyerDashboard