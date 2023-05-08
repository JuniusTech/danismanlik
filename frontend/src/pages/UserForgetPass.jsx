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

const UserForgetPass = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/password-reset`,
        {
          email,
        }
      );
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container className="small-container d-flex flex-column align-items-center ">
        <h1 className="my-3">Şifremi Unuttum</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 " controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="mb-3">
            <Button type="submit" size="lg">
              {loading ? (
                <>
                  <LoadingBox />
                </>
              ) : (
                "Gönder"
              )}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default UserForgetPass;
