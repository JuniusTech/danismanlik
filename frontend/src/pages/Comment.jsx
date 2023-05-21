import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/comment.css"


const Comment = ({
    show,
    setShowComment,
    id
}) => {
    const user = "ahmet";
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState();
    const { dispatch } = useContext(Store);
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_URI}/api/lawyers/${id}/reviews`,
                {
                    name,
                    comment,
                    rating,
                }
            );
            toast.success("Yorum başarılı bir şekilde yapıldı");
            dispatch({ type: "LAWYER_SIGNIN", payload: data });
            localStorage.setItem("lawyerInfo", JSON.stringify(data));
            setShowComment(false);
            navigate("/${id}");
        } catch (error) { }
    };

    const fillStar = (rating) => {
        let stars = document.querySelectorAll('.comment-star');
        for (let i = 0; i < stars.length; i++) {
            if (i < rating) {
                stars[i].classList.add('filled');
            } else {
                stars[i].classList.remove('filled');
            }
        }
        console.log(rating)
    }
    return (

        <Modal
            show={show}
            onHide={() => setShowComment(false)}
            className="px-5 comment  m-auto p-5"
            animation={false}
            centered
        >
            <Form className="signInForm" onSubmit={submitHandler}>
                <h1>Avukatınızı değerlendiriniz </h1>
                <form action="" method="post" className='d-flex w-75 justify-content-center '>
                    <div className=' justify-content-around w-10'>
                        <button className="lawyer-rating-button rounded-circle">{user.charAt(0).toUpperCase()}</button>
                    </div>
                    <div className='justify-content-around w-75' >
                        <textarea className='mx-3 ' name="comment" placeholder='Lütfen yorum giriniz' id="" cols="45" rows="3"></textarea>
                    </div>
                </form>
                <div className='d-flex justify-content-center align-items-center w-10'>
                    <p className='m-2'>Puan:</p>
                    <p class="m-2 comment-star" onclick={fillStar(1)}>&#9734;</p>
                    <p class="m-2 comment-star" onclick={fillStar(2)}>&#9734;</p>
                    <p class="m-2 comment-star" onclick={fillStar(3)}>&#9734;</p>
                    <p class="m-2 comment-star" onclick={fillStar(4)}>&#9734;</p>
                    <p class="m-2 comment-star" onclick={fillStar(5)}>&#9734;</p>

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
    )
}

export default Comment