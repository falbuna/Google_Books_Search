import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import API from "../utils/API";
import BookTable from "../components/BookTable";

function Search(){
    const[books, setBooks] = useState([]);
    const[bookSearch, setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.search(bookSearch)
        .then(res => { setBooks(res.data.items)
            console.log(res.data.items)
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
                onClick={handleFormSubmit}
            />

          <div className="lg:col-span-2">
            {
            books.map((book, index) => {
                return(
                    <BookTable key={index}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        // link={book.selfLink}
                    />
                )
            })
            }
          </div>
</div>
    )
}

export default Search;