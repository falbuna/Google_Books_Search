import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

export default {
    getBooks: function(){
        return axios.get("/api/books");
    },

    search: function(query){
        return axios.get(BASEURL + query);
    }
}