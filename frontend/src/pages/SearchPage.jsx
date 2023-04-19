import React, { useEffect, useState } from "react";
import { Button, ListGroup, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Group 4.svg";
import image from "../assets/bg.jpg";
import axios from "axios";
import "../css/searchcss.css";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = ({ reting }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const branch = sp.get("branch") || "all";
  const query = sp.get("query") || "all";
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

  const [counter, setCounter] = useState(0);

  const handleClick = (btnIndex) => {
    setToggle({ ...toggle, [btnIndex]: !toggle[btnIndex] });
    const numClicked = Object.values({
      ...toggle,
      [btnIndex]: !toggle[btnIndex],
    }).filter((val) => val).length;
    setCounter(numClicked);
  };

  const toggleCount = Object.values(toggle).filter((val) => val).length;
  console.log(toggle);

  const [input, setInput] = useState({});
  const [title, setTitle] = useState({});
  const [lawyers, setLawyers] = useState([]);
  const [branchs, setBranchs] = useState([])

  const handleInput = (e) => {
    const { value, name } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(input)
    setInput({})

    axios.get('https://danis.onrender.com/api/lawyers/search?branch=${branch}&isTick=${isTick}&order=${order}&rating=${rating}')
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
      .get("https://danis.onrender.com/api/branchs")
      .then((response) => {
        setBranchs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [branch, query, rating, order]);

  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Daha Az Gör " : "Daha Fazla Gör  ";
  const extraContent = (
    <p className="extra-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur
      nequeab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad
      quo sint, libero commodi officia aliquam! Maxime.
    </p>
  );
  console.log(lawyers);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-around align-items-center w-100"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div>
                <img src={logo} alt="" />
              </div>

              <div className='d-flex justify-content-center'>
                <select className='select' value={branch} name="branch" onChange={handleInput} title="Branş Seç" id="navbarScrollingDropdown">
                  <option selected >Branş Seç</option>
                  {
                    branchs?.sort((a, b) => a.title.localeCompare(b.title)).map((item) =>
                      <option value={item.title}>{item.title}</option>
                    )
                  }


                </select>

                <Form onSubmit={handleSubmit} className="d-flex w-100 search-form ">
                  <input
                    type="search"
                    placeholder="Örnek: Boşanmak İstiyorum"
                    className="ms-2 search-select"
                    aria-label="Search"
                    id='branchs'
                    name='branchs'
                    value={input?.branchs || ""}
                    onChange={handleInput}

                  />
                  <Button type='submit' variant='outline-light' className='button2 ms-0' >Avukat Ara</Button>
                </Form>
              </div>
              <div className='d-flex ml-auto p-2 '>
                <Button className='button2' variant='outline-light'>Avukat mısınız?</Button>
                <NavDropdown className='border border-2 border-dark rounded-2 ms-3 kayıt' title="KAYIT OL" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="border border-2 border-dark rounded-2 ms-3 "
                  title="GİRİŞ YAP"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='mx-4'>

        <div className='m-5 card-container'>
          <p >Filtreler :</p>
          <Button className={toggle.btn1 ? "btn btn-light btn-outline-warning rounded-5 mx-2 active" : "btn btn-light btn-outline-warning rounded-5 mx-2"} role="button" aria-pressed="true" onClick={() => handleClick("btn1")}>Büroda Görüşmeye Uygun</Button>
          <Button className={toggle.btn2 ? "btn btn-light btn-outline-warning rounded-5 mx-2 active" : "btn btn-light btn-outline-warning rounded-5 mx-2"} role="button" aria-pressed="true" onClick={() => handleClick("btn2")}>Online Görüşmeye Uygun</Button>
          <Button className={toggle.btn3 ? "btn btn-light btn-outline-warning rounded-5 mx-2 active" : "btn btn-light btn-outline-warning rounded-5 mx-2"} role="button" aria-pressed="true" onClick={() => handleClick("btn3")}>Teyit Edilmiş</Button>
          <Button className="btn btn-light btn-outline-warning rounded-5 mx-2" role="button" aria-pressed="true" onClick={() => handleClick("btn4")} >Daha Fazla Filtre <span className="btn rounded-5 active counter">{counter}</span></Button>
        </div>
        <div className="w-50 m-5">
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
        <div>
          {lawyers?.map((user) => (
            <div key={user._id} className=" d-flex justfiy-content-around m-5 ">
              <div className="border border-warning flex-fill m-2 p-2 rounded-4 ">
                <div className="d-flex ">
                  <div className="w-75">
                    <div className="d-flex w-100 ">
                      <div className="h-100">
                        <img width="150rem" src={image} alt="image" />
                      </div>

                      <div className="dflex flex-fill m-2 ">
                        <div className="flex-grow-1 mx-2 ">
                          <span>
                            {" "}
                            <b>
                              {user.name} {user.surname}{" "}
                            </b>{" "}
                          </span>

                          <i class="fa-solid fa-clipboard-check mx-2 text-warning"></i>
                        </div>
                        <div className="d-flex">
                          <div className="mx-2 text-success">
                            {" "}
                            <i className="fa-solid fa-circle-check"></i>{" "}
                            <span>online görüşmeye uygun</span>{" "}
                          </div>
                          <div className="mx-2 text-success">
                            {" "}
                            <i className="fa-solid fa-circle-check"></i>{" "}
                            <span>büroda görüşmeye uygun</span>{" "}
                          </div>
                        </div>
                        <p className="m-2">{user.branchs} avukatı, İstanbul</p>
                        <p className="mx-2">15 Yıllık Deneyim</p>
                        <p className="m-2 star">
                          {getStarReting(user.reting)}

                          <span>12 yorum</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui, consectetur nequeab porro quasi culpa nulla rerum
                        quis minus voluptatibus sed hic ad quo sint, libero
                        commodi officia aliquam! Maxime. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.{" "}
                      </p>

                      {readMore && extraContent}
                      {/* <a
                          className="read-more-link"
                          onClick={() => {
                            setReadMore(!readMore);
                          }}
                        >
                          <h2 className="more">{linkName}</h2>
                        </a> */}

                      <div className="p-2 d-flex justify-content-around star">
                        <div>
                          <i className="fa-solid fa-tty fa-l "></i>{" "}
                          <span>{user.phone}</span>{" "}
                        </div>

                        {readMore && extraContent}
                        <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2 className='more'>{linkName}</h2></a>



                        <div className='p-2 d-flex justify-content-around star'>

                          <div><i className="fa-solid fa-tty fa-l "></i> <span>{user.phone}</span> </div>

                          <div className="right-box px-5"> <i className=" fa-sharp fa-solid fa-comments "></i> <span>Mesaj Gönder</span> </div>

                          <div className="right-box px-5 "><i className="fa-solid fa-globe  "></i> <span>Web Sitesi'ne Git</span> </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className='d-flex justify-content-center p-2 '>
                        <Button variant="outline-light" className="ms-2 rounded-2 button" >Büro</Button>
                        <Button checked="true" className="ms-2 rounded-2 button">Online</Button>
                      </div>
                      <div className='justify-content-center p-2'>
                        <Table borderless='true'>
                          <thead>
                            <tr className="tarih">
                              <i className="fa-solid fa-caret-left fa-xl  mt-3"></i>
                              <th>Bugün <br /> 27 Mart</th>
                              <th>Yarın <br />28 Mart</th>
                              <th>Çrş. <br />29 Mart</th>
                              <th>Prş. <br />30 Mart</th>
                              <i className="fa-solid fa-caret-right fa-xl mt-3"></i>
                            </tr>

                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">10:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">10:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">10:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">10:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">11:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">11:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">11:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">11:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">12:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">12:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">12:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">12:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">13:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">13:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">13:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">13:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">14:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">14:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">14:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">14:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">15:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">15:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">15:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">15:00</Button></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><Button className=" rounded-2 button" size="sm">16:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">16:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">16:00</Button></td>
                              <td><Button className=" rounded-2 button" size="sm">16:00</Button></td>
                            </tr>
                            <tr className="much" >
                              <td colSpan={6}>Daha Fazla Saat Göster
                                <i className="fa-solid fa-caret-down fa-xl mx-2"></i>
                              </td>
                            </tr>
                          </tbody>
                        </Table>


                      </div>
                    </div>
                  </div>

                </div>
                <div className='bg-warning flex-fill w-50 m-2 rounded-2'>
                  <iframe className="h-100 w-100 rounded-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385395.55898476805!2d28.731992141023436!3d41.00550052308483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1680867444542!5m2!1str!2str" loading="lazy"></iframe>

                </div>
              </div >
              )
            })
          }


            </div >
      </div >
      </>
      );
};

      export default SearchPage;
