import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="hero min-h-screen bg-cover bg-center bg-red"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/LXKhwVS3/6.jpg)",
        }}
      >
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-5 xl:px-[500px] py-20 md:py-72">
          <div className="hero-content">
            <div className="text-white text-center md:text-left">
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold rancho-regular">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="mb-5 text-sm sm:text-base text-gray-300">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <Link to='/blog'>
                <button className="btn w-36 h-12 text-white border text-lg bg-transparent hover:bg-[#E3B577] hover:text-black px-5 py-2">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mb-32 py-10 px-6 sm:px-10 md:px-24 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Awesome Aroma",
            desc: "You will definitely be a fan of the design & aroma of your coffee",
            img: "https://i.postimg.cc/j5gmCMjz/1.png",
          },
          {
            title: "High Quality",
            desc: "We served the coffee to you maintaining the best quality",
            img: "https://i.postimg.cc/br459dkr/2.png",
          },
          {
            title: "Pure Grades",
            desc: "The coffee is made of the green coffee beans which you will love",
            img: "https://i.postimg.cc/4dNjJDXf/3.png",
          },
          {
            title: "Proper Roasting",
            desc: "Your coffee is brewed by first roasting the green coffee beans",
            img: "https://i.postimg.cc/gjx5h3w1/4.png",
          },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img className="w-16 h-16 mx-auto" src={item.img} alt="" />
            <h1 className="text-[#331A15] text-xl md:text-2xl lg:text-3xl mt-4 mb-2 font-semibold">
              {item.title}
            </h1>
            <p className="text-[#1B1A1A] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
