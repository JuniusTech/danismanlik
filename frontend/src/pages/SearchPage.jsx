import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";
import image from "../assets/bg.jpg";
import axios from "axios";
import "../css/searchcss.css";
import { useLocation, useNavigate } from "react-router-dom";

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
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/search?branch=${branch}&query=${query}&isTick=${isTick}&order=${order}&rating=${rating}`
      )
      .then((response) => {
        setLawyers(response.data.lawyers);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [branch, query, isTick, order, rating]);

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

  const [moreHour, setMoreHour] = useState({});


  const [hours, setHours] = useState([...Array(5).keys()].map(i => `${i + 9}:00`));
  const [lawyerHours, setLawyerHours] = useState({});

  const handleMoreHour = (lawyerId) => {
    setMoreHour((prevStates) => ({
      ...prevStates,
      [lawyerId]: !prevStates[lawyerId],
    }));
    if (moreHour[lawyerId]) {
      setLawyerHours((prevStates) => ({
        ...prevStates,
        [lawyerId]: hours.slice(0, 6),
      }));
    } else {
      setLawyerHours((prevStates) => ({
        ...prevStates,
        [lawyerId]: [...Array(10).keys()].map(i => `${i + 9}:00`),
      }));
    }
  };

  const toggleHours = (showMore) => {
    if (showMore) {
      setHours([...Array(10).keys()].map(i => `${i + 9}:00`));
    } else {
      setHours([...Array(5).keys()].map(i => `${i + 9}:00`));
    }
  };

  const today = new Date();
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate());
  const lastDay = new Date(today);
  lastDay.setDate(firstDay.getDate() + 3);

  const days = [];
  for (let i = 0; i < 4; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;
    console.log("formattedDate", formattedDate);
    days.push(formattedDate);
  }
  const [dateRange, setDateRange] = useState([firstDay, lastDay]);

  const handlePrevWeek = (lawyerId) => {
    const firstDay = new Date(dateRange[0]);
    firstDay.setDate(firstDay.getDate() - 4);

    const today = new Date();
    if (firstDay < today + 1) {
      firstDay = firstDay.setDate(today.getDate());
    }
    const lastDay = new Date(dateRange[0]);
    lastDay.setDate(lastDay.getDate() - 1);
    if (lastDay < today) {
      lastDay = new Date(today.getTime() - 1);
    }
    setDateRange([firstDay, lastDay]);
  };



  const handleNextWeek = (lawyerId) => {
    const firstDay = new Date(dateRange[1]);
    firstDay.setDate(firstDay.getDate() + 1);
    const lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 3);
    setDateRange([firstDay, lastDay]);
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

  function isAvailable(lawyer, day, hour, month) {
    return lawyer.dates.some(date => date.day === day && date.month === month && date.hour === hour);  //! "12:00" yerine date.hour yazılacak. Fakat veri tabanına saatler el ile 12:00 yerine 12.00 yazılmış. Bu yüzden saatlerin hepsi false dönüyor.
  }

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

          <Form onSubmit={handleSubmit} className="d-flex w-75 search-form ">
            <input
              type="search"
              placeholder="İsme göre ara"
              className="search-select-input"
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
              className="search-inputbutton border-0 text-white w-25 "
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
                          <img width="150rem" src={image} alt="profilepict" />
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
                              <i class="fa-solid fa-circle-check mx-2 text-warning"></i>
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
                          rerum quis minus voluptatibus sed hic ad quo sint,
                          libero commodi officia aliquam! Maxime. Lorem ipsum
                          dolor sit amet consectetur adipisicing elit.
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

                    <div className="right-box">
                      <div className="justify-content-center p-2">
                        <Table borderless="true">
                          <thead>
                            <tr className="tarih">
                              <td>
                                <button
                                  id={user._id}
                                  className="rounded-5 mt-3 search-caret"
                                  onClick={() => {
                                    handlePrevWeek(user._id);
                                  }} disabled={new Date(dateRange[0]) < new Date()} >
                                  <i className="fa-solid fa-caret-left fa-sm mx-2" ></i>
                                </button>
                              </td>
                              {days.map((day, index) => {
                                const currentDate = new Date(dateRange[0]);
                                currentDate.setDate(
                                  dateRange[0].getDate() + index
                                );
                                const dayOfMonth = currentDate.getDate();
                                const month = currentDate.toLocaleString(
                                  "default",
                                  {
                                    month: "short",
                                  }
                                );
                                const dayOfWeek = currentDate.toLocaleString(
                                  "default",
                                  {
                                    weekday: "short",
                                  }
                                );
                                let label = "";
                                if (dayOfMonth === today.getDate() && month === today.toLocaleString("default",
                                  {
                                    month: "short",
                                  })) {
                                  label = "Bugün";
                                } else if (dayOfMonth === today.getDate() + 1 && month === today.toLocaleString("default",
                                  {
                                    month: "short",
                                  })) {
                                  label = "Yarın";
                                } else {
                                  label = dayOfWeek;
                                }

                                return (
                                  <th key={day} className="text-center">
                                    {label} <br />
                                    {dayOfMonth} {month}
                                  </th>
                                );
                              })}
                              <td>
                                <button
                                  id={user._id}
                                  className="rounded-5 mt-3 search-caret"
                                  onClick={() => {
                                    handleNextWeek(user._id);
                                  }}>
                                  <i className="fa-solid fa-caret-right fa-sm mx-2" ></i>
                                </button>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {/*  // ! saatler sabit. hafta ilerleyince ilerlemiyor */}
                            { }
                            {hours.map((toggleHours) => (
                              <tr key={user._id}>
                                <td></td>
                                {days.map((day) => (
                                  <td >
                                    <button
                                      id={user._id}
                                      className={isAvailable(user, day, toggleHours) ? "search-hoursbutton selected rounded-2" : "search-hoursbutton rounded-2"}
                                      size="sm">
                                      {toggleHours}
                                    </button>
                                  </td>
                                ))}
                              </tr>
                            ))}

                            <tr className="much">
                              <td
                                id={user._id}
                                onClick={() => {
                                  handleMoreHour(user._id);
                                  toggleHours(!moreHour[user._id]);
                                }}
                                colSpan={6}
                              >
                                {moreHour[user._id] ? "Daha Az Saat Göster" : "Daha Fazla Saat Göster"}
                                {moreHour[user._id] ? (
                                  <i className="fa-solid fa-caret-up fa-xl mx-2"></i>
                                ) : (
                                  <i className="fa-solid fa-caret-down fa-xl mx-2"></i>
                                )}
                              </td>
                            </tr>

                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
