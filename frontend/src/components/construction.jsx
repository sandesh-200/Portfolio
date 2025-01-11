import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Construction = () => {
    return(
        <>
         <div className="w-full h-screen flex justify-center items-center bg-white text-black">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="construction.png"
                  alt="Construction Image"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
              <div>
                <Link to="/">
                <button
                  className="bg-transparent border-2 border-gray-700 text-black py-2 px-6 rounded-full hover:bg-gray-200 hover:text-gray-900 transition duration-300"
                >
                  Back to Homepage
                </button>
                </Link>
              </div>
            </div>
          </div>
        </>
        )
  
}

export default Construction