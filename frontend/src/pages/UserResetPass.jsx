import Axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../getError";
import LoadingBox from "../components/LoadingBox";
import Navbar from "../components/Navbar";
const UserResetPass = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const param = useParams();
  const url = `${process.env.REACT_APP_BASE_URI}/api/password-reset/${param.id}/${param.token}`;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Şifreler eşleşmiyor");
      return;
    }
    setLoading(true);
    try {
      const { data } = await Axios.post(url, {
        password,
      });
      navigate("/");
      setLoading(false);
      toast.success("Şifreniz değiştirildi");
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <Container className="small-container d-flex flex-column align-items-center">
        <h1 className="my-3">Şifreyi Değiştir</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Yeni Şifre</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Şifre(Tekrar)</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="mb-3">
            <Button type="submit" size="lg">
              {loading ? (
                <>
                  <LoadingBox />
                </>
              ) : (
                "Şifreyi Değiştir"
              )}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default UserResetPass;
