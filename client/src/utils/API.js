import request from "superagent";

export default {
  getBooks: (query) => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  saveBook: (object) => {
    console.log(object);
    return axios.post("/api/books", object);
  },
  getSavedBooks: () => {
    return axios.get("/api/books");
  },
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
};
