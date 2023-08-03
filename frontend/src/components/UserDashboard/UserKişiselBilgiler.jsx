import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from "../../Store";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../getError";

const UserKişiselBilgiler = () => {
  const [phoneRegion, setPhoneRegion] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const phone = `${phoneRegion} + ${phoneNo}`;
  const [loading, setLoading] = useState(false);

  const { state } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URI}/api/users/${userInfo._id}`,
        {
          name,
          surname,
          phone,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
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
    <div
      className="userDashboardRight"
      style={{ position: "relative", margin: "20px", width: "650px" }}
    >
      <p
        style={{
          font: "normal normal bold 20px/24px SF Pro Text",
          marginBottom: "5%",
        }}
      >
        Kişisel Bilgiler
      </p>
      <Form>
        <Form.Group>
          <Form.Label>Ad</Form.Label>
          <Form.Control
            placeholder="Ad"
            defaultValue={userInfo?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            placeholder="Soyad"
            defaultValue={userInfo?.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Eposta</Form.Label>
          <Form.Control
            placeholder="E-Posta"
            defaultValue={userInfo?.email}
            type="email"
            //! onChange={(e) => setEmail(e.target.value)} email değişecek mi?
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Şifre*</Form.Label>
          <Form.Control placeholder="Şifre" type="password" />
        </Form.Group>
        <Form.Label>Telefon</Form.Label>
        <Form.Group style={{ display: "flex" }}>
          <Form.Control
            style={{ width: "15%", marginRight: "2%" }}
            placeholder="+90"
            defaultValue={phoneRegion}
            onChange={(e) => setPhoneRegion(e.target.value)}
          />

          <Form.Control
            defaultValue={userInfo?.phone}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="555 444 33 22"
          />
        </Form.Group>
        <div
          className="userdashboardButtons"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              border: "1px solid #00242E",
              background: "white",
              color: "#00242E",
              width: "80px",
              height: "35px",
              borderRadius: "8px",
            }}
          >
            Vazgeç
          </Button>
          <Button
            style={{
              marginLeft: "6%",
              border: "none",
              background: "#A97900 0% 0% no-repeat padding-box",
              width: "80px",
              height: "35px",
              borderRadius: "8px",
            }}
            onClick={submitHandler}
          >
            Kaydet
          </Button>
        </div>
      </Form>
      <p
        style={{
          font: "normal normal medium 19px/23px SF Pro Text",
          textAlign: "center",
          color: "#A97900",
          position: "absolute",
          bottom: "-55%",
          left: "40%",
          opacity: "0.5",
        }}
      >
        Kullanıcı Hesabımı Sil
      </p>
    </div>
  );
};

export default UserKişiselBilgiler;
