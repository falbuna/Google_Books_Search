import React from "react";

function SearchButton({ onClick }) {
    return(
        <div className="px-4 py-3 text-center sm:px-6">
        <button onClick={onClick} 
        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </div>
    )
}

export default SearchButton;