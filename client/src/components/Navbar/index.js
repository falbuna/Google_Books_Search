import React from "react";

function Navbar(){
    return(

<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">

        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex items-center justify-center space-x-4">
            <a href="/search" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Search</a>
            <a href="/saved" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Saved</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</nav>

    );
}

export default Navbar;