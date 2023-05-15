import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import axios from "axios";
import "../css/searchcss.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { getError } from "../getError";
import { toast } from "react-toastify";
import LawyerCard from "../components/LawyerCard";

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
  });



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
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/search?page=${page}&query=${query}&branch=${branch}&isTick=${isTick}&order=${order}&rating=${rating}`
      )
      .then((response) => {
        setLawyers(response.data.lawyers);
        setPages(response.data.pages);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, [page, branch, query, isTick, order, rating]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/branchs`)
      .then((response) => {
        setBranchs(response.data);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, [branch, query, rating, order]);







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
        <LawyerCard lawyers={lawyers} />
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
      <Footer />
    </>
  );
};

export default SearchPage;
