import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Route } from "react-router-dom";
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
      // document.title = "Text -Dark Mode";
      // setInterval(() => {
      //   document.title = "Text -Amazing Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Text -App";
      // }, 1500);
    } else {
      setMode({
        color: "light",
      });
      showAlert("Light Mode Enabled", "info");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // document.title = "Text -Light  Mode";
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
        <Route exact path="/about">
          <About mode={mode.color} />
        </Route>
        <Route exact path="/">
          <TextForm
            showAlert={showAlert}
            mode={mode.color}
            text="Try TextUtils - Word Counter, Character Counter"
          />
        </Route>
      </div>
    </>
  );
}

export default App;
