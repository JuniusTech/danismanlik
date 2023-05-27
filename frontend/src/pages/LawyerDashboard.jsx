import React, { useState } from "react";
import photo from "../assets/photo.svg"
import "../css/lawyerdashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LawyerPersonalDetails from "../components/LawyerDashboard/LawyerPersonalDetails";
import LawyerDates from "../components/LawyerDashboard/LawyerDates";
import LawyerAccountSettings from "../components/LawyerDashboard/LawyerAccountSettings";
import LawyerPaymentSetting from "../components/LawyerDashboard/LawyerPaymentSetting";
import HelpAndSupport from "../components/LawyerDashboard/HelpAndSupport";
import image from "../assets/avatar.jpg"


const LawyerDashboard = () => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ["Randevularım", "Kişisel Bilgiler", "Hesap Ayarları", "Ödeme Ayarları", "Yardım ve Destek"]
    const showComponent = (item) => {
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
        else return < LawyerPersonalDetails />;
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
                            {/* //! Bu kısım  userInfo.image varsa olarak değişecek. */}
                            <img width="30rem" src={userInfo.surname ?
                                image
                                :
                                photo
                            } alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center m-auto">
                        {userInfo.name} {userInfo.surname}
                    </div>
                    <div className="border-bottom"></div>
                    <div className="m-4 ">
                        <h1><b>Hesabım </b> </h1>

                        <ul>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => onItemClick(item)}
                                    style={{ fontWeight: selectedItem === item ? "bold" : "normal", listStyle: "none" }}
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