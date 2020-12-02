import React from "react";

function Header(){
    return(

<header className="bg-white shadow">
  <div className="max-w-7xl text-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold leading-tight text-gray-900">
      (React) Google Books Search
    </h1>
    <h2 className="text-lg font-bold leading-tight text-blue-900">Search for and Save Books of Interest</h2>
  </div>
</header>

    );
}

export default Header;