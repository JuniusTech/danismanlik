import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import eye from "../../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";

const LawyerAccountSettings = ({ show, setShowLawyerLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneRegion, setPhoneRegion] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const phone = `${phoneRegion} + ${phoneNo}`;
  const [branch, setBranch] = useState("");
  const [branch2, setBranch2] = useState("");
  const [branch3, setBranch3] = useState("");
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [showLawyerRegister, setShowLawyerRegister] = useState(false);
  const [branchCount, setBranchCount] = useState(1);
  const [branchOptions, setBranchOptions] = useState(["Branş 1"]);
  const [showAddButton, setShowAddButton] = useState(true);
  const [website, setWebsite] = useState("")

  const handleLogin = () => {
    setShowLawyerLogin(true);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/branchs`)
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/signup`,
        {
          email,
          password,
          branch,
          phone,
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
  const { state } = useContext(Store);
  const { lawyerInfo } = state;
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigateRegister = () => {
    navigate("/api/lawyers/signup");
  };
  const handleAddBranch = () => {
    setShowAddButton(false);
  };

  return (
    <div>
      <div className="registerBaslık">
        <h1>Hesap Ayarları</h1>
      </div>
      <form
        className="lawyerRegisterFormDiv"
        style={{ height: "fit-content" }}
        onSubmit={submitHandler}
      >
        <div className="d-flex">
          <div>
            <label htmlFor="">
              Şifre{" "}
              <label
                style={{
                  color: "#a97900",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {" "}
                (Şifre değiştir)
              </label>
            </label>
            <div className="lawyeraccountsetting-input">
              <input
                className="lawyerdashboard-registerFormControl"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Şifre"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", marginLeft: "-25px" }}
              />
            </div>

            <label
              className="lawyeraccountsetting-input"
              style={{ widht: "20px", display: "flex", marginTop: "15px" }}
              htmlFor=""
            >
              Web Sitesi
            </label>

            <input
              placeholder="Bağlantı Ekle"
              className="lawyerdashboard-registerFormControl"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

          </div>
          <div style={{ marginLeft: "30px" }}>
            <label htmlFor="">
              Baro Sicil Numarası
              <label
                style={{
                  color: "#a97900",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {" "}
                .
              </label>
            </label>
            <div className="lawyeraccountsetting-input">
              <input
                className="lawyerdashboard-registerFormControl"
                type={"text"}
                value={lawyerInfo._id}
              />
            </div>

            <label
              className="lawyeraccountsetting-input"
              style={{ widht: "20px", display: "flex", marginTop: "15px" }}
              htmlFor=""
            >
              Branş
            </label>

            <select
              className="lawyerdashboard-registerFormControl"
              value={lawyerInfo.branch}
              name="branch"
              onChange={() => { }}
              title="Branş Seç"
              id="navbarScrollingDropdown"
            >
              <option defaultValue="all">Branş Seç</option>
              {branches
                ?.sort((a, b) => a.title.localeCompare(b.title))
                .map((item) => (
                  <option key={item._id} value={item.title}>
                    {item.title
                      .split(' ')
                      .map((word, index) => {
                        if (index === 0) {
                          return word.charAt(0).toUpperCase() + word.slice(1);
                        } else {
                          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                        }
                      })
                      .join(' ')}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <br />
        <div>
          <h1
            style={{
              marginLeft: "0 px",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            Randevu ve Sistem Bildirimleri
          </h1>
        </div>
        <div className="d-flex">
          <div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ width: "274px", display: "flex", alignItems: "center" }}
            >
              <p className="p-2" style={{ width: "183px" }}>
                E-posta bildirimlerini aç
              </p>
              <label className="switch" style={{ marginLeft: "30px" }}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ width: "274px" }}
            >
              <p className="p-2" style={{ width: "183px" }}>
                SMS bildirimlerini aç
              </p>
              <label className="switch" style={{ marginLeft: "30px" }}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="search-left-border"></div>
          <div className="d-flex" style={{ width: "274px" }}>
            <label
              className="align-items-center"
              style={{
                color: "#a97900",
                marginLeft: "5px",
                marginTop: "28px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate("/payment")}
            >
              Üyelik Planını Yükselt
            </label>
          </div>
        </div>
        <div className="lawyerdashboard-buttons" style={{ marginTop: "130px" }}>
          <button
            className="lawyerdashboard-button-vazgec"
            onClick={() => setShowLawyerRegister()}
          >
            Vazgeç
          </button>
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
        <p className="d-flex justify-conter">
          <button
            style={{
              color: "#a97900",
              fontSize: "19px",
              margin: "auto",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleLogin()}
          >
            Avukat Hesabımı Sil
          </button>
        </p>
      </form>
    </div>
  );
};

export default LawyerAccountSettings;
