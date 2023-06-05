import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import eye from "../../assets/eye.svg"
import { Navigate, useNavigate } from "react-router-dom";
import LawyerRegister from "../../pages/LawyerRegister";
import data from "./data/data.json"


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
            .get(data.json)
            .then((response) => {
                setBranches(data.name);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(data)
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
                            className="lawyerdashboard-registerFormControl"
                            value={lawyerInfo.name}
                        />
                        <label className="registerLabel" htmlFor="">
                            Soyad
                        </label>
                        <input
                            className="lawyerdashboard-registerFormControl"
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
                            className="lawyerdashboard-registerFormControl"
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
                                style={{ width: "52px", height: "40px" }}
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
                                className="lawyerdashboard-registerFormControl-phone"
                                type="text"
                                value={phoneNo}
                                placeholder=""
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>


                        <br />

                    </div>
                </div>
                <div className="d-flex row" style={{ width: "578px" }}>
                    <label htmlFor="">
                        Büro Adresi
                    </label>

                    <textarea
                        style={{ width: "570px", height: "40px", fontSize: "17px", borderRadius: "5px", opacity: "1", resize: "none", padding: "10 411 10 10" }}
                        className="mx-3 "
                        name="comment"
                        placeholder="Tam adres belirtiniz"
                        id=""
                        resiz


                    ></textarea>
                </div>
                <div className="d-flex">
                    <div>
                        <label className="registerLabel" htmlFor="">
                            İl
                        </label>
                        <select
                            className="lawyerdashboard-registerFormControl"
                            value={data.name}
                            name="il"
                            onChange={handleIlChange}
                            title="İl Seçiniz"
                            id="navbarScrollingDropdown"
                        >
                            <option defaultValue="all">İl Seçiniz</option>
                            {data
                                ?.map((il, index) => (
                                    <option key={index} value={index}>
                                        {il.name}
                                    </option>
                                ))}
                        </select>
                        <label className="registerLabel" htmlFor="">
                            Mahalle
                        </label>
                        <select className="lawyerdashboard-registerFormControl"
                            id="mahalle"
                            value={data.name}
                            onChange={handleMahalleChange}
                            name="mahalle"
                            title="Mahalle Seçiniz"
                        >
                            <option defaultValue="all">Mahalle Seçiniz</option>
                            {data.find(il => il.name === seciliIl)?.towns.find(t => t.name === seciliIlce)?.districts
                                .flatMap(mahalle => mahalle.quarters)
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((quarter, index) => (
                                    <option value={index} key={index}>{quarter.name}</option>

                                ))}
                        </select>
                    </div>
                    <div>
                        <label className="registerLabel" htmlFor="">
                            İlçe
                        </label>
                        {(
                            <div>

                                <select className="lawyerdashboard-registerFormControl"
                                    id="ilce"
                                    value={data.name}
                                    onChange={handleIlceChange}
                                    name="ilçe"
                                    title="İl Seçiniz"

                                >
                                    <option value="">İlçe Seçiniz</option>
                                    {data.find(i => i.name === seciliIl)?.towns.map((ilce, index) => (
                                        <option value={index} key={index}>{ilce.name}</option>
                                    ))}
                                </select>

                            </div>)

                        }
                        <label className="registerLabel" htmlFor="">
                            Posta Kodu
                        </label>
                        <input
                            type="text"
                            className="lawyerdashboard-registerFormControl"
                            placeholder="Posta Kodu"
                        />


                    </div>


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