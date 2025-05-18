import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-16 h-16">
        {/* Outer Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-t-[#D2B48C] border-gray-300 animate-spin"></div>
        {/* Inner Circle */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-b-[#331A15] border-gray-200 animate-spin animation-delay-200"></div>
        {/* Center Dot */}
        <div className="absolute top-6 left-6 w-4 h-4 bg-[#331A15] rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
