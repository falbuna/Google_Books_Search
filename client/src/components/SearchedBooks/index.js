import React from "react";
import API from "../../utils/API";


function SearchedBooks(props){

  function handleSaveBook(){
    API.saveBook({
        title: props.book.volumeInfo.title,
        image: (props.book.volumeInfo.imageLinks === undefined)
        ? "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
        : `${props.book.volumeInfo.imageLinks.thumbnail}`,
        authors: props.book.volumeInfo.authors,
        description: props.book.volumeInfo.description,
        link: props.book.volumeInfo.previewLink
    })
}

    return(
  
        <ul className="p-4 border-b-2 space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg"  src={props.image} alt={props.title} />
                    </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="leading-6 font-medium space-y-1">
                      <h3  className="text-xl text-bold" >{props.title}</h3>
                      <p className="text-lg text-blue-700">{props.authors}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-900">{props.description}</p>
                    </div>
                    <ul className="flex space-x-5">
                      <li>
                        <a href={props.link} target="_blank" rel="noreferrer">
                          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              View
                          </button>
                        </a>
                      </li>
                      <li>
                          <button onClick={handleSaveBook} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                          </button>
                      </li>
                    </ul>
                  </div>
                    </div>
                 </div>
            </li>
        </ul>
  
    )
}

export default SearchedBooks;