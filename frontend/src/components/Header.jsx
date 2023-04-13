import React from "react";
import "../css/style.css";
import SearchButton from "./Search";

const Header = () => {
  return (
    <section className="contain">
      <div className="d-flex flex-row">
        <div className="flex text-center ">
          <h3 className="header">100.000 Avukat Seni Bekliyor.</h3>
          <p>
            Ihtiyacin olan konuda avukatina kolayca ulas, aklindaki sorulara
            cevap bul
          </p>
          <div>
            {/* <ul className='d-flex text-center'>
                <li>Online Gorusme</li><span> | </span>
                <li>Büroda Gorusme</li>
              </ul> */}
          </div>
          <div>
            {" "}
            <SearchButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
