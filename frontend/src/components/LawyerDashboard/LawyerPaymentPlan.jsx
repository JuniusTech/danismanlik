import React, { useState } from 'react'
import tl from "../../assets/TL.png";
import tik from "../../assets/fiyatlandırmaTik.png";
import X from "../../assets/fiyatlandırmaX.png";
import ltrght from "../../assets/little-right-arrow.svg"
import LawyerPaymentSetting from './LawyerPaymentSetting';
import { useNavigate } from 'react-router-dom';



const LawyerPaymentPlan = () => {
    const [showLawyerPaymentPlan, setShowLawyerPaymentPlan] = useState(true)
    const navigate = useNavigate();
    return (showLawyerPaymentPlan ?
        <div>
            <div>
                <div>
                    <label className="lawyerdashboard-registerLabel"
                        style={{ width: "154px", height: "24px", fontSize: "20px", margin: "30px 10px 10px 24px", cursor: "pointer" }}
                        onClick={() => setShowLawyerPaymentPlan(false)}>
                        Ödeme Ayarları {" "}
                    </label>
                    <img className='ps-2' src={ltrght} alt="" />
                    <label className="lawyerdashboard-registerLabel ps-2"
                        style={{ width: "136px", height: "24px", fontSize: "20px", margin: "0px 10px 30px 24px" }}
                    >

                        Üyelik Planım
                    </label>
                </div>
                <label className="lawyerdashboard-registerLabel ps-2"
                    style={{ width: "136px", height: "24px", fontSize: "18px", marginLeft: "20px", marginTop: "0px" }}
                >

                    Üyelik Planım
                </label>
                <div
                    style={{
                        width: "192px",
                        height: "393px",
                        background: "#FFFFFF",

                        border: "1px solid #a97900",
                        borderRadius: "10px",
                        margin: "30px 104px 252px 90px",
                        justifyContent: "center",

                    }}
                >

                    <p
                        style={{
                            width: "101px",
                            height: "15px",
                            fontFamily: "SF Pro Text",
                            fontStyle: "normal",

                            fontSize: "13px",
                            justifyContent: "center",
                            textAlign: "center",
                            color: "#A97900",
                            margin: "15px 39px 6px 42px "

                        }}
                    >
                        Standart Üyelik
                    </p>
                    <p
                        style={{
                            width: "71px",
                            height: "45px",
                            fontFamily: "SF Pro Text",
                            fontStyle: "normal",
                            margin: "auto",
                            fontSize: "38px",

                            display: "flex",
                            justifyContent: "center",

                            color: "#00242E",
                        }}
                    >
                        249{" "}
                        <span
                            style={{

                            }}
                        >
                            <img
                                src={tl}
                                alt=""
                                style={{
                                    width: "14px",
                                    height: "14px",
                                    margin: " 25px 0 0 5px",
                                }}
                            />
                        </span>
                    </p>
                    <p
                        style={{
                            width: "61px",
                            height: "12px",
                            fontFamily: "SF Pro Text",
                            fontStyle: "normal",
                            margin: "auto",
                            fontSize: "10px",

                            color: "#000000",
                            opacity: 0.5,

                        }}
                    >
                        KDV Dahil/Ay
                    </p>
                    <div
                        style={{
                            margin: "45px 14px -17px 20px",

                            fontFamily: "SF Pro Text",
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: "14px",

                        }}
                    >
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                                alt=""
                            />{" "}
                            Profil Fotoğrafı
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />
                            Temel Profil Bilgileri
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Görüşlere Cevap Verme
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Online Randevu Takvimi
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Web Sitesi
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={tik}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Detaylı Profil Oluşturma
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={X}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Randevu Hatırlatıcı
                        </p>
                        <p style={{ fontSize: "12px" }}>
                            <img
                                src={X}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px" }}
                            />{" "}
                            Fotoğraflar
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "20px" }}>
                            <img
                                src={X}
                                width={"13px"}
                                height={"13px"}
                                alt=""
                                style={{ marginTop: "-3px", marginRight: "5px", }}
                            />{" "}
                            Profilde Video Paylaşımı
                        </p>
                    </div>
                    <div>
                        <p style={{
                            width: "121px",
                            height: "19px",
                            fontFamily: "SF Pro Text",
                            fontStyle: "bold",
                            fontSize: "16px",
                            textAlign: "center",
                            color: "#A97900",
                            margin: "55px 42px 6px 42px ",
                            cursor: "pointer"
                        }}
                            onClick={() => navigate("/ödeme")}
                        >Diğer Planları Gör</p>
                    </div>
                    <div style={{ width: "341px", height: "24px", margin: "50px 60px 30px -70px" }}>
                        <p style={{ fontSize: "10px", width: "341px", height: "24px", color: "#00242E", opacity: "0.5", textAlign: "center" }}>Üyelik ücretleri her dönemin başlangıcında faturalandırılır ve hesabınızda görüntülenmesi fatura tarihinden ititbaren birkaç gün sürebilir.  </p>
                    </div>
                </div>

            </div>

        </div >
        : <LawyerPaymentSetting />
    )
}

export default LawyerPaymentPlan