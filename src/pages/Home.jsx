import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="w-[100vw] text-white uppercase text-center h-[60vh] grid place-content-center"
    >
      <h2 className="text-6xl lg:text-9xl home_title font-antonio ">Welcome</h2>
      <h3 className="text-4xl lg:text-7xl home_sub font-sparta">Traveler</h3>
      <p className="opacity-40 text-base">Click on Planets or Button</p>
      <Link to="/earth">
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1 }}
          className="rounded-lg mt-12 px-6 py-2 font-bold bg-[#419EBB] text-xl"
        >
          Travel
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
