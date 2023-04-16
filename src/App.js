// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
// import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>hello people</h1>
      <Intro/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
