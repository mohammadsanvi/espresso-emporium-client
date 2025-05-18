import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from "react-router";

const PopularProducts = ({ coffees, onDelete }) => {
  return (
    <div className="relative overflow-hidden">
      
      {/* Left background image */}
      <img
        src="https://i.postimg.cc/Nf0tBPgf/4.png"
        alt="left background"
        className="hidden w-[341px] animate-pulse lg:block absolute top-0 left-0 h-[434px] z-0"
      />

      {/* Right background image */}
      <img
        src="https://i.postimg.cc/ncwJzYzK/5.png"
        alt="right background"
        className="hidden w-[424px] lg:block absolute top-0 right-0 h-[1000px] z-0 animate-pulse"
      />

      {/* Main Content */}
      <div className='relative z-10 px-30'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <p className='text-center text-xl mb-2 text-[#1B1A1A]'>--- Sip & Savor ---</p>
          <h2 className='text-6xl footer-text text-center text-[#331A15]'>Our Popular Products</h2>
          <Link to='/add-coffee'>
            <button className='flex gap-3 mb-12 mt-8 hover:bg-[#E3B577] h-12 border-4 rounded border-[#331A15] p-3 justify-center items-center'>
              <p className='text-white text-shadow rancho-regular'>Add Coffee</p>
              <img className='w-5 h-4' src="https://media-hosting.imagekit.io/8b08f30a38a04023/Vector.png" alt="" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:px-28 px-5 lg:px-44 mb-32 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {coffees?.map(coffee => (
            <ProductCard key={coffee._id} onDelete={onDelete} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
