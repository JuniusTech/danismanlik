import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";
import { getError } from "../../getError";
import { toast } from "react-toastify";

const LawyerDates = ({ handleDateClick, index }) => {
  const [lawyerDates, setLawyerDates] = useState([]);
  const { state } = useContext(Store);
  const { lawyerInfo } = state;
  const selectedRow = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const getDisplayedDates = () => {
    const startIndex = (currentPage - 1) * 15;
    const endIndex = startIndex + 15;
    return lawyerDates.slice(startIndex, endIndex);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`)
      .then((response) => {
        setLawyerDates(response.data.dates);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, []);

  return (
    <div style={{ padding: "20px", color: " #00242E" }}>
      <p
        style={{
          font: "normal normal bold 20px/24px SF Pro Text",
        }}
      >
        Randevularım
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "640px",
        }}
      >
        <div>
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
                  Müvekkil Adı
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
                  Saat
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
            <tbody
              style={{ font: "normal small normal 14px/16px SF Pro Text" }}
            >
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
                      selectedRow === index ? "#e9ddbf" : "transparent",
                    cursor: "pointer",
                  }}
                >
                  <td
                    style={{
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      paddingLeft: "10px",
                    }}
                  >
                    {(item.userId?.name + " " + item.userId?.surname)} {console.log(item)}
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
                      paddingLeft: "10px",
                    }}
                  >
                    {item.day}
                  </td>
                  <td
                    style={{
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      paddingLeft: "10px",
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
                      paddingLeft: "15px",
                    }}
                  >
                    {item.status === "planned" && (
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
                    )}
                    {item.status === "cancelled" && (
                      <button
                        style={{
                          background: "red",
                          borderRadius: "9px",
                          font: "normal normal normal 14px/16px SF Pro Text",
                          padding: "2px 9px",
                          color: "#FFFFFF",
                          marginLeft: "5px",
                        }}
                      >
                        İptal Edildi
                      </button>
                    )}
                    {item.status === "completed" && (
                      <button
                        style={{
                          background: "green",
                          borderRadius: "9px",
                          font: "normal normal normal 14px/16px SF Pro Text",
                          padding: "2px 9px",
                          color: "#FFFFFF",
                          marginLeft: "5px",
                        }}
                      >
                        Tamamlandı
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          {Array(Math.ceil(lawyerDates.length / 15))
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
    </div>
  );
};
export default LawyerDates;
