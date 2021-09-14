import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Your Text Area , You want to Analyze");

  //Upper case Function
  function handleUpClick() {
    // console.log("Up clicked" + text);
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase", "info");
  }

  //Lower case Function
  function handleDoClick() {
    // console.log("Down clicked" + text);
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "info");
  }
  //clear Function
  function handleCleClick() {
    // console.log("clear clicked" + text);
    setText("");
    props.showAlert("Cleared text", "info");
  }

  //Titleclick Function
  function handleTiClick() {
    function titleCase(str) {
      let d = str
        .toLowerCase()
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
      return d.join(" ");
    }

    setText(titleCase(text));
    props.showAlert("converted to titlecase", "info");
  }

  //Capital case Function

  function handleCapClick() {
    function capitalCase(cap1) {
      let f =
        cap1.toLowerCase().charAt(0).toUpperCase() +
        cap1.slice(1).toLowerCase();

      return f;
    }
    setText(capitalCase(text));
    props.showAlert("converted to capitalcase", "info");
  }

  //Handle Copy click
  function handleCopyClick() {
    let copyText = document.getElementById("mybox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "info");
  }

  //Remove extra spaces
  function handleRemoveSpaceClick() {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "info");
  }
  //HandleChange Function
  function handleChange(e) {
    setText(e.target.value);

    // console.log("handlechange");
  }
  return (
    <>
      <div>
        <h1>{props.text}</h1>
        <textarea
          className="form-control"
          placeholder="Your Text Area"
          rows="5"
          value={text}
          onChange={handleChange}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#607d8b3d" : "white",
          }}
          // onBlur=()  it is mainly used for , not direct updating}
        ></textarea>
      </div>

      <div>
        <hr />

        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words & {text.length} characters
        </p>
        <p>
          Read :
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.005}
          &nbsp; WPM
        </p>
        <h2> Preview</h2>
        <textarea
          className="form-control"
          rows="5"
          value={text.length > 0 ? text : "Nothing to Preview"}
          id="mybox"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#607d8b3d" : "white",
          }}
        >
          {" "}
        </textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 "
          onClick={handleUpClick}
        >
          Set To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleDoClick}
        >
          Set To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleCleClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleTiClick}
        >
          Set To Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleCapClick}
        >
          Set To Capital Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleRemoveSpaceClick}
        >
          Remove Extra Space
        </button>
      </div>
    </>
  );
};

export default TextForm;
