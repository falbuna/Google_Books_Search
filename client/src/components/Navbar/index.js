import React from "react";

function Navbar(){
    return(

<nav className="bg-blue-400">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">

        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex items-center justify-center space-x-4">
          <div className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-blue-600 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Google Books</div>
            <a href="/search" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-blue-700">Search</a>
            <a href="/saved" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-blue-700">Saved</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</nav>

    );
}

export default Navbar;