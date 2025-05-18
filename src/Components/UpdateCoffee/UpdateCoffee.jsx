// import { useState } from "react";

import { Timer } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
// import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";

const UpdateCoffeeForm = () => {
  const { name, chef, supplier, taste, details, image, _id, price } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const newCoffee = Object.fromEntries(fromData.entries());
    console.log(newCoffee);

    // send updated coffee to db
    fetch(`https://espresso-emporium-server-one-iota.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Edited Coffee Saved Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    // <div>
    //     <h2>Card Updete</h2>
    // </div>
    <div className="lg:px-52 mb-28 md:px-40 px-20">
      <Helmet>
        <title>Espresso Emporium | Update Coffee</title>
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
          <span className="text-[#374151] footer-text">
            Update Existing Coffee Details
          </span>
        </h2>
        <p className="text-center md:px-32 mx-auto text-[#5C5C5C] mb-8 mt-8  releway leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid md:grid-cols-2 gap-6 mb-6 releway">
            <div>
              <label className="block mb-2 text-[#374151] font-semibold">
                Name
              </label>
              <input
                defaultValue={name}
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
                defaultValue={price}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={chef}
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
                defaultValue={details}
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
              defaultValue={image}
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
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffeeForm;
