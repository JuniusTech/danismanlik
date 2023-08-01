import React, { useContext, useState } from "react";
import axios from "axios";
import photo from "../assets/photo.svg";
import "../css/lawyerdashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LawyerPersonalDetails from "../components/LawyerDashboard/LawyerPersonalDetails";
import LawyerDates from "../components/LawyerDashboard/LawyerDates";
import LawyerAccountSettings from "../components/LawyerDashboard/LawyerAccountSettings";
import LawyerPaymentSetting from "../components/LawyerDashboard/LawyerPaymentSetting";
import HelpAndSupport from "../components/LawyerDashboard/HelpAndSupport";
import image from "../assets/avatar.jpg";
import LawyerDatesDetail from "../components/LawyerDashboard/LawyerDatesDetail";
import LoadingBox from "../components/LoadingBox";
import { toast } from "react-toastify";
import { getError } from "../getError";
import Form from "react-bootstrap/Form";
import { Store } from "../Store";

function LawyerDashboard() {
  const { state } = useContext(Store);
  const { lawyerInfo } = state;
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const items = [
    "Randevularım",
    "Kişisel Bilgiler",
    "Hesap Ayarları",
    "Ödeme Ayarları",
    "Yardım ve Destek",
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const showComponent = (item) => {
    if (item === "Randevularım") {
      return <LawyerDates handleDateClick={handleDateClick} />;
    } else if (item === "Kişisel Bilgiler") {
      return <LawyerPersonalDetails />;
    } else if (item === "Hesap Ayarları") {
      return <LawyerAccountSettings />;
    } else if (item === "Ödeme Ayarları") {
      return <LawyerPaymentSetting />;
    } else if (item === "Yardım ve Destek") {
      return <HelpAndSupport />;
    } else return <LawyerPersonalDetails picture={picture} />;
  };

  const handleDateClick = (date, index) => {
    setSelectedRow(index);
    setSelectedDate(date);
    setShowDates(true);
    setSelectedItem("Randevularım");
  };

  const [showDates, setShowDates] = useState(false);
  const [picture, setPicture] = useState("");
  const showDatesDetails = (item) => {
    if (item === "Randevularım") {
      setShowDates(true);
    } else {
      setShowDates(false);
    }
  };

  const onItemClick = (item) => {
    setSelectedItem(item);
    setShowDates(false);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/upload`,

        bodyFormData,
        {
          headers: { Authorization: `Bearer ${lawyerInfo.token}` },
        }
      );
      lawyerInfo.picture = data.secure_url;
      setPicture(data.secure_url);
      toast.success("Resminiz Güncellendi.");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const savePicture = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`,
        {
          picture,
        },
        {
          headers: { Authorization: `Bearer ${lawyerInfo.token}` },
        }
      );
      setLoading(false);
      toast.success("Resminiz Kaydedildi.");
    } catch (error) {
      toast.error(getError(error));
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="lawyerdashbord-container">
          <div className="lawyerdashbord-leftcard">
            <div className="d-flex justify-content-center ">
              <div className="lawyerdashboard-photo">

                <img
                  width="100px"
                  height="90px"
                  className=" rounded-circle"
                  src={lawyerInfo.picture ? lawyerInfo.picture : image}
                  alt=""
                />

              </div>
            </div>

            <Form.Group className="mb-5 fs-5" controlId="imageFile">
              <Form.Control type="file" onChange={uploadFileHandler} />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="lawyerdashboard-button-kaydet "
                onClick={savePicture}

              >
                {loading ? (
                  <>
                    <LoadingBox />
                  </>
                ) : (
                  "Kaydet"
                )}
              </button>
            </div>

            <div
              className="d-flex justify-content-center m-auto"
              style={{ width: "82px", fontSize: "14px" }}
            >
              {lawyerInfo.name} {lawyerInfo.surname}
            </div>
            <div className="border-bottom"></div>
            <div className="m-4 ">
              <ul>
                <li style={{ listStyle: "none", marginBottom: "20px" }}>
                  <b style={{ fontSize: "20px" }}>Hesabım </b>{" "}
                </li>
                {items.map((item, index) => (
                  <li
                    className="leftbox-li"
                    key={index}
                    onClick={() => onItemClick(item)}
                    style={{
                      fontWeight: selectedItem === item ? "bold" : "normal",
                      listStyle: "none",
                      marginBottom: "20px",
                      fontSize: "16px",
                    }}
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
          </div>
        </div>

        <div className="lawyerdashbord-datedetail-container">
          {showDates && selectedItem === "Randevularım" && (
            <LawyerDatesDetail date={selectedDate} />
          )}
        </div>
      </div >
      <Footer />
    </>
  );
}

export default LawyerDashboard;
