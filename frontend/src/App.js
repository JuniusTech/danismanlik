import React from "react";
import LoginForm from "./components/LoginForm"



import Header from "./components/Header";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCards from "./components/HeaderCards";
// import './css/style.css';

function App() {
  return (
  <div className="App">
    <LoginForm />
  </div>
  )
  return <div className="App">
    <Navbar/>
    <Header/>
    <HeaderCards />
  </div>;
}

export default App;