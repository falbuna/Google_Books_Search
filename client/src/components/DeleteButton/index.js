import React from "react";

function DeleteButton(props) {
    return(

        <button {...props} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Delete
        </button>
    )
}

export default DeleteButton;