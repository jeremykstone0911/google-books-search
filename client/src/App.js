import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Books from "./components/Books";
import Header from "./components/Header";
// import SearchArea from "./components/SearchArea";

// import Navbar from "./components/Header.js";

function App() {
  return (
    <Router>
      <Header />
      <Books />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/.pages/Search/" component={Books} />
        <Route exact path="/.pages/Saved/" component={SavedBooks} />
      </Switch>
    </Router>
  );
}

export default App;
