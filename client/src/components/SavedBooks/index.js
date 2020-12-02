import React from "react";
import DeleteButton from "../DeleteButton"

function SavedBooks(props){

    return (
        <ul className="space-y-12 border-b-2 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg"  src={props.image} alt={props.title} />
                    </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{props.title}</h3>
                      <p className="text-indigo-400">{props.authors}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-600">{props.description}</p>
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
                          <DeleteButton {...props}/>
                      </li>
                    </ul>
                  </div>
                    </div>
                 </div>
            </li>
        </ul>
    )
}

export default SavedBooks;