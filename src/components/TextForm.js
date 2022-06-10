import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.popup("converted to uppercase", "success")
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.popup("converted to lowercase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const intoTitleCase = () => {
    props.popup("converted to Titalcase", "success")
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  };

  const [text,setText] = useState("");
  return (
    <>
      <div className= {`container text-${props.mode === 'dark'?'light':'dark'}`}>
        <h4>{props.Heading} </h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-outline-primary mx-3"
          onClick={handlelowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-outline-primary my-1"
          onClick={intoTitleCase}
        >
          Convert to Titlecase
        </button>
      </div>
      <div className={`container my-2 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h3>here is the text summary</h3>
        <p>
          total number of {text.length>0 ? text.trim().split(" ").length:0} words and total laters {text.trim().length}
        </p>

        <p> Time to read {0.008 * text.split(" ").length} minutes</p>
        <h4>preview</h4>
        <textarea
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
    </>
  );
}
