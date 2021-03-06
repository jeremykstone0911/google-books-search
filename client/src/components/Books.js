import React, { Component } from "react";
import SearchArea from "./SearchArea";
import request from "superagent";
import API from "../utils/API";
import { request } from "express";
import Header from "./Header";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.searchField })
      .then((data) => {
        console.log(data);
      });
  };
  // Method that sets state when input is typed into the search field
  handleSearch = (e) => {
    console.log();
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <Header />
      </div>
    );
  }
}

export default Books;
