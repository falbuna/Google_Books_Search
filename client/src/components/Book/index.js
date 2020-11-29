import React from "react";

function Book(props){

    return (
        <div>
        <h3>{props.title}</h3>
        <p>{props.authors}</p>
        <p>{props.description}</p>
        <img className="object-cover shadow-lg rounded-lg"  src={props.image} alt={props.title} />
        </div>
    )
}

export default Book;