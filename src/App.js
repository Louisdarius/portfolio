import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Top from "./components/Top";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App"> */}
      <Nav />
      <Top />
      <AboutMe />
      <Resume />
      <Projects />
      <Skills />
      <Contacts />
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
