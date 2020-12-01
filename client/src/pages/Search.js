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
        })
        .catch(err => console.log(err));
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
                        image={book.volumeInfo.imageLinks === undefined
                        ? "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                        : `${book.volumeInfo.imageLinks.thumbnail}`
                        }
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.previewLink}
                    />
                )
            })}
            </div>
            )}
    </div>
    )
}

export default Search;