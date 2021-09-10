import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {  Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState({
    color: "light",
  });

  //Alert Auto

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //Toggle dark and light
  function toggle() {
    console.log("You are toggle");
    if (mode.color === "light") {
      setMode({
        color: "dark",
      });
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode({
        color: "light",
      });
      showAlert("Light Mode Enabled", "info");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar
        logo={"TextUtils"}
        aboutText={"About Us"}
        mode={mode.color}
        toggle={toggle}
      />
      <Alert alert={alert} />

      <div className="container my-5">
        <Route exact path="/about" component={About} />
        <Route exact path="/">
          <TextForm showAlert={showAlert} text="Enter Your Text and Analyze" />
        </Route>
      </div>
    </>
  );
}

export default App;
