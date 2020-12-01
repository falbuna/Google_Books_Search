import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import API from "../utils/API";
import SearchedBooks from "../components/SearchedBooks";

function Search(){
    const[books, setBooks] = useState([]);
    const[bookSearch, setBookSearch] = useState("");
    

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
    }

    const handleSearch = event => {
        event.preventDefault();
        API.search(bookSearch)
        .then(res => { setBooks(res.data.items)
            console.log(res.data.items)
        })
        .catch(err => console.log(err));
    } 

    function handleSaveBook(event){
        event.preventDefault();
        console.log("I've been clicked!")
        console.log( event.target.id )
        console.log(Bookinformation(event.target.id))
        
        // API.saveBook({
        //     title: title,
        //     image: image,
        //     authors: authors,
        //     description: description,
        //     link: link
        // })
    }

    function Bookinformation(event){
        return(books[event])
    }

    return(

    <div>
            <SearchBar
                value={bookSearch}
                onChange={handleInputChange}
            />
            <Button
                onClick={handleSearch}
            />
            {!books.length ? (
                <h1 className="text-center">No Books to Display</h1>
            ) : (
            <div>
            {books.map((book, index) => {
                return(
                    <SearchedBooks 
                        book={book}
                        key={index}
                        index={index}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.previewLink}
                        // saveBook={handleSaveBook}
                    />
                )
            })}
            </div>
            )}
    </div>
    )
}

export default Search;