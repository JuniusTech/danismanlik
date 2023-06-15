import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LawyerDates = () => {
    const [lawyerDates, setLawyerDates] = useState([])
    const lawyerInfo = JSON.parse(localStorage.getItem('lawyerInfo'));


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`)
            .then((response) => {
                console.log(response.data.dates)
                setLawyerDates(response.data.dates);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(setLawyerDates)
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
            <table style={{ width: "100%", marginTop: "25px" }}>
                <thead>
                    <tr
                        style={{
                            font: " normal normal bold 16px/19px SF Pro Text",
                            height: "25px"

                        }}
                    >
                        <th style={{ border: "1px solid #A97900", width: "148px", height: "33px", opacity: "0.75", paddingLeft: "7px" }}>
                            Müvekkil Adı
                        </th>
                        <th style={{ border: "1px solid #A97900", width: "145px", opacity: "0.75", paddingLeft: "7px" }}>
                            Konu{" "}
                        </th>
                        <th style={{ border: "1px solid #A97900", width: "103px", opacity: "0.75", paddingLeft: "7px" }}>
                            Tarih
                        </th>
                        <th style={{ border: "1px solid #A97900", width: "86px", opacity: "0.75", paddingLeft: "7px" }}>
                            Yer
                        </th>
                        <th style={{ border: "1px solid #A97900", width: "145px", opacity: "0.75", paddingLeft: "7px" }}>
                            Referans No
                        </th>
                        <th style={{ border: "1px solid #A97900", width: "131px", opacity: "0.75", paddingLeft: "7px" }}>
                            Durum
                        </th>
                    </tr>
                </thead>
                <tbody style={{ font: "normal small normal 14px/16px SF Pro Text" }}>
                    {lawyerDates
                        .map((item) => (


                            <tr
                                key={item._id} value={item.title}

                                style={{
                                    borderBottom: "1px solid #A97900",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    font: "normal normal normal 14px/16px SF Pro Text",
                                }}
                            >
                                <td
                                    style={{
                                        paddingTop: "7px",
                                        paddingBottom: "7px",
                                    }}
                                >
                                    {item.username}
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
                                            marginLeft: "5px"
                                        }}
                                    >
                                        Planlandı
                                    </button>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    )
}

export default LawyerDates