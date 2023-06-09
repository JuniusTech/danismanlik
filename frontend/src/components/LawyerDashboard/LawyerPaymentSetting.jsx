import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import eye from "../../assets/eye.svg"
import { Navigate, useNavigate } from "react-router-dom";
import LawyerRegister from "../../pages/LawyerRegister";
import data from "./data/data.json"

const LawyerPaymentSetting = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneRegion, setPhoneRegion] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const phone = `${phoneRegion} + ${phoneNo}`;
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showLawyerRegister, setShowLawyerRegister] = useState(false);




    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/signup`,
                {
                    email,
                    password,
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

    const [seciliIl, setSeciliIl] = useState("");
    const [seciliIlce, setSeciliIlce] = useState("");
    const [seciliMahalle, setSeciliMahalle] = useState("");

    const handleIlChange = (e) => {
        const ilIndex = e.target.value;
        setSeciliIl(data[ilIndex].name);
        setSeciliIlce("İlçe Seçiniz");
        setSeciliMahalle("");
        console.log(seciliIl)
    };

    const handleIlceChange = (e) => {
        const ilceIndex = e.target.value;
        setSeciliIlce(data.find(il => il.name === seciliIl).towns[ilceIndex].name);
        setSeciliMahalle("");
    };

    const handleMahalleChange = (e) => {
        const mahalleIndex = e.target.value;
        setSeciliMahalle(data.find(il => il.name === seciliIl).towns.find(t => t.name === seciliIlce).districts[mahalleIndex]);
    };
    return (
        <div>
            <div className="lawyerdashboardregisterBaslık">
                <h1 style={{ width: "180px" }}>Ödeme Ayarları</h1>
            </div>
            <form className="lawyerRegisterFormDiv" style={{ width: "375px" }} onSubmit={submitHandler}>
                <div className="row" id="registerRowDiv" style={{ width: "345px" }}>

                    <div className="col" style={{ width: "345px" }}>
                        <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                            <label className="lawyerdashboard-registerLabel" style={{ width: "105px" }} htmlFor="">
                                Üyelik Planım {" "}
                            </label>
                            <label className="lawyerdashboard-registerLabel" style={{ color: "#a97900", width: "125px" }} >

                                (E-posta değiştir)
                            </label>
                        </div>
                        <input
                            className="lawyerdashboard-registerFormControl"
                            style={{ width: "129px", paddingLeft: "28px" }}
                            type="email"
                            value={email}
                            placeholder="STANDART"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                            <label className="lawyerdashboard-registerLabel" style={{ width: "90px" }} htmlFor="">
                                Fatura Özeti
                            </label>
                            <label className="lawyerdashboard-registerLabel" style={{ color: "#a97900", width: "130px" }} >

                                (Detayları Gör)
                            </label>
                        </div>
                        <div className="registerTelDiv d-flex " style={{ width: "345px" }}>

                            <input
                                className="lawyerdashboard-registerFormControl"
                                style={{ width: "341px" }}
                                type="text"
                                value={phoneNo}
                                placeholder=""
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                            <label className="lawyerdashboard-registerLabel" style={{ width: "190px" }} htmlFor="">
                                Kart Üzerindeki İsim
                            </label>

                        </div>
                        <div className="registerTelDiv d-flex " style={{ width: "345px" }}>

                            <input
                                className="lawyerdashboard-registerFormControl"
                                style={{ width: "341px", paddingLeft: "28px" }}
                                type="text"
                                value={phoneNo}
                                placeholder="Kart Üzerindeki İsim"
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                            <label className="lawyerdashboard-registerLabel" style={{ width: "190px" }} htmlFor="">
                                Kart Numarası
                            </label>

                        </div>
                        <div className="registerTelDiv d-flex " style={{ width: "345px  " }}>

                            <input
                                className="lawyerdashboard-registerFormControl"
                                style={{ width: "341px", paddingLeft: "28px" }}
                                type="text"
                                value={phoneNo}
                                placeholder="1234 1234 1234 1234"
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>

                        <br />

                    </div>
                </div>


                <br />
                <br />
                <div className="lawyerdashboard-buttons" style={{ width: "345px" }}>

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


            </form>

        </div>
    )
}

export default LawyerPaymentSetting