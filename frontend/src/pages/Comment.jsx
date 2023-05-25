import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/comment.css";

const Comment = ({ show, setShowComment, id }) => {
  const params = useParams();
  const { lawyerid } = params;

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState();
  const navigate = useNavigate();
  const [stars, setStars] = useState(0);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerid}/reviews`,
        {
          user: userInfo,
          comment: comment,
          rating: stars,
        },
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      console.log(data);
      toast.success("Yorum başarılı bir şekilde yapıldı");
      // lawyer.reviews.unshift(data.review);
      // lawyer.numReviews = data.numReviews;
      // lawyer.rating = data.rating;
      setShowComment(false);
      navigate(`/${lawyerid}`);
    } catch (error) {
      console.log(error);
      toast.error("Bir hata oluştu. Yorum yapılamadı.");
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => submitHandler(false)}
      className="px-5 comment  m-auto p-5"
      animation={false}
      centered
    >
      <Form className="signInForm" onSubmit={submitHandler}>
        <h1>Avukatınızı değerlendiriniz </h1>
        <form
          action=""
          method="post"
          className="d-flex w-75 justify-content-center "
        >
          <div className=" justify-content-around w-10">
            <button className="lawyer-rating-button rounded-circle">
              {userInfo?.name?.charAt(0).toUpperCase()}
            </button>
          </div>
          <div className="justify-content-around w-75">
            <textarea
              className="mx-3 "
              name="comment"
              placeholder="Lütfen yorum giriniz"
              id=""
              cols="45"
              rows="3"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="d-flex justify-content-center align-items-center w-10">
          <div className="m-2">Puan:</div>
          <span>
            <i
              className={
                stars >= 1
                  ? "comment-star fas fa-star"
                  : "comment-star far fa-star"
              }
              onClick={() => setStars(1)}
            />
          </span>
          <span>
            <i
              className={
                stars >= 2
                  ? "comment-star fas fa-star"
                  : "comment-star far fa-star"
              }
              onClick={() => setStars(2)}
            />
          </span>
          <span>
            <i
              className={
                stars >= 3
                  ? "comment-star fas fa-star"
                  : "comment-star far fa-star"
              }
              onClick={() => setStars(3)}
            />
          </span>
          <span>
            <i
              className={
                stars >= 4
                  ? "comment-star fas fa-star"
                  : "comment-star far fa-star"
              }
              onClick={() => setStars(4)}
            />
          </span>
          <span>
            <i
              className={
                stars >= 5
                  ? "comment-star fas fa-star"
                  : "comment-star far fa-star"
              }
              onClick={() => setStars(5)}
            />
          </span>
        </div>

        <div className="my-5 d-flex flex-column gap-2 justify-content-center">
          <Button
            type="submit"
            size="lg"
            className="w-75  m-auto mb-4  bg border-0"
          >
            Yorum Yap
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default Comment;
