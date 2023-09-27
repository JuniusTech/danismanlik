import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import data from "./data/data.json";
import { Store } from "../../Store";

const LawyerAbout = () => {
    const [about, setAbout] = useState("")
    const [languages, setLanguages] = useState([]);
    const [education, setEducation] = useState({
        school: "",
        start: "",
        finish: "",
    })
    const [phoneNo, setPhoneNo] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const addressDescription = useState("");
    const [postalCode] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState({
        city: "",
        town: "",
        description: "",
        code: "",
    });

    const { state } = useContext(Store);
    const { lawyerInfo } = state;


    useEffect(() => {
        fetchLawyerData();
    });

    const fetchLawyerData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}/add-bio`,
                {
                    headers: { Authorization: `Bearer ${lawyerInfo.token}` },
                }
            );
            const lawyerDataFromAPI = response.data;
            setName(lawyerDataFromAPI.name);
            setSurname(lawyerDataFromAPI.surname);
            setAddress({
                city: lawyerDataFromAPI.address.city,
                town: lawyerDataFromAPI.address.town,
                description: lawyerDataFromAPI.address.description,
                code: lawyerDataFromAPI.address.code,
            });
        } catch (error) {

        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const bioData = {
                about: "setAbout",
                languages: [setLanguages],
                education: [
                    {
                        school: "",
                        start: "",
                        finish: "",
                    },

                ],
                experience: [
                    {
                        office: "",
                        start: "",
                        finish: "",
                    },

                ],
            };
            await axios.put(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}/add-bio`,
                bioData,
                {
                    headers: { Authorization: `Bearer ${lawyerInfo.token}` },
                }
            );
            setLoading(false);
            toast.success("Bilgileriniz Güncellendi.");
        } catch (error) {
            toast.error(getError(error));
            setLoading(false);
        }

    };


    return (
        <div style={{ widht: "650px" }}>
            <div className="lawyerdashboardregisterBaslık">
                <h1>Hakkımda</h1>
            </div>
            <form
                className="lawyerpersonaldetailFormDiv"
                style={{ widht: "650px" }}
                onSubmit={submitHandler}
            >
                <div className="row" id="registerRowDiv">
                    <div className="d-flex row" style={{ width: "588px" }}>
                        <label style={{ fontSize: "20px" }} htmlFor="">Biografi</label>

                        <textarea
                            style={{
                                width: "588px",
                                height: "85px",
                                fontSize: "17px",
                                borderRadius: "5px",
                                opacity: "1",
                                resize: "none",
                            }}
                            className="mx-2 pt-2 "
                            name="comment"
                            placeholder={
                                "Özgeçmişinizi buraya girin..."
                            }
                            id=""
                            defaultValue=""
                            onChange={(e) => setAbout(e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="d-flex row" style={{ width: "588px", marginTop: "20px" }}>
                        <label style={{ fontSize: "20px" }} htmlFor="">Eğitimler</label>
                        <div className="d-flex">
                            <label style={{ width: "50%" }} htmlFor="">Okul</label>
                            <label style={{ width: "25%" }} htmlFor="">Başlangıç</label>
                            <label style={{ width: "25%", paddingLeft: "10px" }} htmlFor="">Bitiş</label>
                        </div>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="lawyerdashboard-registerFormControl"

                                onChange={(e) => setEducation(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setEducation(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </div>
                        <div className="d-flex">
                            <label style={{ width: "50%" }} htmlFor="">Okul</label>
                            <label style={{ width: "25%" }} htmlFor="">Başlangıç</label>
                            <label style={{ width: "25%", paddingLeft: "10px" }} htmlFor="">Bitiş</label>
                        </div>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="lawyerdashboard-registerFormControl"

                                onChange={(e) => setEducation(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setEducation(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="d-flex row" style={{ width: "588px", marginTop: "20px" }}>
                        <label style={{ fontSize: "20px" }} htmlFor="">Deneyimler</label>
                        <div className="d-flex">
                            <label style={{ width: "50%" }} htmlFor="">Firma</label>
                            <label style={{ width: "25%" }} htmlFor="">Başlangıç</label>
                            <label style={{ width: "25%", paddingLeft: "10px" }} htmlFor="">Bitiş</label>
                        </div>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="lawyerdashboard-registerFormControl"

                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="d-flex">
                            <label style={{ width: "50%" }} htmlFor="">Firma</label>
                            <label style={{ width: "25%" }} htmlFor="">Başlangıç</label>
                            <label style={{ width: "25%", paddingLeft: "10px" }} htmlFor="">Bitiş</label>
                        </div>
                        <div className="d-flex">
                            <input
                                type="text"
                                className="lawyerdashboard-registerFormControl"

                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="number"

                                style={{ marginLeft: "15px", width: "25%" }}

                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="d-flex row" style={{ width: "588px", marginTop: "20px" }}>
                        <label style={{ fontSize: "20px" }} htmlFor="">Bildiğim Diller</label>
                        <input
                            type="text"
                            className="lawyerdashboard-registerFormControl"

                            onChange={(e) => setLanguages(e.target.value)}
                        />
                        <input
                            type="text"
                            className="lawyerdashboard-registerFormControl"
                            style={{ marginTop: "10px" }}

                            onChange={(e) => setLanguages(e.target.value)}
                        />
                    </div>
                    <div className="col">



                        <br />
                    </div>
                </div>
                <br />
                <br />
                <div className="lawyerdashboard-buttons">
                    <button className="lawyerdashboard-button-vazgec">Vazgeç</button>
                    <button className="lawyerdashboard-button-kaydet" type="submit">
                        {loading ? (
                            <>
                                <LoadingBox />
                            </>
                        ) : (
                            "Kaydet"
                        )}
                    </button>
                </div>
                <br />
                <br />
            </form>
        </div>
    );
};

export default LawyerAbout;
