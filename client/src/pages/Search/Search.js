import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Books from ".books";
import SavedBooks from "../../components/SavedBooks";

function Search() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Books />
      <Route exact path={["/", "/search"]} component={Books}>
        <Search />
      </Route>
      <Route exact path="/saved" component={SavedBooks}>
        <Saved />
      </Route>
    </Router>
  );
}
export default Search;
