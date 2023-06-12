import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { getError } from "../getError";
import LoadingBox from "../components/LoadingBox";
import Navbar from "../components/Navbar";
import lefticon from "../assets/leftSimge.png";

const LawyerForgetPass = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useContext(Store);
  const { lawyerInfo } = state;
  useEffect(() => {
    if (lawyerInfo) {
      navigate("/");
    }
  }, [navigate, lawyerInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/law-password-reset`,
        {
          email,
        }
      );
      setLoading(false);
      toast.success(data.message);
      navigate("/sifre-sıfırlama");
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <Container
        style={{
          width: "315px",
          height: "420px",
          margin: "20px  auto",
          background: "#dcdcdc",
          borderRadius: "15px",
        }}
        className="small-container d-flex flex-column  "
      >
        <div style={{ margin: "20px 0 25px 28px" }}>
          <p>
            <img src={lefticon} style={{ marginTop: "-3px" }} alt="" /> Geri
          </p>
          <h1
            className=" "
            style={{ fontSize: "22px", fontWeight: "700", marginTop: "32px" }}
          >
            Şifrenizi mi unuttunuz?
          </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 " controlId="email">
              <Form.Label
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  width: "250px",
                  height: "70px",
                  margin: "32px 0 15px -6px",
                }}
              >
                Yeni şifrenizi oluşturabilmeniz için size bir bağlantı
                göndereceğiz. Lütfen mail adresinizi giriniz.
              </Form.Label>
              <Form.Control
                style={{ width: "245px" }}
                type="email"
                required
                placeholder="E-posta"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <div className="mb-3">
              <Button
                type="submit"
                style={{
                  width: "245px",
                  height: "35px",
                  fontSize: "16px",
                  fontWeight: "900px",
                  background: "#A97900",
                  marginTop: "13px",
                  border: "none",
                }}
              >
                {loading ? (
                  <>
                    <LoadingBox />
                  </>
                ) : (
                  "Gönder"
                )}
              </Button>

              <div
                style={{
                  width: "245px",
                  border: "1px solid #00242E",
                  opacity: "0.5",
                  marginTop: "15px",
                }}
              ></div>
              <p style={{ marginTop: "13px" }}>
                Hesabın yok mu? Hemen{" "}
                <span style={{ color: "#A97900" }}>kayıt ol!</span>{" "}
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default LawyerForgetPass;
