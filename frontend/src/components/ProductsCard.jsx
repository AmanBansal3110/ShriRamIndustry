// src/components/ProductCard.js
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border border-gray-200 rounded-lg shadow-lg transition-all duration-300"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded mt-2 hover:bg-purple-800">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
