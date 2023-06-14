import React, { useState } from 'react'
import ltrght from "../../assets/little-right-arrow.svg"
import LawyerPaymentSetting from './LawyerPaymentSetting'

const InvoiceDetails = () => {
    const [showInvoiceDetails, setShowInvoiceDetails] = useState(true)
    const [showLawyerPaymentPlan, setShowLawyerPaymentPlan] = useState(true)
    return (showInvoiceDetails ?

        <div>
            <div>
                <label className="lawyerdashboard-registerLabel"
                    style={{ width: "154px", height: "24px", fontSize: "20px", margin: "30px 10px 10px 24px", cursor: "pointer" }}
                    onClick={() => setShowInvoiceDetails(false)}>
                    Ödeme Ayarları {" "}
                </label>
                <img className='ps-2' src={ltrght} alt="" />
                <label className="lawyerdashboard-registerLabel ps-2"
                    style={{ width: "160px", height: "24px", fontSize: "20px", margin: "0px 10px 30px 24px" }}
                >

                    Fatura Detayları
                </label>
            </div>
            <label className="lawyerdashboard-registerLabel ps-2"
                style={{ width: "160px", height: "24px", fontSize: "18px", marginLeft: "20px", marginTop: "0px" }}
            >

                Fatura Detayları
            </label>

            <div className="registerTelDiv  " style={{ width: "345px", margin: "10px 10px 35px 24px" }}>

                <input
                    className="lawyerdashboard-registerFormControl"
                    style={{ width: "341px", fontSize: "17px", height: "40px", borderRadius: "10px 10px 0 0 ", borderBottom: "none", paddingLeft: "28px" }}
                    type="text"
                    value=""
                    placeholder="Standart Üyelik - 249 TL/Ay "

                />
                <div className="border border-bottom " style={{ margin: "-0.1px 20px" }}></div>
                <input
                    className="lawyerdashboard-registerFormControl"
                    style={{ width: "341px", height: "40px", fontSize: "17px", borderRadius: "0 0 10px 10px", borderTop: "none", paddingLeft: "28px" }}
                    type="text"
                    value=""
                    placeholder="Sonraki Faturalama Tarihi : 01.06.2023 "

                />
                <p style={{ fontSize: "14px", width: "977px", height: "16px", color: "#00242E", opacity: "0.5", margin: "20px 62px 20px 0px" }}>Üyelik ücretleri her dönemin başlangıcında faturalandırılır ve hesabınızda görüntülenmesi fatura tarihinden ititbaren birkaç gün sürebilir.  </p>
            </div>
            <table style={{ width: "1009px", height: "33px", marginTop: "20px", marginLeft: "30px", marginRight: "30px" }}>
                <thead>
                    <tr
                        style={{
                            font: "SF Pro Text, bold 16px",
                            height: "25px"
                        }}
                    >
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Tarih
                        </th>
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Açıklama
                        </th>
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Üyelik Dönemi
                        </th>
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Ödeme Yöntemi
                        </th>
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Alt Toplam
                        </th>
                        <th style={{ border: "1px solid #A97900", padding: "7px 7px 7px 7px" }}>
                            Toplam
                        </th>
                    </tr>
                </thead>
                <tbody style={{ font: "SF Pro Text, bold 14px " }}>
                    <tr
                        style={{
                            borderBottom: "1px solid #A97900",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            font: "SF Pro Text, bold 14px ",
                        }}
                    >
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                                color: "#a97900",
                                fontWeight: "bold",
                                font: "14px"
                            }}
                        >
                            30.04.2023
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            Standart Üyelik Hizmeti
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            30.04.2023 - 29.05.2023
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            Kredi Kartı
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            211,02 TL <span style={{ opacity: "0.5" }}>(+37,98 TL KDV)</span>
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            249 TL
                        </td>
                    </tr>
                    <tr
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
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                                color: "#a97900",
                                fontWeight: "bold",
                                font: "14px"
                            }}
                        >
                            30.03.2023
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            Standart Üyelik Hizmeti
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            30.03.2023 - 29.04.2023
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            Banka Havalesi
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            211,02 TL <span style={{ opacity: "0.5" }}>(+37,98 TL KDV)</span>
                        </td>
                        <td
                            style={{
                                paddingTop: "7px",
                                paddingLeft: "7px",
                                paddingBottom: "7px",
                            }}
                        >
                            249 TL
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        : <LawyerPaymentSetting />
    )
}

export default InvoiceDetails