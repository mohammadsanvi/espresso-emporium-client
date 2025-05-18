import { useLoaderData } from "react-router";
import { Link } from "react-router";
// import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const CoffeeDetailsCard = () => {
  const coffee = useLoaderData();
  console.log(coffee)

  const {
    name,
    chef,
    supplier,
    taste,
    details,
    image,
  } = coffee || {};

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center lg:px-40 mb-24"
      style={{
        backgroundImage: "url('https://media-hosting.imagekit.io/30275ee2a6de4642/11.png?Expires=1841917353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SMub6uT6uWNoL~jFJJ4YvBVBeUDL71d1TZL4W49ji-vrdJTTV60-GXjsuhRlpsz8sFKW5L--Y0sfOBEh50ni4PH-sW9eMzPyP6Bfmke0JOsKjj5pzWHQ8az5fiB6GHIodzDo~FzCtVBQ4CakNQDGF8mkiUDwasavQvM3quLzeAvnYlzK1mi9OzFGTucstCl~RZxsG~bd0fiaSdH5VtqMQOPbKFGAssRInvk7myRQLJnXVY7Li5GrLC-kS5CrINCqjXkWzCG1bZSJWTZhIpWwk7FWAI-H08J89uuCJW2mbMrHgHcubk6i2WAt1HRci48rJSRtxAoLgY7J5wfnyrG7fQ__')",
      }}
    >
      <Helmet>
              <title>Espresso Emporium | Coffee Details</title>
            </Helmet>

       <Link
              to="/"
              className="w-[200px] flex justify-center items-center mt-12 gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#D2B48C] text-[#374151] font-semibold mb-6 text-lg shadow-sm"
            >
              <FaArrowLeft className="text-[#3C2A21]" />
              <span className="font-cursive text-shadow-t drop-shadow-md">
                Back to home
              </span>
            </Link>

      <div className="bg-[#F4F3F0] rounded-lg flex flex-col px-8 py-12 border-blue-500 md:flex-row gap-4 lg:gap-10 backdrop-blur-md">
        {/* Image */}
        <div className="mx-auto flex items-center justify-center w-full lg:h-[500px] lg:px-32 px-10">

          <div className="h-full w-full p-4 overflow-hidden">
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover"
    />
  </div>
</div>


        {/* Details */}
        <div className="text-[#3C2A21] space-y-2 py-16 flex flex-col justify-center">
          <h2 className="text-3xl text-shadow-t mb-9">Nicefies</h2>
          <p className="text-lg font-normal text-[#1B1A1A80]"><span className="font-semibold text-black">Name:</span> {name}</p>
          <p className="text-lg font-normal text-[#1B1A1A80]"><span className="font-semibold text-black">Chef:</span> {chef}</p>
          <p className="text-lg font-normal text-[#1B1A1A80]"><span className="font-semibold text-black">Supplier:</span> {supplier}</p>
          <p className="text-lg font-normal text-[#1B1A1A80]"><span className="font-semibold text-black">Taste:</span> {taste}</p>
          <p className="text-lg font-normal text-[#1b1a1a80]"><span className="font-semibold text-black">Details:</span> {details}</p>
        </div>
        </div>
      </div>
  );
};

export default CoffeeDetailsCard;
