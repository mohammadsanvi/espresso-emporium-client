import React from 'react';

const instagramImages = [
  "https://i.postimg.cc/1tj7y4WB/Rectangle-10.png",
  "https://i.postimg.cc/5yQ7y1TV/Rectangle-11.png",
  "https://i.postimg.cc/YjcXmZBm/Rectangle-12.png",
  "https://i.postimg.cc/wxSHVB6D/Rectangle-13.png",
  "https://i.postimg.cc/xjknMmS0/Rectangle-14.png",
  "https://i.postimg.cc/SNC4tps3/Rectangle-15.png",
  "https://i.postimg.cc/FHv4MnkR/Rectangle-16.png",
  "https://i.postimg.cc/T3c6fqnc/Rectangle-9.png",
];

const FollowInstagram = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-center text-sm text-gray-600 mb-2">Follow Us Now</p>
      <h2 className="text-center text-5xl font-bold mb-8 text-shadow-t">
        Follow on <span className="">Instagram</span>
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {instagramImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={img} 
              alt={`Coffee ${index + 1}`} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    );
};

export default FollowInstagram;