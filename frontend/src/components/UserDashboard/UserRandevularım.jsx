import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../getError";

const UserRandevularım = ({ handleDateClick, index }) => {
  const [userDates, setUserDates] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/users/${userInfo?._id}`, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      })
      .then((response) => {
        setUserDates(response.data.dates);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const getDisplayedDates = () => {
    const startIndex = (currentPage - 1) * 15;
    const endIndex = startIndex + 15;
    return userDates.slice(startIndex, endIndex);
  };
  return (
    // <div>
    // // <div style={{ padding: "20px", color: " #00242E", width: "750px" }}>
    // //   <p
    // //     style={{
    // //       font: "normal normal bold 20px/24px SF Pro Text",
    // //     }}
    // //   >
    // //     Randevularım
    // //   </p>
    // //   <table style={{ width: "95%", marginTop: "25px" }}>
    // //     <thead>
    // //       <tr
    // //         style={{
    // //           font: " normal normal bold 16px/19px SF Pro Text",
    // //           height: "25px",
    // //         }}
    // //       >
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Avukat Adı
    // //         </th>
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Branş{" "}
    // //         </th>
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Tarih
    // //         </th>
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Yer
    // //         </th>
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Referans No
    // //         </th>
    // //         <th style={{ border: "1px solid #A97900", opacity: "0.75" }}>
    // //           Durum
    // //         </th>
    // //       </tr>
    // //     </thead>
    // //     <tbody style={{ font: "normal small normal 14px/16px SF Pro Text" }}>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Boşanma Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#82B0FF 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Planlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           İcra Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#F0D07A 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İnceleniyor
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Vergi Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#71E18C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",

    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Tamamlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           AğırCeza Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#FF9C9C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İptal Edildi
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Boşanma Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#82B0FF 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Planlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           İcra Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#F0D07A 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İnceleniyor
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Vergi Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#71E18C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",

    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Tamamlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           AğırCeza Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#FF9C9C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İptal Edildi
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Boşanma Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#82B0FF 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Planlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           İcra Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#F0D07A 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İnceleniyor
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Vergi Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Online
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#71E18C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",

    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             Tamamlandı
    // //           </button>
    // //         </td>
    // //       </tr>
    // //       <tr
    // //         style={{
    // //           borderBottom: "1px solid #A97900",
    // //           paddingTop: "10px",
    // //           paddingBottom: "10px",
    // //           font: "normal normal normal 14px/16px SF Pro Text",
    // //         }}
    // //       >
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Onur KILIÇ
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           AğırCeza Avukatı
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           27.04.2023
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           Büroda
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           6789FGRT23
    // //         </td>
    // //         <td
    // //           style={{
    // //             paddingTop: "7px",
    // //             paddingBottom: "7px",
    // //           }}
    // //         >
    // //           <button
    // //             style={{
    // //               background: "#FF9C9C 0% 0% no-repeat padding-box",
    // //               borderRadius: "9px",
    // //               font: "normal normal normal 14px/16px SF Pro Text",
    // //               padding: "2px 9px",
    // //               color: "#FFFFFF",
    // //             }}
    // //           >
    // //             İptal Edildi
    // //           </button>
    // //         </td>
    // //       </tr>
    // //     </tbody>
    // //   </table>
    // // </div>
    // </div>
    <div style={{ padding: "20px", color: " #00242E" }}>
      <p
        style={{
          font: "normal normal bold 20px/24px SF Pro Text",
        }}
      >
        Randevularım
      </p>
      <table style={{ width: "100%", marginTop: "25px" }}>
        <thead>
          <tr
            style={{
              font: " normal normal bold 16px/19px SF Pro Text",
              height: "25px",
            }}
          >
            <th
              style={{
                border: "1px solid #A97900",
                width: "148px",
                height: "33px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Avukat Adı
            </th>
            <th
              style={{
                border: "1px solid #A97900",
                width: "145px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Konu{" "}
            </th>
            <th
              style={{
                border: "1px solid #A97900",
                width: "103px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Tarih
            </th>
            <th
              style={{
                border: "1px solid #A97900",
                width: "86px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Yer
            </th>
            <th
              style={{
                border: "1px solid #A97900",
                width: "145px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Referans No
            </th>
            <th
              style={{
                border: "1px solid #A97900",
                width: "131px",
                opacity: "0.75",
                paddingLeft: "7px",
              }}
            >
              Durum
            </th>
          </tr>
        </thead>
        <tbody style={{ font: "normal small normal 14px/16px SF Pro Text" }}>
          {getDisplayedDates().map((item, index) => (
            <tr
              key={item._id}
              onClick={() => handleDateClick(item, index)}
              style={{
                borderBottom: "1px solid #A97900",
                paddingTop: "10px",
                paddingBottom: "10px",
                font: "normal normal normal 14px/16px SF Pro Text",
                backgroundColor:
                  selectedRow === index ? "#a97900" : "transparent",
              }}
            >
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {item.lawyername}
              </td>
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {item.branch}
              </td>
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {item.day}
              </td>
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {item.hour}
              </td>
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                {item._id}
              </td>
              <td
                style={{
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
              >
                <button
                  style={{
                    background: "#82B0FF 0% 0% no-repeat padding-box",
                    borderRadius: "9px",
                    font: "normal normal normal 14px/16px SF Pro Text",
                    padding: "2px 9px",
                    color: "#FFFFFF",
                    marginLeft: "5px",
                  }}
                >
                  Planlandı
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}
      >
        {Array(Math.ceil(userDates.length / 15))
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              style={{
                border: currentPage === i + 1 ? "none" : "1px solid #00242E",
                background: currentPage === i + 1 ? "#a97900" : "",
                borderRadius: "14px",
                font: "normal normal normal 16px SF Pro Text",
                padding: "2px 6px",
                color: currentPage === i + 1 ? "#FFFFFF" : "#00242e",
                marginRight: "5px",
              }}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default UserRandevularım;
