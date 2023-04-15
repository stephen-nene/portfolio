// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import BackToTop from "./components/back-top";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>hello people</h1>
      <Intro/>

      <BackToTop/>
    </div>
  );
}

export default App;
