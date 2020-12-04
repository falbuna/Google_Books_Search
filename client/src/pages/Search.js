import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import API from "../utils/API";
import SearchedBooks from "../components/SearchedBooks";
import Header from "../components/Header";

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
        .then(res => {console.log(res.data.items) 
            setBooks(res.data.items)
        })
        .catch(err => console.log(err));
    }


    return(
    <div>
    <Header />
    <div className="block p-4 border-4">
            <SearchBar
                value={bookSearch}
                onChange={handleInputChange}
            />
            <SearchButton className="object-center"
                onClick={handleSearch}
            />
    </div>


    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-1 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">    
            {!books.length ? (
                <div className="text-lg leading-6 font-medium space-y-1">
                <h1 className="text-center">No Books to Display</h1>
                </div>
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
    </div>
    </div>
    </div>
    )
}

export default Search;