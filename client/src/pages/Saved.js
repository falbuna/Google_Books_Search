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

    function deleteBook(id){
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err))
    }
    

    return(

        <div>

            {books.map(book => (
                <SavedBooks
                book={book}
                key={book._id}
                title= {book.title}
                authors= {book.authors}
                description = {book.description}
                image = {book.image}
                link = {book.link}
                onClick={() => deleteBook(book._id)}
                />
            ))}

        </div>

)
}

export default Saved;