import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";

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

            {books.map(book => (
                <SavedBooks
                title= {book.title}
                authors= {book.authors}
                description = {book.description}
                image = {book.image}
                />
            ))}
        </div>

)
}

export default Saved;