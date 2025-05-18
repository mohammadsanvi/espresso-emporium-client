import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-[#3C2A21] font-sans">
      <Helmet>
        <title>Espresso Emporium | Blog </title>
      </Helmet>
      <h1 className="text-4xl md:text-5xl font-bold rancho-regular mb-6 text-center drop-shadow-md">
        Behind Every Cup – Our Coffee Story
      </h1>

      {/* Intro Banner */}




      <div className="w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Coffee Shop"
          className="w-full h-full object-cover"

          
        />
      </div>

      {/* Blog Content */}

      <div className="text-lg leading-relaxed text-justify space-y-6 text-[#4B3A2F]">
        <p>
          At <span className="font-semibold">CoffeeVista</span>, every cup is a
          story — brewed with passion, precision, and a promise to awaken your
          senses. Our journey began with a dream to create not just a café, but
          a haven for coffee lovers. From the rich aroma that greets you at the
          door to the comforting ambiance that wraps around you, every element
          of CoffeeVista is crafted with heart.
        </p>

        <p>
          Our beans are sourced directly from small farms in Ethiopia, Colombia,
          and Vietnam — regions known for their bold and distinct flavors. We
          roast them locally with care to preserve their natural richness and
          earthy undertones. Sustainability is at the core of our mission, and
          we take pride in supporting ethical trade and eco-friendly packaging.
        </p>

        <p>
          Whether you’re meeting a friend, reading a book, or just seeking a
          quiet moment, our café offers the perfect space. With rustic wooden
          décor, cozy seating, free Wi-Fi, and a curated music playlist, you’ll
          feel right at home. Our baristas are trained not only in technique but
          in hospitality — because we believe a smile is as important as the
          espresso shot.
        </p>

        <p>
          But CoffeeVista is more than a coffee shop. It’s a community. We host
          weekend brewing workshops, support local artists through pop-up
          galleries, and collaborate with neighborhood businesses for events
          that bring people together. Follow our blog to learn about new brews,
          seasonal specials, and the stories behind the beans.
        </p>

        <p>
          From bean to brew, we invite you to join our journey. Sip slow, live
          warm, and stay caffeinated with CoffeeVista.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-[#F5F5DC] mt-12 p-6 md:p-10 rounded-xl shadow-md text-center">
        <blockquote className="italic text-xl md:text-2xl text-[#5E473A] font-medium leading-relaxed">
          “We don’t just serve coffee — we serve moments.”
        </blockquote>
        <p className="mt-4 font-cursive text-[#8B5E3C] text-lg">
          – The CoffeeVista Team
        </p>
      </div>

      {/* Back to Home Button */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-flex items-center mt-12 gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#D2B48C] text-[#374151] font-semibold text-lg shadow-sm"
        >
          <FaArrowLeft className="text-[#3C2A21]" />
          <span className="font-cursive text-shadow-t drop-shadow-md">
            Back to home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
