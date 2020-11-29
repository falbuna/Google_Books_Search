import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import API from "../utils/API";

function Search(){

    const[bookSearch, setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.search(bookSearch)
        .then(res => {
            console.log(res.data)
        })
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
        </div>
    )
}

export default Search;