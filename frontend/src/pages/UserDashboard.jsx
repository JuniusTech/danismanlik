import React, { useContext, useState } from "react";
import photo from "../assets/photo.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserRandevularım from "../components/UserDashboard/UserRandevularım";
import UserKişiselBilgiler from "../components/UserDashboard/UserPersonalDetail";
import FavouriteLawyers from "../components/UserDashboard/FavouriteLawyers";
import { Store } from "../Store";

const UserDashboard = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ["Randevularım", "Kişisel Bilgiler", "Favori Avukatlarım"];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const showComponent = (item) => {
    if (item === "Randevularım") {
      return <UserRandevularım handleDateClick={handleDateClick} />;
    } else if (item === "Kişisel Bilgiler") {
      return <UserKişiselBilgiler />;
    } else if (item === "Favori Avukatlarım") {
      return <FavouriteLawyers />;
    } else return <UserKişiselBilgiler />;
  };

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDateClick = (date, index) => {
    setSelectedRow(index);
    setSelectedDate(date);
  };
  return (
    <>
      <Navbar />
      <div
        className="d-flex border border-warning m-auto lawyerdashbord-container mb-5 rounded-3"
        style={{ height: "fit-content", width: "1034px" }}
      >
        <div className="lawyerdashbord-leftcard">
          <div className="d-flex justify-content-center ">
            <div className="lawyerdashboard-photo">
              {/* //! Bu kısım  userInfo.image varsa olarak değişecek. */}
              <img src={photo} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-center m-auto">
            {userInfo?.name} {userInfo?.surname}
          </div>
          <div className="border-bottom"></div>
          <div className="m-4 ">
            <h1>
              <b>Hesabım </b>{" "}
            </h1>

            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => onItemClick(item)}
                  style={{
                    fontWeight: selectedItem === item ? "bold" : "normal",
                    listStyle: "none",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </li>
              ))}
              <li style={{ listStyle: "none" }}>
                <a
                  href="/sıksorulansorular"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Yardım ve Sorular
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-left-border"></div>
        <div className="lawyerdashbord-rightcard">
          {showComponent(selectedItem)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
