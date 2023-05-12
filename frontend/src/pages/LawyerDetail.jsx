import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchDate from '../components/SearchDate'
import image from "../assets/bg.jpg";
import avatar from "../assets/avatar.jpg"
import "../css/lawyercard.css"
import { useLocation } from 'react-router-dom';
import { Link } from "react-scroll";
import Footer from '../components/Footer';
import telephone from "../assets/telephone.svg"
import web from "../assets/web.svg"

const LawyerDetail = () => {
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

  const { state: user } = useLocation();

  console.log(user)


  const [readMore, setReadMore] = useState(false);

  const extraContent = <p className="extra-content"></p>;
  const [lawyerStates, setLawyerStates] = useState({});

  const handleReadMoreClick = (lawyerId) => {
    setLawyerStates((prevStates) => ({
      ...prevStates,
      [lawyerId]: !prevStates[lawyerId],
    }));
  };
  console.log(user)

  function formatDate(dateString) {
    const formattedDate = new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateString));
    return (formattedDate)
  }

  function lawyerRate(intRate) {
    const decimalRate = intRate.tofixed(1)
    return (decimalRate)

    console.log(lawyerRate)
  }



  let navLinks = ["Özgeçmiş", "Adres", "Hizmetler", "Yorumlar"];
  const [isActive, setIsActive] = useState(0)
  return (
    <>
      <Navbar />
      <p className='mx-5'>Ana Sayfa</p>
      <div className='lawyer-card-container'>
        <div>
          <div className="lawyer-card rounded-4 d-flex ">
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

                    <span>{user.reviews?.length} yorum</span>
                  </p>
                </div>
                <button className="like">
                  <i className="fa-regular fa-heart fa-2xl"></i>
                </button>
              </div>
              <div className="mt-2 ">



                <div className="p-2 d-flex justify-content-start star">
                  <div className="p-2 d-flex justify-content-start star">
                    <div className='lawyer-card-phone'>
                      <img src={telephone} alt="" />{" "}
                      <span className="px-2">{user.phone}</span>{" "}
                    </div>

                    <div className="right-box-comment lawyer-card-phone ">
                      {" "}
                      <i className=" fa-sharp fa-solid fa-comments "></i>{" "}
                      <span>Mesaj Gönder</span>{" "}
                    </div>

                    <div className="right-box-comment lawyer-card-phone">
                      <img src={web} alt="" />{" "}
                      <span>Web Sitesi'ne Git</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className='lawyer-detail-navbar'>
                <ul className="lawyer-detail-navbar-links">
                  {navLinks.map((item, index) => (
                    <li
                      className={isActive}
                      key={index}
                      onClick={() => setIsActive(index)}
                    >
                      <Link
                        className="detail-link"
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={300}
                      >
                        {item}
                        <div />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
          <div id='Özgeçmiş' className="lawyer-card rounded-4 mt-5 ">
            <h3 >Hakkımda</h3>
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
              className="lawyer-detail-more"
              onClick={() => handleReadMoreClick(user._id)}
            >
              {lawyerStates[user._id]
                ? "Daha Az Gör"
                : "Daha Fazla..."}
            </h2>
            <ul >
              <h3>Eğitimler</h3>
              <li >
                Lorem ipsum dolor
              </li>
              <li >
                Lorem ipsum dolor
              </li>
            </ul>
            <ul >
              <h3>Deneyimler</h3>
              <li >
                Lorem ipsum dolor
              </li>
              <li >
                Lorem ipsum dolor
              </li>
            </ul>
            <ul >
              <h3>Bildiğim Diller</h3>
              <li >
                Lorem ipsum dolor
              </li>
              <li >
                Lorem ipsum dolor
              </li>
            </ul>
          </div>
          <div className="lawyer-card d-flex rounded-4 mt-5 ">
            <div id="Adres" className='w-75'>
              <h3>Adres</h3>
              <p> Adres: dad adsad adasd asdasd asdasd asd asd d</p>
              <p>En Yakın Uygunluk
                <button className="rounded-3 mt-3 search-hoursbutton">13 Mayıs</button>
                <button className="rounded-3 mt-3 search-hoursbutton">13 Mayıs</button>
                <button className="rounded-3 mt-3 search-hoursbutton">13 Mayıs</button>
              </p>
            </div>
            <div className='w-25'>
              <p >Harita</p>
            </div>

          </div>
          <div id='Hizmetler' className="lawyer-card rounded-4 mt-5 ">
            <h3 >Hizmetler</h3>


            <ul >
              <li >
                İcra takibi
              </li>
              <li >
                Rehin ve ipotek malların paraya çevirilmesi
              </li>
              <li >
                Karşılıksız çek davaları
              </li>
            </ul>


          </div>
          <div id='Yorumlar' className="lawyer-card rounded-4 mt-5 ">

            <div className="lawyer-card-commentshead">
              <h3>Yorumlar</h3>
              <div className='d-flex align-items-center lawyer-card-comments-body'>
                <div className='w-10'>
                  <button className='lawyer-rating-button'>{user.rating}.0</button>
                </div>
                <div className='p-0 w-25'>
                  <p className="m-2 star">
                    {getStarReting(user.rating)}
                  </p>
                  <p>Genel Skor</p>
                  <span>{user.reviews?.length} yorum </span>
                </div>
                <div className=' mx-5'>
                  <p className='lawyer-card-comments-box mx-5 d-flex align-items-center w-100 rounded-4 m-auto '>
                    <i className="fa-solid fa-circle-check mx-2 text-warning"></i>
                    <p>
                      Tüm yorumlar moderatörlerden oluşan profesyonel bir ekip tarafından incelenir ve adil, kurallara uygun bir şekilde yayınlanır.
                    </p>
                  </p>
                </div>
              </div>

              <div className="lawyer-card-user-comment">
                {user.reviews?.map((comment) => (
                  <>
                    <div className='d-flex justify-content-between w-100'>
                      <div className='d-flex justify-content-around w-10'>
                        <button className="lawyer-rating-button rounded-circle">{comment.name.charAt(0).toUpperCase()}</button>
                      </div>
                      <div className='justify-content-around w-75' >
                        <h4>{comment.name}</h4>
                        <h4>{formatDate(comment.createdAt)}</h4>
                        <h4>{comment.comment}</h4>
                      </div>
                      <div className='d-flex justify-content-around w-10'>
                        <p className='m-2'>Puan:</p>
                        <p className="m-2 star">
                          {getStarReting(user.rating)}
                        </p>
                      </div>
                    </div>

                  </>
                ))}

              </div>
            </div>
            <button className="rounded-3 mt-3 lawyer-comment-button d-flex justify-content-center">Tüm Yorumları Göster</button>
          </div>

        </div>

        <div className='lawyer-card-dates'>
          <h1 className='lawyer-card-dates-top'>Randevu Al</h1>
          <div className='d-flex justify-content-between m-4'>
            <h2>Adres</h2>
            <h2
              id={user._id}
              className="more"
              onClick={() => handleReadMoreClick(user._id)}
            >
              Haritada Gör
            </h2>

          </div>
          <p className='mx-4'> Adres: dad adsad adasd asdasd asdasd asd asd d</p>
          <SearchDate user={user} />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default LawyerDetail