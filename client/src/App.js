import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Saved from "./pages/Saved";
// import Search from "./pages/Search";
import Books from "./components/Books";
import Header from "./components/Header";
// import SearchArea from "./components/SearchArea";

// import Navbar from "./components/Header.js";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Books />
    </Router>
  );
}
export default App;
