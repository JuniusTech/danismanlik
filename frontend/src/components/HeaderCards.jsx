import React from 'react';
import avukat from "../assets/avukatbul.png";
import randevu from "../assets/hmnrandevu.png";
import olustur from "../assets/randevuolstr.png";



const HeaderCards = () => {
  return (
    <div>
        <h2 className='text-center'> Avukatimol, Nasil Calisiyor?</h2>
        <div className='d-flex justify-content-evenly flex-wrap'>
            <img  src={avukat} alt="avktimOl"/>
            <img  src={randevu} alt="randvual"/>
            <img  src={olustur} alt="randevuolstr"/>
        </div>
    </div>
  )
}

export default HeaderCards;