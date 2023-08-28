import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import data from "./data/data.json";
import { Store } from "../../Store";

const LawyerPersonalDetails = () => {
  const [email, setEmail] = useState("");
  const [phoneRegion, setPhoneRegion] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const phone = `${phoneRegion} + ${phoneNo}`;
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
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`,
        {
          headers: { Authorization: `Bearer ${lawyerInfo.token}` },
        }
      );
      const lawyerDataFromAPI = response.data;
      setName(lawyerDataFromAPI.name);
      setSurname(lawyerDataFromAPI.surname);
      setEmail(lawyerDataFromAPI.email);
      setPhoneRegion(lawyerDataFromAPI.phoneRegion);
      setPhoneNo(lawyerDataFromAPI.phoneNo);
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
      await axios.put(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`,
        {
          name,
          surname,
          email,
          phone,
          address,
        },
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
    console.log(addressDescription.description, postalCode.code, seciliIl, seciliIlce);
  };
  const [seciliIl, setSeciliIl] = useState("");
  const [seciliIlce, setSeciliIlce] = useState("");

  const handleIlChange = (e) => {
    const ilIndex = e.target.value;
    setSeciliIl(data[ilIndex].name);
    setSeciliIlce("İlçe Seçiniz");
  };

  const handleIlceChange = (e) => {
    const ilceIndex = e.target.value;
    setSeciliIlce(
      data.find((il) => il.name === seciliIl).towns[ilceIndex].name
    );
  };

  return (
    <div style={{ widht: "650px" }}>
      <div className="lawyerdashboardregisterBaslık">
        <h1>Kişisel Bilgiler</h1>
      </div>
      <form
        className="lawyerpersonaldetailFormDiv"
        style={{ widht: "650px" }}
        onSubmit={submitHandler}
      >
        <div className="row" id="registerRowDiv">
          <div className="col">
            <label className="lawyerdashboard-registerLabel" htmlFor="">
              Ad
            </label>
            <input
              type="text"
              className="lawyerdashboard-registerFormControl"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="lawyerdashboard-registerLabel" htmlFor="">
              Soyad
            </label>
            <input
              className="lawyerdashboard-registerFormControl"
              type="text"
              defaultValue={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="col">
            <div className="d-flex justify-content-start">
              <label
                className="lawyerdashboard-registerLabel"
                style={{ width: "55px" }}
                htmlFor=""
              >
                E-posta{" "}
              </label>
              <label
                className="lawyerdashboard-registerLabel"
                style={{ color: "#a97900", width: "125px" }}
              >
                (E-posta değiştir)
              </label>
            </div>
            <input
              className="lawyerdashboard-registerFormControl"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex justify-content-start">
              <label
                className="lawyerdashboard-registerLabel"
                style={{ width: "100px" }}
                htmlFor=""
              >
                Tel. Numarası
              </label>
              <label
                className="lawyerdashboard-registerLabel"
                style={{ color: "#a97900", width: "130px" }}
              >
                (Numara değiştir)
              </label>
            </div>
            <div className="registerTelDiv d-flex ">
              <select
                style={{ width: "52px", height: "40px" }}
                className="lawyerdashboard-registerFormControl-phone"
                value={phoneRegion}
                id="inputGroupSelect02"
                onChange={(e) => setPhoneRegion(e.target.value)}
              >
                <option selected>+90</option>
                <option value="1">+91</option>
                <option value="2">+92</option>
                <option value="3">+93</option>
              </select>
              <input
                className="lawyerdashboard-registerFormControl-phone"
                style={{ paddingLeft: "5px" }}
                type="text"
                defaultValue={phone}
                placeholder=""
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <br />
          </div>
        </div>
        <div className="d-flex row" style={{ width: "588px" }}>
          <label htmlFor="">Büro Adresi</label>

          <textarea
            style={{
              width: "588px",
              height: "40px",
              fontSize: "17px",
              borderRadius: "5px",
              opacity: "1",
              resize: "none",
            }}
            className="mx-2 pt-2 "
            name="comment"
            placeholder={
              address.description || "Adresi buraya girin..."
            }
            id=""
            defaultValue={address.description}
            onChange={(e) =>
              setAddress({ ...address, description: e.target.value })
            }
          ></textarea>
        </div>
        <div
          className="d-flex row"
          style={{ width: "588px", marginTop: "10px" }}
        >
          <label htmlFor="">Posta Kodu</label>
          <input
            type="number"
            style={{
              width: "588px",
              height: "40px",
              fontSize: "17px",
              borderRadius: "5px",
              opacity: "1",
              resize: "none",
            }}
            className="mx-2 pt-2 "
            placeholder={address.code || "Posta Kodu"}
            defaultValue={address.code}
            onChange={(e) => setAddress({ ...address, code: e.target.value })}
          />
        </div>
        <div className="d-flex">
          <div style={{ width: "364px" }}>
            <label
              style={{ width: "60px" }}
              className="lawyerdashboard-registerLabel"
              htmlFor=""
            >
              İl
            </label>
            <select
              className="lawyerdashboard-registerFormControl"
              value={data.findIndex(il => il.name === seciliIl)}
              name="il"
              onChange={handleIlChange}
              title="İl Seçiniz"
              id="navbarScrollingDropdown"
            >
              <option defaultValue="all">İl Seçiniz</option>
              {data
                ?.sort((a, b) => a.name.localeCompare(b.name, "tr"))
                .map((il, index) => (
                  <option key={index} value={index}>
                    {il.name}
                  </option>
                ))}
            </select>
          </div>
          <div style={{ paddingLeft: "7px" }}>
            <label className="lawyerdashboard-registerLabel" htmlFor="">
              İlçe
            </label>
            {
              <div>
                <select
                  className="lawyerdashboard-registerFormControl"
                  id="ilce"
                  value={data.name}
                  onChange={handleIlceChange}
                  name="ilçe"
                  title="İl Seçiniz"
                >
                  <option value="">İlçe Seçiniz</option>
                  {data
                    .find((i) => i.name === seciliIl)
                    ?.towns.map((ilce, index) => (
                      <option value={index} key={index}>
                        {ilce.name}
                      </option>
                    ))}
                </select>
              </div>
            }
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

export default LawyerPersonalDetails;
