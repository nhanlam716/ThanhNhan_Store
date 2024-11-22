import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AllRouter from "./routers/AllRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AllRouter />
      <ToastContainer />
    </>
  );
}

export default App;
