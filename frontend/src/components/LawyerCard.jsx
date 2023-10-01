import React, { useState, useContext } from "react";
import avatar from "../assets/avatar.jpg";
import SearchDate from "../components/SearchDate";
import { useNavigate } from "react-router-dom";
import telephone from "../assets/telephone.svg";
import web from "../assets/web.svg";
import { Store } from "../Store";
const LawyerCard = ({ lawyers, lawyer }) => {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();
  const [bioText, setBioText] = useState(lawyer?.about);

  const handleReadMoreClick = (lawyerId) => {
    setReadMore((prevReadMore) => !prevReadMore);
    if (!readMore) {
      setBioText(lawyer.about);
    } else {
      setBioText(lawyer.about.slice(0, 130));
    }
  };
  // console.log(lawyers)

  const extraContent = <p className="extra-content"></p>;
  const [lawyerStates, setLawyerStates] = useState({});
  // const [readMore] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <>
      <div className="w-100">
        {lawyers?.map((lawyer) => (
          <div key={lawyer._id} className="d-flex justfiy-content-around m-5 ">
            <div className="search-card-lawyer rounded-4  ">
              <div className="d-flex  ">
                <div className=" d-flex ">
                  <div className="search-card-lawyer-leftbox">
                    <div
                      className="d-flex w-100 search-lawyer-cursor "
                      onClick={() =>
                        navigate(`/lawyer/${lawyer._id}`, { state: lawyer })
                      }
                    >
                      <div className="h-100">
                        <img
                          width="140rem"
                          className="rounded-circle"
                          src={lawyer.picture ? lawyer.picture : avatar}
                          alt="profilepict"
                        />
                      </div>

                      <div className="flex-fill m-2 ">
                        <div className="flex-grow-1 mx-2 ">
                          <span>
                            {" "}
                            <b>
                              {lawyer.name} {lawyer.surname}{" "}
                            </b>{" "}
                          </span>
                          {lawyer.isTick ? (
                            <i className="fa-solid fa-circle-check mx-2 text-warning"></i>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="m-2">{lawyer.branch} avukatı, {lawyer.address?.city}</p>
                        <p className="mx-2">15 Yıllık Deneyim</p>
                        <p className="m-2 star">
                          <span>
                            <i
                              className={
                                lawyer.rating >= 1
                                  ? "fas fa-star"
                                  : lawyer.rating >= 0.5
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                              }
                            />
                          </span>
                          <span>
                            <i
                              className={
                                lawyer.rating >= 2
                                  ? "fas fa-star"
                                  : lawyer.rating >= 1.5
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                              }
                            />
                          </span>
                          <span>
                            <i
                              className={
                                lawyer.rating >= 3
                                  ? "fas fa-star"
                                  : lawyer.rating >= 2.5
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                              }
                            />
                          </span>
                          <span>
                            <i
                              className={
                                lawyer.rating >= 4
                                  ? "fas fa-star"
                                  : lawyer.rating >= 3.5
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                              }
                            />
                          </span>
                          <span>
                            <i
                              className={
                                lawyer.rating >= 5
                                  ? "fas fa-star"
                                  : lawyer.rating >= 4.5
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                              }
                            />
                          </span>
                          <br />

                          <span>{lawyer.reviews.length} yorum</span>
                        </p>
                      </div>
                      <button className="like" >
                        {
                          userInfo?.favoriteLawyers?.includes(lawyer._id) ?

                            <i className="fa-solid fa-heart fa-2xl" style={{ color: "#ff0000", }}></i>
                            :
                            <i className="fa-regular fa-heart fa-2xl"></i>
                        }
                      </button>
                    </div>
                    <div className="mt-2 ">
                      <p> Adres: {lawyer.address?.district} {lawyer.address?.description} {lawyer.address?.town} / {lawyer.address?.city}</p>
                      <h5 className="star">Bio</h5>
                      <p className="extra-content">
                        {readMore ? lawyer.about : lawyer.about?.slice(0, 143)}
                      </p>
                      <h2
                        id={lawyer._id}
                        className="more"
                        onClick={() => handleReadMoreClick(lawyer._id)}
                      >
                        {readMore ? "Daha Az Gör" : "Daha Fazla Gör"}
                      </h2>

                      <div className="p-2 d-flex justify-content-around star">
                        <div className="p-2 w-100 d-flex justify-content-around star">
                          <div className="d-flex align-items-center">
                            <img src={telephone} alt="" />{" "}
                            <span className="px-2">{lawyer.phone}</span>{" "}
                          </div>

                          <div className="right-box-comment px-5">
                            {" "}
                            <i className=" fa-sharp fa-solid fa-comments "></i>
                            <span>Mesaj </span>
                          </div>

                          <div className=" right-box-comment px-5 ">
                            <img src={web} alt="" />{" "}
                            <span>Web Sitesi'ne Git</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-left-border"></div>
                  <SearchDate
                    lawyer={lawyer}
                    setLawyerStates={setLawyerStates}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LawyerCard;
