import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import Pop from "./components/Pop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setbtnText] = useState("click for the dark Mode");
  const [pop, setpop] = useState(null);
  const popup = (message, type) => {
    setpop({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setpop(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("click for the light Mode");
      document.body.style.backgroundColor = "black";
      popup("dark mode has been enable", "success");
      document.title = "Textutils - Darkmode";
    } else {
      setMode("light");
      setbtnText("click for the dark Mode");
      document.body.style.backgroundColor = "white";
      popup("light mode has been enable", "success");
      document.title = "Textutils - Lightmode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textuitls"
          mode={mode}
          btntext={btntext}
          toggleMode={toggleMode}
          about="about"
          Home="Home"
        />
        <Pop textt={pop} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/home"
              element={
                <TextForm
                  popup={popup}
                  Heading="Enter your text and convert in all UpperCase"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
