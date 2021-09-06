import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar logo={"TextUtils"} aboutText={"About Us"} />

      <div className="container my-5">
        <TextForm text="Enter Your Text and Analyze" />
      </div>

      <About />
    </>
  );
}

export default App;
