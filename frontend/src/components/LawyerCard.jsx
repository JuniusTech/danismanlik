import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import image from "../assets/bg.jpg";
import avatar from "../assets/avatar.jpg";
import SearchDate from "../components/SearchDate";
import { useNavigate } from 'react-router-dom';

const LawyerCard = ({ lawyers }) => {
    const navigate = useNavigate();
    const handleReadMoreClick = (lawyerId) => {
        setLawyerStates((prevStates) => ({
            ...prevStates,
            [lawyerId]: !prevStates[lawyerId],
        }));
    };
    console.log(lawyers)

    const extraContent = <p className="extra-content"></p>;
    const [lawyerStates, setLawyerStates] = useState({});
    const getStarReting = (reting) => {
        let filledStars = "";
        let emptyStars = "";
        for (let i = 0; i < reting; i++) {
            filledStars += "★";
        }
        for (let i = 0; i < 5 - reting; i++) {
            emptyStars += "☆";
        }
        return filledStars + emptyStars;
    };
    const [readMore, setReadMore] = useState(false);

    const lawyer = (user) => {
        navigate("/${user._id}", { state: user });

        console.log(user._id);
    };

    function lawyerRate(intRate) {
        const decimalRate = intRate.tofixed(1)
        return (decimalRate)

        console.log(lawyerRate)
    }
    return (
        <>
            <div className="w-100">
                {lawyers?.map((user) => (
                    <div key={user._id} className="d-flex justfiy-content-around m-5 ">
                        <div className="search-card-lawyer rounded-4  ">
                            <div className="d-flex  ">
                                <div className=" d-flex ">
                                    <div className="w-100 ">
                                        <div
                                            className="d-flex w-100 search-lawyer-cursor "
                                            onClick={() => lawyer(user)}
                                        >
                                            <div className="h-100">
                                                <img
                                                    width="150rem"
                                                    src={user.isTick ? image : avatar}
                                                    alt="profilepict"
                                                />
                                            </div>

                                            <div className="flex-fill m-2 ">
                                                <div className="flex-grow-1 mx-2 ">
                                                    <span>
                                                        {" "}
                                                        <b>
                                                            {user.name} {user.surname}{" "}
                                                        </b>{" "}
                                                    </span>
                                                    {user.isTick ? (
                                                        <i className="fa-solid fa-circle-check mx-2 text-warning"></i>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <p className="m-2">{user.branch} avukatı, İstanbul</p>
                                                <p className="mx-2">15 Yıllık Deneyim</p>
                                                <p className="m-2 star">
                                                    {getStarReting(user.rating)}

                                                    <span>{user.reviews.length} yorum</span>
                                                </p>
                                            </div>
                                            <button className="like">
                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                            </button>
                                        </div>
                                        <div className="mt-2 ">
                                            <p> Adres: dad adsad adasd asdasd asdasd asd asd d</p>
                                            <h5 className="star">Bio</h5>
                                            <p className="extra-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Qui, consectetur nequeab porro quasi culpa nulla
                                                rerum quis minus voluptatibus sed hic ad quo
                                            </p>
                                            {readMore && extraContent}
                                            {lawyerStates[user._id] && (
                                                <p className="extra-content">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Qui, consectetur nequeab porro quasi culpa
                                                    nulla rerum quis minus voluptatibus sed hic ad quo
                                                    sint, libero commodi officia aliquam! Maxime.
                                                </p>
                                            )}
                                            <h2
                                                id={user._id}
                                                className="more"
                                                onClick={() => handleReadMoreClick(user._id)}
                                            >
                                                {lawyerStates[user._id]
                                                    ? "Daha Az Gör"
                                                    : "Daha Fazla Gör"}
                                            </h2>

                                            <div className="p-2 d-flex justify-content-around star">
                                                <div className="p-2 d-flex justify-content-around star">
                                                    <div>
                                                        <i className="fa-solid fa-tty fa-l"></i>{" "}
                                                        <span className="px-2">{user.phone}</span>{" "}
                                                    </div>

                                                    <div className="right-box-comment px-5">
                                                        {" "}
                                                        <i className=" fa-sharp fa-solid fa-comments "></i>{" "}
                                                        <span>Mesaj Gönder</span>{" "}
                                                    </div>

                                                    <div className="right-box-comment px-5 ">
                                                        <i className="fa-solid fa-globe  "></i>{" "}
                                                        <span>Web Sitesi'ne Git</span>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-left-border"></div>
                                    <SearchDate user={user} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LawyerCard