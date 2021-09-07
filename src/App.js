import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState({
    color: "light",
  });

  function toggle() {
    console.log("You are toggle");
    if (mode.color === "light") {
      setMode({
        color: "dark",
      });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode({
        color: "light",
      });

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

      <div className="container my-5">
        <TextForm text="Enter Your Text and Analyze" />
      </div>

      <About />
    </>
  );
}

export default App;
