import React from "react";
// import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/homePage";
import Wrapper from "./components/Wrapper/wrapper";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

// class App extends Component {
//   render(){
//     return (
    
//       <Wrapper>
//            <Header />
//             <HomePage />
//             <Projects />
//            <Contact />
//             <Footer />
//            </Wrapper>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
    <Wrapper>
    <Header />
     <HomePage />
     <Projects />
     <Contact />
     <Footer />
    </Wrapper>
  </div>
  );
}

export default App;
