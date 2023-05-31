import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import eye from "../../assets/eye.svg"
import { Navigate, useNavigate } from "react-router-dom";
import LawyerRegister from "../../pages/LawyerRegister";


const LawyerPersonalDetails = ({
    show,
    setShowLawyerLogin,

}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneRegion, setPhoneRegion] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const phone = `${phoneRegion} + ${phoneNo}`;
    const [branch, setBranch] = useState("");
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [showLawyerRegister, setShowLawyerRegister] = useState(false);


    const handleLogin = () => {
        setShowLawyerLogin(true);

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
        setLoading(true);
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/signup`,
                {
                    email,
                    password,
                    branch,
                    phone,
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
    const lawyerInfo = JSON.parse(localStorage.getItem('lawyerInfo'));
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigateRegister = () => {

        navigate("/api/lawyers/signup")
    }


    return (

        <div>
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
                            value={lawyerInfo.name}
                        />
                        <label className="registerLabel" htmlFor="">
                            Soyad
                        </label>
                        <input
                            className="registerFormControl"
                            type="text"
                            value={lawyerInfo.surname}
                        />
                    </div>
                    <div className="col">
                        <label className="registerLabel" htmlFor="">
                            E-posta {" "}
                            <button style={{ color: "#a97900", margin: "auto", backgroundColor: "transparent", border: "none", cursor: "pointer" }} onClick={() => setShowLawyerRegister(true)}>
                                {" "}
                                (E-posta değiştir)
                            </button>
                        </label>
                        <input
                            className="registerFormControl"
                            type="email"
                            value={email}
                            placeholder={lawyerInfo.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="registerLabel" htmlFor="">
                            Tel. Numarası <button style={{ color: "#a97900", margin: "auto", backgroundColor: "transparent", border: "none", cursor: "pointer" }} onClick={() => setShowLawyerRegister(true)}>
                                {" "}
                                (Numara değiştir)
                            </button>
                        </label>
                        <div className="registerTelDiv d-flex ">
                            <select
                                className="egisterFormControl"
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
                                className="egisterFormControl"
                                type="text"
                                value={phoneNo}
                                placeholder=""
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>


                        <br />

                    </div>
                </div>
                <div className="d-flex row" style={{ width: "508px" }}>
                    <label htmlFor="">
                        Büro Adresi
                    </label>

                    <textarea
                        className="mx-3 "
                        name="comment"
                        placeholder="Lütfen adresinizi giriniz"
                        id=""
                        cols="45"
                        rows="1"

                    ></textarea>
                </div>


                <br />
                <br />
                <div className="lawyerdashboard-buttons">
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

                    <button
                        style={{ color: "#a97900", margin: "auto", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
                        onClick={() => handleLogin()}
                    >
                        Avukat Hesabımı Sil
                    </button>
                </p>

            </form>
            <LawyerRegister
                setShowLawyerRegister={setShowLawyerRegister}
                setShowLawyerLogin={setShowLawyerLogin}
                show={showLawyerRegister}
                onHide={() => setShowLawyerRegister(false)}
            />

        </div>
    )
}

export default LawyerPersonalDetails