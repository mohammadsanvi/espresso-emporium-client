// import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";

const AddCoffee = () => {
      // const [loading, setLoading] = useState(true);
      // useEffect(() => {
      //         setLoading(false)
      //       },[])
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const from = e.target;
    const formData = new FormData(from);
    const newCoffee = Object.fromEntries(formData.entries());


    // send data to database

    fetch("https://espresso-emporium-server-one-iota.vercel.app/coffees", {
      // method post
      method: "POST",
      //   headers content type application json format
      headers: {
        "content-type": "application/json",
      },
      //   body json convert stringfy full newcoffee data
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            title: "Coffee Added Succesfully!",
            icon: "success",
            draggable: true,

          });
        }
      });
  };

  // if (loading) return <Loading />;
  return (
    <div className="lg:px-52 md:px-40 px-20">
      <Helmet>
              <title>Espresso Emporium | Add Coffee</title>
            </Helmet>
      <Link
        to="/"
        className="inline-flex items-center mt-12 gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#D2B48C] text-[#374151] font-semibold text-lg shadow-sm"
      >
        <FaArrowLeft className="text-[#3C2A21]" />
        <span className="font-cursive text-shadow-t drop-shadow-md">
          Back to home
        </span>
      </Link>
      <div className="bg-[#F4F3F0] mx-auto my-10 p-10 rounded">
        <h2 className="text-3xl md:text-4xl mt-16 font-bold text-center text-[#374151]">
          <span className="text-[#374151] footer-text">Add New Coffee</span>
        </h2>
        <p className="text-center md:px-32 mx-auto text-[#5C5C5C] mb-8 mt-8  releway leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid md:grid-cols-2 gap-6 mb-6 releway">
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee price"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee category"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-[#374151] font-semibold">
              Photo
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter photo URL"
              className="w-full p-3 rounded bg-white border border-gray-200 focus:outline-[#331A15]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#D2B48C] rancho-regular text-[#331A15] font-bold py-3 px-8 rounded w-full border border-[#331A15] hover:bg-[#c2a476] transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
