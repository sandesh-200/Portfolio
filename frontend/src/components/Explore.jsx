import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Explore = () => {
    const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/about');
  };
  return (
    
        <div className="flex justify-center py-16 bg-gray-50">
        <button
          onClick={handleExplore}
          className="group relative overflow-hidden rounded-lg bg-black px-8 py-4 transition-all duration-300 hover:bg-gray-900"
        >
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-white font-medium transition-transform duration-300 group-hover:translate-x-2">
              Explore More
            </span>
            <ArrowRight 
              className="text-white w-5 h-5 transition-all duration-300 transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100"
            />
          </div>
          
          <div className="absolute inset-0 flex transition-transform duration-300 group-hover:translate-x-0 -translate-x-full">
            <div className="h-full w-1/3 bg-white/10 transform -skew-x-12" />
            <div className="h-full w-1/3 bg-white/5 transform -skew-x-12" />
            <div className="h-full w-1/3 bg-white/5 transform -skew-x-12" />
          </div>
        </button>
      </div>
    
  )
}

export default Explore