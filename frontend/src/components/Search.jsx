import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getError } from "../getError";
import { toast } from "react-toastify";

const Search = () => {
  const [branchs, setBranchs] = useState([]);
  const [branch, setBranch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/branchs`)
      .then((response) => {
        setBranchs(response.data);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, [branch]);

  return (
    <div>
      <form className="search-form">
        <select
          className="search-select"
          value={branch}
          name="branch"
          onChange={(e) => setBranch(e.target.value)}
          title="Branş Seç"
          id="navbarScrollingDropdown"
        >
          <option defaultValue="all">Branş Seç</option>
          {branchs
            ?.sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => (
              <option key={item._id} value={item.title}>
                {item.title
                  .split(' ')
                  .map((word, index) => {
                    if (index === 0) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    } else {
                      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                    }
                  })
                  .join(' ')}
              </option>
            ))}
        </select>
        <button
          className="home-button text-white"
          type="submit"
          onClick={() =>
            navigate(
              `/search?branch=${branch}&query=all&price=all&rating=all&order=newest&page=1`
            )
          }
        >
          Avukat Ara
        </button>
      </form>
    </div>
  );
};

export default Search;
