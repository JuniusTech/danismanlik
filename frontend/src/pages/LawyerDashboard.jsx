import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { getError } from "../getError";

import photo from "../assets/photo.svg"


import "../css/lawyerdashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import LawyerPersonalDetails from "../components/LawyerDashboard/LawyerPersonalDetails";
import LawyerDates from "../components/LawyerDashboard/LawyerDates";
import LawyerAccountSettings from "../components/LawyerDashboard/LawyerAccountSettings";
import LawyerPaymentSetting from "../components/LawyerDashboard/LawyerPaymentSetting";
import HelpAndSupport from "../components/LawyerDashboard/HelpAndSupport";


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
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ["Randevularım", "Kişisel Bilgiler", "Hesap Ayarları", "Ödeme Ayarları", "Yardım ve Destek"]
    const showComponent = (item) => {
        // Burada, tıklanan maddenin ismine göre ilgili componenti çağırabilirsin
        console.log("Tıklanan madde: " + item);
        // Örneğin:
        if (item === "Randevularım") {
            return <LawyerDates />
        } else if (item === "Kişisel Bilgiler") {
            return <LawyerPersonalDetails />;
        } else if (item === "Hesap Ayarları") {
            return <LawyerAccountSettings />
        } else if (item === "Ödeme Ayarları") {
            return <LawyerPaymentSetting />
        } else if (item === "Yardım ve Destek") {
            return <HelpAndSupport />
        }
    };

    const onItemClick = (item) => {
        setSelectedItem(item);

    };
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
                        <h1><b>Hesabım </b> </h1>

                        <ul>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => onItemClick(item)}
                                    style={{ fontWeight: selectedItem === item ? "bold" : "normal" }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="search-left-border"></div>
                <div className="w-75">
                    {showComponent(selectedItem)}


                </div >
            </div >
            <Footer />
        </>
    );
}

export default LawyerDashboard