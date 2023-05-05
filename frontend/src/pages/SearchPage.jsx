import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";
import image from "../assets/bg.jpg";
import avatar from "../assets/avatar.jpg"
import axios from "axios";
import "../css/searchcss.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import SearchDate from "../components/SearchDate";

const SearchPage = ({ reting }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const branch = sp.get("branch") || "all";
  const [query, setQuery] = useState(sp.get("query") || "");
  const page = sp.get("page") || 1;
  const order = sp.get("order") || "newest";
  const isTick = sp.get("isTick") || "all";
  const rating = sp.get("rating") || "all";

  const getFilterUrl = (filter, skipPathname) => {
    const filterPage = filter.page || page;
    const filterBranch = filter.branch || branch;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterIsTick = filter.isTick || isTick;
    const sortOrder = filter.order || order;
    return `${skipPathname ? "" : "/search?"
      }branch=${filterBranch}&query=${filterQuery}&isTick=${filterIsTick}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  const [toggle, setToggle] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
  });

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

  const [input, setInput] = useState("");
  const [title, setTitle] = useState({});
  const [lawyers, setLawyers] = useState([]);
  const [branchs, setBranchs] = useState([]);
  const [pages, setPages] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      getFilterUrl({
        query: input,
        page: 1,
      })
    );
    setQuery(input);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/search?${page}&query=${query}&branch=${branch}&isTick=${isTick}&order=${order}&rating=${rating}`
      )
      .then((response) => {
        setLawyers(response.data.lawyers);
        setPages(response.data.pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, branch, query, isTick, order, rating]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/branchs`)
      .then((response) => {
        setBranchs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [branch, query, rating, order]);

  const [readMore, setReadMore] = useState(false);

  const extraContent = <p className="extra-content"></p>;
  const [lawyerStates, setLawyerStates] = useState({});

  const handleReadMoreClick = (lawyerId) => {
    setLawyerStates((prevStates) => ({
      ...prevStates,
      [lawyerId]: !prevStates[lawyerId],
    }));
  };



  const handleNew = () => {
    if (toggle.btn1 === false) {
      navigate(getFilterUrl({ order: "newest" }));
      toggle.btn1 = true;
    } else {
      navigate(getFilterUrl({ order: "barNo" }));
      toggle.btn1 = false;
    }
  };

  const handleTick = () => {
    if (toggle.btn2 === false) {
      navigate(getFilterUrl({ isTick: true }));
      toggle.btn2 = true;
    } else {
      navigate(getFilterUrl({ isTick: "all" }));
      toggle.btn2 = false;
    }
  };
  const handleRated = () => {
    if (toggle.btn3 === false) {
      navigate(getFilterUrl({ order: "toprated" }));
      toggle.btn3 = true;
    } else {
      navigate(getFilterUrl({ order: "newest" }));
      toggle.btn3 = false;
    }
  };
  // const selected = selected; use state kullanarak seçili saatleri üstü çizili konuma getir



  return (
    <>
      <Navbar />
      <div className="search-card-container ">
        <div className="d-flex justify-content-center w-75 m-auto pb-4">
          <select
            className="search-select"
            value={branch}
            name="branch"
            onChange={(e) => {
              navigate(getFilterUrl({ branch: e.target.value }));
            }}
            title="Branş Seç"
            id="navbarScrollingDropdown"
          >
            <option defaultValue="all">Branş Seç</option>
            {branchs
              ?.sort((a, b) => a.title.localeCompare(b.title))
              .map((item) => (
                <option key={item._id} value={item.title}>
                  {item.title}
                </option>
              ))}
          </select>

          <Form onSubmit={handleSubmit} className="d-flex search-form ">
            <input
              type="search"
              placeholder="İsme göre ara"
              className=" search-select-input"
              aria-label="Search"
              id="branchs"
              name="branchs"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              type="submit"
              variant="outline-light"
              className="search-inputbutton border-0 text-white  "
            >
              Avukat Ara
            </button>
          </Form>
        </div>
        <div className="mx-5 ">
          <p>Filtreler :</p>
          <Button
            className={
              toggle.btn1
                ? "btn btn-light rounded-5 mx-2 search-active"
                : "btn btn-light border border-2 rounded-5 mx-2"
            }
            role="button"
            aria-pressed="true"
            onClick={() => handleNew()}
          >
            En Yeniler
          </Button>
          <Button
            className={
              toggle.btn2
                ? "btn btn-light rounded-5 mx-2 search-active"
                : "btn btn-light border border-2  rounded-5 mx-2"
            }
            role="button"
            aria-pressed="true"
            onClick={() => handleTick()}
          >
            Teyit Edilmiş
          </Button>
          <Button
            className={
              toggle.btn3
                ? "btn btn-light rounded-5 mx-2 search-active"
                : "btn btn-light border border-2  rounded-5 mx-2"
            }
            role="button"
            aria-pressed="true"
            onClick={() => handleRated()}
          >
            Puana Göre Sırala
          </Button>
        </div>
        <div className="mx-5">
          <h2 className="mb-4">
            {" "}
            {Object.keys(title).length ? `${title?.branch} Avukatı` : ""}{" "}
          </h2>
          <p>
            Aramanızla eşleşen {lawyers.length} {branch} avukatı mevcut.
            Listelenen avukatlar Online Görüşmeye Uygundur ve Baro Kaydı kontrol
            edilmiştir.
          </p>
        </div>
        <div className="w-100">
          {lawyers?.map((user) => (
            <div key={user._id} className="d-flex justfiy-content-around m-5 ">
              <div className="search-card-lawyer rounded-4 ">
                <div className="d-flex  ">
                  <div className=" d-flex ">
                    <div className="w-100 ">
                      <div className="d-flex w-100 ">
                        <div className="h-100">
                          <img width="150rem" src={user.isTick ?
                            image
                            :
                            avatar
                          } alt="profilepict" />
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
                    <SearchDate />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          {[...Array(pages).keys()].map((x) => (
            <Link
              key={x + 1}
              className="mx-1"
              to={getFilterUrl({ page: x + 1 })}
            >
              <Button
                className={Number(page) === x + 1 ? "text-bold" : ""}
                variant="light"
              >
                {x + 1}
              </Button>
            </Link>
          ))}
        </div>
      </div >
    </>
  );
};

export default SearchPage;
