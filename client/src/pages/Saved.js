import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";
import Header from "../components/Header";

function Saved(){

    const [books, setBooks] = useState([]);

    useEffect(() => {
      loadBooks()
    }, [])


    function loadBooks() {
        API.getBooks()
        .then(res => {
        console.log(res.data)
        setBooks(res.data)
        })
        .catch(err => console.log(err));
    };

    function deleteBook(id){
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err))
    }

    return(
  <div>
    <Header />
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-1 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          {books.length ? (
            <div>
            { books.map(book => (
              // console.log(book)
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
          ) : (
            <div className="text-lg leading-6 font-medium space-y-1">
            <h1 className="text-center">No Books to Display</h1>
            </div>
          )}  
        </div>
      </div>
    </div>
</div>
)
}

export default Saved;