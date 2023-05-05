import React from "react";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../css/HomeCarousel.css";
import image from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

 



const HomeCarousel = () => {
    const [lawyers, setLawyers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get(
            `${process.env.REACT_APP_BASE_URI}/api/lawyers`
          )
          .then((response) => {
            setLawyers(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
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

      const groupedLawyers = lawyers.reduce((acc, curr) => {
        const branch = curr.branch;
        if (!acc[branch]) {
          acc[branch] = [];
        }
        acc[branch].push(curr);
        return acc;
      }, {});
    
      const sortedLawyers = Object.keys(groupedLawyers).reduce((acc, curr) => {
        const lawyers = groupedLawyers[curr];
        const sorted = lawyers.sort((a, b) => b.rating - a.rating).slice(0, 3);
        acc[curr] = sorted;
        return acc;
      }, {});
    
      const branches = Object.keys(sortedLawyers);
      const branchGroups = [];
      for (let i = 0; i < branches.length; i += 3) {
        branchGroups.push(branches.slice(i, i + 3));
      }
    
      return (



        
        <div className="my-5 ">
        <h2 className='text-center'> Popüler Branşlar</h2>
        <h3 className='text-center'> Binlerce avukat arasından tercihini yap,hemen online olarak görüş veya soru sor.</h3>
        <div className='d-flex justify-content-evenly flex-wrap'>
           <div className="lawyer-list-container">
           <Carousel interval={null} controls={true} indicators={true} prevIcon={<FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" style={{color:" black"}} />} nextIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} size="xl" style={{color:" black"}} />}>
          {branchGroups.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                {group.map((branch) => (
                  <div>  
                  <div className="branch-title text-center m-5">{branch}
                  </div>
                  <div key={branch} className="lawyer-branch-container">
                    
                    {/* <h2 className='text-center'>{branch}</h2> */}
                      {sortedLawyers[branch].map((user) => (
                        
                        <div key={user._id} className="d-flex justfiy-content-around m-5 ">
             
                              <div className="d-flex  ">
                               
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
                                      <i class=" fa fa-circle-check mx-2 text-warning"></i>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <p className="m-2 star">
                                    {getStarReting(user.rating)}
             
                                    <span>{user.reviews.length} yorum</span>
                                  </p>
                                  <p className="m-2">Adres</p>
                                  
                                  <p className="m-2"><i class="fa fa-map-marker-alt me-2"></i>İstanbul</p>
                                  
                                  
                                  
                                </div>
                                
                                 
                              </div>
                              
                           
                      ))}
                      <div className="d-flex justify-content-center">
                     
                    <button className="btn btn-outline-secondary btn-lg m-3"
                      
                      type="submit"
                      onClick={() =>
                        navigate(
                          `/search?branch=${branch}&query=all&price=all&rating=all&order=newest&page=1`
                        )
                      }
                    >
                      Daha Fazla {branch} Avukatı Bul
                    </button>
                  </div>
                    </div></div>
                 
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        </div>
    </div>
        
      );
    }
export default HomeCarousel;
