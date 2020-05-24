import React from "react";
// import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/homePage";
import Wrapper from "./components/Wrapper/wrapper";
import Contact from "./components/Contact/contact";
import Portfolio from "./components/Portfolio/portfolio"

function App() {
  return (
    <div className="App">
    <Wrapper>
     <HomePage />
     <Portfolio />
     <Contact />
    </Wrapper>
  </div>
  );
}

export default App;
