import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar logo={"TextUtils"} aboutText={"About Us"} />

      <div className="container my-5">
        <TextForm text="Enter Your Text and Analyze" />
      </div>
    </>
  );
}

export default App;
