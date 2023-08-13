import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import AppRoute from "./AppRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" limit={1} autoClose= "1000" />
      <AppRoute />
    </div>
  );
}

export default App;
