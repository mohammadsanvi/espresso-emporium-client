import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ coffee, onDelete }) => {
  const { _id, image, chef, price, name } = coffee;

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <div className="bg-[#F4F3F0] rounded-lg p-4 flex flex-col md:flex-row items-center md:items-center justify-center py-20 gap-4 h-auto md:h-80 w-full max-w-[580px] mx-auto shadow-sm">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full md:w-auto md:h-[239px] object-contain"
      />

      {/* Product Details */}
      <div className="flex-1 space-y-2 text-center md:text-left flex flex-col justify-center">
        <p className="text-black font-semibold">
          <span className="font-bold">Name:</span>{" "}
          <span className="text-[#1B1A1AB3] font-normal">{name}</span>
        </p>
        <p className="text-black font-semibold">
          <span className="font-bold">Chef:</span>{" "}
          <span className="text-[#1B1A1AB3] font-normal">{chef}</span>
        </p>
        <p className="text-black font-semibold">
          <span className="font-bold">Price:</span>{" "}
          <span className="text-[#1B1A1AB3] font-normal">{price}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-2 justify-center">
        <Link to={`/coffee-details/${_id}`}>
          <button className="bg-[#D2B48C] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center text-white rounded">
            <FaEye size={18} />
          </button>
        </Link>
        <Link to={`update-coffee/${_id}`}>
          <button className="bg-black w-10 h-10 md:w-12 md:h-12 flex justify-center items-center text-white rounded">
            <FaPen size={16} />
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center text-white rounded"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
