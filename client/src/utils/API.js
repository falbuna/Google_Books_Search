import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

export default {
    getBooks: function(){
        return axios.get("/api/books");
    },

    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },

    deleteBook: function(id){
        return axios.delete("/api/books" + id);
    },

    search: function(query){
        return axios.get(BASEURL + query);
    }
}