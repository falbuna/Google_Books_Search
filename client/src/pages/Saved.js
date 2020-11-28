import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Saved(){

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
      }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => 
        setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
    

    return(

        <div>
            <h1>Saved Books</h1>

        </div>
    )
}

export default Saved;