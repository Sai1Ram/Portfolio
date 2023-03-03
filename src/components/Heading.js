import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Heading({ text, cl, link, click }) {
  
  return (
    <>
      <Link className="flex" to={link}>
        <motion.span
          className={`font-[karla] text-xl font-semibold ${cl}`}
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

export default Heading;
