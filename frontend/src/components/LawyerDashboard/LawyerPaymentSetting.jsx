import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import eye from "../../assets/eye.svg"
import LawyerPaymentPlan from "./LawyerPaymentPlan";
import InvoiceDetails from "./InvoiceDetails";



const LawyerPaymentSetting = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showLawyerRegister, setShowLawyerRegister] = useState(false);




    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/signup`,
                {
                    email,
                    password,

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


    const [showLawyerPaymentPlan, setShowLawyerPaymentPlan] = useState(true)
    const [showInvoiceDetails, setShowInvoiceDetails] = useState(true)

    return (
        showLawyerPaymentPlan && showInvoiceDetails ?
            <div style={{ width: "fit-content", height: "700px", margin: "0" }}>
                <div className="lawyerdashboardregisterBaslık">
                    <h1 style={{ width: "180px" }} >Ödeme Ayarları</h1>
                </div>
                <form className="lawyerRegisterFormDiv" style={{ height: "645px", marginRight: "20px" }} onSubmit={submitHandler}>
                    <div className="row" id="registerRowDiv" style={{ width: "345px", marginTop: "-20px" }}>

                        <div className="col" style={{ width: "345px" }}>
                            <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                                <label className="lawyerdashboard-registerLabel" style={{ width: "105px" }} htmlFor="">
                                    Üyelik Planım {" "}
                                </label>
                                <label className="lawyerdashboard-registerLabel" style={{ color: "#a97900", width: "125px" }}
                                    onClick={() => setShowLawyerPaymentPlan(false)} >

                                    (Değiştir)
                                </label>
                            </div>
                            <input
                                className="lawyerdashboard-registerFormControl"
                                style={{ width: "129px", paddingLeft: "28px" }}
                                type="email"
                                value={email}
                                placeholder="STANDART"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="d-flex justify-content-start" style={{ width: "345px" }}>
                                <label className="lawyerdashboard-registerLabel" style={{ width: "90px" }} htmlFor="">
                                    Fatura Özeti
                                </label>
                                <label className="lawyerdashboard-registerLabel" style={{ color: "#a97900", width: "130px" }}
                                    onClick={() => setShowInvoiceDetails(false)} >

                                    (Detayları Gör)
                                </label>
                            </div>
                            <div className="registerTelDiv  " style={{ width: "345px" }}>

                                <input
                                    className="lawyerdashboard-registerFormControl"
                                    style={{ width: "341px", height: "40px", borderRadius: "10px 10px 0 0 ", borderBottom: "none", paddingLeft: "28px" }}
                                    type="text"
                                    value=""
                                    placeholder="Son Fatura Tarihi : 01.05.2023 "

                                />
                                <div className="border border-bottom " style={{ margin: "-0.1px 20px" }}></div>
                                <input
                                    className="lawyerdashboard-registerFormControl"
                                    style={{ width: "341px", height: "40px", borderRadius: "0 0 10px 10px", borderTop: "none", paddingLeft: "28px" }}
                                    type="text"
                                    value=""
                                    placeholder="Sonraki Faturalama Tarihi : 01.06.2023 "

                                />
                            </div>
                            <div className="d-flex justify-content-start" style={{ width: "345px", }}>
                                <label className="lawyerdashboard-registerLabel" style={{ width: "190px" }} htmlFor="">
                                    Kart Üzerindeki İsim
                                </label>

                            </div>
                            <div className="registerTelDiv " style={{ width: "345px", marginBottom: "-25px" }}>

                                <input
                                    className="lawyerdashboard-registerFormControl"
                                    style={{ width: "341px", paddingLeft: "28px", marginTop: "10px", marginBottom: "-10px" }}
                                    type="text"
                                    value={""}
                                    placeholder="Kart Üzerindeki İsim"

                                />
                            </div>
                            <div style={{ width: "345px" }}>
                                <label className="lawyerdashboard-registerLabel" style={{ width: "190px" }} htmlFor="">
                                    Kart Numarası
                                </label>

                            </div>
                            <div className="registerTelDiv " style={{ width: "345px  " }}>

                                <input
                                    className="lawyerdashboard-registerFormControl"
                                    style={{ width: "341px", paddingLeft: "28px", marginBottom: "20px" }}
                                    type="text"
                                    value={""}
                                    placeholder="1234 1234 1234 1234"

                                />
                                <div>
                                    <input
                                        className="lawyerdashboard-registerFormControl"
                                        style={{ width: "79px", paddingLeft: "28px" }}
                                        type="text"
                                        value={""}
                                        placeholder="Ay"

                                    />
                                    <input
                                        className="lawyerdashboard-registerFormControl"
                                        style={{ width: "79px", paddingLeft: "28px", marginLeft: "20px" }}
                                        type="text"
                                        value={""}
                                        placeholder="Yıl"

                                    />
                                    <input
                                        className="lawyerdashboard-registerFormControl"
                                        style={{ width: "143px", paddingLeft: "28px", marginLeft: "20px" }}
                                        type="text"
                                        value={""}
                                        placeholder="CVC"

                                    />
                                </div>
                            </div>



                        </div>
                    </div>


                    <br />
                    <br />
                    <div className="lawyerdashboard-buttons" >

                        <button className="lawyerdashboard-button-ödeme" type="submit">
                            {loading ? (
                                <>
                                    <LoadingBox />
                                </>
                            ) : (
                                "Ödeme Yap"
                            )}
                        </button>
                    </div>
                    <br />
                    <br />


                </form>

            </div>
            : (showLawyerPaymentPlan ?
                (showInvoiceDetails ? <LawyerPaymentPlan /> : <InvoiceDetails />) : <LawyerPaymentPlan />)

    )
}

export default LawyerPaymentSetting