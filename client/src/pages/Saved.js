import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Book from "../components/Book";

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

            {books.map(book => (
                <Book
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