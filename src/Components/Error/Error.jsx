import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center'>
             <Link
      to="/"
      className="inline-flex mx-auto mt-16 items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#D2B48C] text-[#374151] font-semibold text-lg shadow-sm"
    >
      <FaArrowLeft className="text-[#3C2A21]" />
      <span className="font-cursive text-shadow-t drop-shadow-md">Back to home</span>
    </Link>
            <img className='my-28 mx-auto' src="https://i.postimg.cc/JhZS90xk/404.gif" alt="error png" />
        </div>
    );
};

export default Error;