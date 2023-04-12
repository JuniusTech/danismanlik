import React from 'react';
import  logo from '../assets/logo.svg';


const Navbar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <div>
              
              <img src={logo} alt='logo' style={{height: '50px'}}/>
              </div>
  
              <div className='d-flex text-black align-items-center'>
                  <button className='ms-2 btn btn-outline-light' style={{backgroundColor: '#A97900'}}>Avukat misiniz?
                  </button>
                  <button className='ms-2 btn btn-outline-black' style={{border: '1px solid black'}} >KAYIT OL
                  </button>
                  <button className='ms-2 btn btn-outline-black' style={{border: '1px solid black'}} >GiRiS YAP
                  </button>
              </div>
          </div>
      
      
      </nav>
      </>
    )
  }
  
  export default Navbar