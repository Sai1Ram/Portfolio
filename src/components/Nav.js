import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Nav({ link , text}) {
  return (
    <>
      <Link className="flex" to={link}>
        <motion.span
          className={`font-[karla] text-md sm:text-lg md:text-xl lg:text-2xl font-semibold`}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          {text}
        </motion.span>
      </Link>
    </>
  );
}

export default Nav;
