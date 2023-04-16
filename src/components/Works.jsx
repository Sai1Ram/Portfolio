import React from "react";

// import subComponets
import Blog from "./Blog";
import Brand from "./Brand";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import {data} from "./data";

console.log(data);
function Works() {

  const images = {
    src: "https://i.ibb.co/Mc42wdP/patrick-tomasso-Oaqk7qq-Nh-c-unsplash.jpg",
  };
  const bgStyle = {
    backgroundImage: `url(${images.src})`,
  };
  return (
    <>
      <div
        className={`w-screen h-screen box-border bg-cover bg-fixed top-0 left-0 absolute before:w-full before:fixed
         before:top-0 before:left-0 before:bottom-0 grid gap-2 grid-cols-[2rem_calc(100%-5rem)_2rem] 
         sm:grid-cols-[2rem_calc(100vw-8rem)_2rem] grid-rows-[2rem_calc(100%-2rem)] before:bg-gray-200/80 
         after:content-['Blogs'] after:text-7xl lg:after:text-[180px] md:after:text-[140px] after:font-[900]
         after:text-[#0000001a] after:fixed after:top-[30%] after:left-[45%] lg:after:left-[60%] p-4 sm:p-6
          scrollbar-thumb-transparent scrollbar
         z-[1]
         `}
        style={bgStyle}
      >
        <div className="top col-span-3 flex items-center gap-4 h-[2rem] justify-between relative">
          <Brand click={""} />
          <nav
            className={`flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center items-center`}
          >
            <Nav text={"Profile"} link={"/profile"} />  
          </nav>
        </div>

        <div className="left ">
          <SocialLinks />
        </div>

        <div className={`flex z-[1] justify-center grid-cols-1`}>
          <div
            className={`md:w-[80%] w-[100%] grid gap-8 md:grid-cols-2 grid-cols-1`}
          >
            <Blog
              text={data[0].text}
              image={data[0].images}
              heading={data[0].heading}
              link={data[0].link}
              side={"left"}
            />
            <Blog
              heading={data[1].heading}
              text={data[1].text}
              image={data[1].images}
              link={data[1].link}
              side={"right"}
            />
            <Blog
            heading={data[2].heading}
            text={data[2].text}
            image={data[2].images}
            link={data[2].link}
            side={"left"}
            />
            <Blog
            heading={data[3].heading}
              text={data[3].text}
              image={data[3].images}
              link={data[3].link}
              side={"right"}
            />

          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </>
  );
}

export default Works;
