import React from "react";
import Heading from "./Heading";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ReusableAnimation from "./ReusableAnimation";
// import { useInView } from "react-intersection-observer";
import { data } from "./data";

export const UnderLineLink = (data) => {
  return (
    <span className="relative group">
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer"
        className="text-textGreeen text-sm md:text-base"
      >
        {data.name}
      </a>
      <span className="absolute bottom-0 left-0 w-0 h-[0.1px] bg-textGreeen transition-all group-hover:w-full selection:bg-black"></span>
    </span>
  );
};

const Projects = () => {
  console.log(data);
  return (
    <ReusableAnimation>
      <div className="w-full md:min-h-screen md:px-24 lg:px-56 px-6 h-full md:pb-0 flex flex-col">
        <Heading
          headingData={{ number: "03", title: "Some Things I’ve Built" }}
        />
        <div className="py-10">
          {" "}
          {data.map((value, index) => {
            return (
              <>
                {index % 2 !== 0 ? (
                  <ReusableAnimation key={index}>
                    <div className="h-[380px] grid grid-cols-12 mb-20" id="work">
                      <div className="right lg:col-start-1 lg:col-end-6 lg:flex col-start-1 col-end-13 row-start-1 row-end-2 grid flex-col items-start py-6 p-6 lg:px-0">
                        <h4 className="font-fontMono md:text-sm text-xs text-textGreeen ml-1">
                          Featured Project
                        </h4>
                        <h2 className="md:text-2xl text-lg font-fontSans text-lightestSlate font-bold my-4">
                          {value.heading}
                        </h2>
                        <div className="lg:bg-lightNavy h-36 lg:w-[500px] w-full rounded-lg relative right-0 z-20 text-slate lg:p-6 lg:text-start text-left lg:shadow-2xl md:text-base text-sm ">
                          {/* <p className="md:block inline">
                            Live{" "}
                            <span className="text-textGreeen">
                              Crypto Currency Tracker
                            </span>{" "}
                            website which gives Real-time
                          </p>
                          <p className="md:block inline">
                            data like{" "}
                            <span className="text-textGreeen">
                              Price, Market Cap
                            </span>
                            ,and market information
                          </p>
                          <p className="md:block inline">
                            in both{" "}
                            <span className="text-textGreeen">USD and INR</span>{" "}
                            using graphs and deployed
                          </p>
                          <p>
                            on{" "}
                            {UnderLineLink({
                              name: "Vercel.com",
                              link: "https://vercel.com/",
                            })}{" "}
                            for easy access.
                          </p> */}
                          {value.description}
                        </div>
                        <ul className="skillUsed my-6 flex md:gap-5 flex-wrap gap-2 ">
                       
                          {value.skillUsed.map((v, i)=>{
                            return(
                              <li key={i}>
                            {UnderLineLink(v)}
                          </li>
                            )
                          })}
                        </ul>
                        <div className="flex justify-end gap-3 text-slate">
                          {value.gitLink ? <a
                            href={value.gitLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiGithub className="h-[20px] w-[20px]" />
                          </a> : ''}
                          {value.link ? <a
                            href={value.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiExternalLink className="h-[20px] w-[20px]" />
                          </a> : ''}
                          
                          
                        </div>
                      </div>
                      <div className="left lg:col-start-6 lg:col-end-13 row-span-full relative grid col-start-1 col-end-13 row-start-1 row-end-2 lg:opacity-100 opacity-10">
                        <div className="img w-full h-full absolute top-0 left-0 transition duration-400 ease-out peer after:w-full after:h-full after:content-[''] after:z-10 after:absolute after:top-0 after:left-0 after:bg-textGreeen after:opacity-40 after:hover:opacity-0 after:transition-opacity after:duration-300 after:rounded-lg">
                          <img
                            src={value.images}
                            alt=""
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </ReusableAnimation>
                ) : (
                  <ReusableAnimation key={index}>
                    <div className="h-[380px] grid grid-cols-12 mb-20">
                      <div className="left lg:col-span-7 col-start-1 col-end-13 row-start-1 row-end-2 grid relative lg:opacity-100 opacity-10">
                        <div className="img w-full h-full absolute top-0 left-0 transition duration-400 ease-out peer after:w-full after:h-full after:content-[''] after:z-10 after:absolute after:top-0 after:left-0 after:bg-textGreeen after:opacity-40 after:hover:opacity-0 after:transition-opacity after:duration-300 after:rounded-lg">
                          <img
                            src={value.images}
                            alt=""
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="right lg:col-start-8 lg:col-end-13 lg:flex flex-col items-end py-6 grid col-start-1 col-end-13 row-start-1 row-end-2 p-6 lg:px-0">
                        <h4 className="font-fontMono md:text-sm text-xs text-textGreeen ml-1">
                          Featured Project
                        </h4>
                        <h2 className="md:text-2xl text-lg font-fontSans text-lightestSlate font-bold my-4">
                          {value.heading}
                        </h2>
                        <div className="lg:bg-lightNavy h-36 lg:w-[500px] w-full rounded-lg relative right-0 z-20 text-slate lg:p-6 lg:text-end text-left lg:shadow-2xl md:text-base text-sm ">
                         
                          {value.description}
                        </div>
                        <ul className="skillUsed my-6 flex md:gap-5 flex-wrap gap-2 ">
                        {value.skillUsed.map((v, i)=>{
                            return(
                              <li key={i}>
                            {UnderLineLink(v)}
                          </li>
                            )
                          })}
                          
                        </ul>
                        <div className="flex justify-end gap-3 text-slate">
                        {value.gitLink ? <a
                            href={value.gitLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiGithub className="h-[20px] w-[20px]" />
                          </a> : ''}
                          {value.link ? <a
                            href={value.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiExternalLink className="h-[20px] w-[20px]" />
                          </a> : ''}
                        </div>
                      </div>
                    </div>
                  </ReusableAnimation>
                )}
              </>
            );
          })}

        </div>
      </div>
    </ReusableAnimation>
  );
};

export default Projects;
