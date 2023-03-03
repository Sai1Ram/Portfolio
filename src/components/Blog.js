import React from "react";

function Blog({ text, image, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className={` border-2 border-black transtion duration-300 group w-[100%] h-[35vh] md:h-[55vh] p-4 hover:bg-black hover:text-white text-black backdrop-blur-sm`}
        >
          <div className={`w-full h-[65%] group-hover:border-2 group-hover:border-white`}>
            <img src={image} alt="image1" className="w-full h-full"/>
          </div>
          <div className={` h-[40%] pt-3 text-md sm:text-xl`}>
            <h1>{text}</h1>
            <h1>{text}</h1>
          </div>


        </div>
      </a>
    </>
  );
}

export default Blog;
