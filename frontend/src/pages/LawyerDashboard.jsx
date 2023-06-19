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
import LawyerDatesDetail from "../components/LawyerDashboard/LawyerDatesDetail";


const LawyerDashboard = () => {

    const lawyerInfo = JSON.parse(localStorage.getItem('lawyerInfo'));
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ["Randevularım", "Kişisel Bilgiler", "Hesap Ayarları", "Ödeme Ayarları", "Yardım ve Destek"]
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null)
    const showComponent = (item) => {
        if (item === "Randevularım") {
            return <LawyerDates handleDateClick={handleDateClick} />;
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

    const handleDateClick = (date, index) => {
        setSelectedRow(index);
        setSelectedDate(date);
    };

    const [showDates, setShowDates] = useState(false);
    const showDatesDetails = (item) => {
        if (item === "Randevularım") {
            setShowDates(true);
        } else {
            setShowDates(false);
        }
    };

    const onItemClick = (item) => {
        setSelectedItem(item);
        showDatesDetails(item)
    };
    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center" >
                <div className="lawyerdashbord-container" >
                    <div className="lawyerdashbord-leftcard">
                        <div className="d-flex justify-content-center ">
                            <div className="lawyerdashboard-photo">
                                {/* //! Bu kısım  lawyerInfo.image varsa olarak değişecek. */}
                                <img width="23.69px" height="21.63px" src={lawyerInfo.surname ?
                                    image
                                    :
                                    photo
                                } alt="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-auto" style={{ width: "82px", fontSize: "14px" }} >
                            {lawyerInfo.name} {lawyerInfo.surname}
                        </div>
                        <div className="border-bottom"></div>
                        <div className="m-4 ">

                            <ul>
                                <li style={{ listStyle: "none", marginBottom: "20px" }}><b style={{ fontSize: "20px" }}>Hesabım </b> </li>
                                {items.map((item, index) => (
                                    <li className="leftbox-li"
                                        key={index}
                                        onClick={() => onItemClick(item)}
                                        style={{ fontWeight: selectedItem === item ? "bold" : "normal", listStyle: "none", marginBottom: "20px", fontSize: "16px" }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="search-left-border"></div>
                    <div className="lawyerdashbord-rightcard">
                        {showComponent(selectedItem)}


                    </div >
                </div >


                <div className="lawyerdashbord-datedetail-container">
                    {showDates && selectedItem === "Randevularım" && (
                        <LawyerDatesDetail date={selectedDate} />
                    )}
                </div >
            </div>
            <Footer />
        </>
    );
}


export default LawyerDashboard