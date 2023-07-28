import React, { useState } from "react";
import Brand from "./Brand";
import Experience from "./Experience";
import Headroom from "react-headroom";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ReusableAnimation from "./ReusableAnimation";
import { FiInstagram, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function Main() {
  const [hamburger, setHamburger] = useState(false);
  const navlinks = [
    { number: "01", title: "About", link: "#about" },
    { number: "02", title: "Experience", link: "#experience" },
    { number: "03", title: "Work", link: "#work" },
    { number: "04", title: "Contact", link: "#contact" },
  ];
  return (
    <>
      <ReusableAnimation>
        <div
          className={`bg-bgColor min-h-screen gap-2 w-screen overflow-x-hidden relative`}
          style={{ overflow: "hidden !important" }}
        >
          <Headroom
            className="transition-all duration-500 ease-in-out z-50 "
            style={{ zIndex: 50 }}
          >
            <div
              className={`top flex justify-between items-center w-screen bg-[#0a192fd9] backdrop-blur-md sm:px-6 p-2 `}
            >
              <Brand color={"white"} />
              <div className="chat text-lightSlate gap-10 items-center lg:flex hidden">
                {navlinks.map((value, index) => {
                  return (
                    <motion.div
                      className=""
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      key={index}
                    >
                      <NavLinks
                        data={{
                          title: value.title,
                          number: value.number,
                          link: value.link,
                        }}
                        key={index}
                      />
                    </motion.div>
                  );
                })}
                <motion.div
                  className=" w-24 h-16 flex justify-center items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <a
                    href="https://sairamsenapati.netlify.app/resume.pdf"
                    className="border-textGreeen outline-none px-3 py-1 border-2 rounded-md font-fontMono hover:border-r-4 hover:border-b-4 bg-bgColor"
                  >
                    Resume
                  </a>
                </motion.div>
              </div>
              <div
                className={`hamburger lg:hidden block ${
                  hamburger ? "hidden" : "block"
                }absolute right-0 top-0 z-10`}
                onClick={() => setHamburger((prev) => !prev)}
              >
                <div className={`space-y-2 flex flex-col items-end`}>
                  <span
                    className={`block w-8 h-0.5 bg-textGreeen transform-all duration-75 ${
                      hamburger ? "rotate-[45deg]" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-textGreeen transform-all duration-75 ${
                      hamburger ? "-rotate-[45deg] -translate-y-1" : ""
                    }`}
                  ></span>
                  <span
                    className={` w-4 h-0.5 bg-textGreeen transform-all duration-75 ${
                      hamburger ? "hidden" : "block"
                    }`}
                  ></span>
                </div>
              </div>

              <div
                className={`absolute top-0 left-0 w-full min-h-screen h-[120vh]  overflow-hidden lg:hidden transform-all ease-in ${
                  hamburger ? "flex" : "hidden"
                }`}
              >
                <div className="left backdrop-blur-lg opacity-80 bg-lightNavy sm:w-full w-[50%] h-full "></div>
                <div className="right w-full h-full bg-bgColor flex flex-col gap-5 justify-center items-center text-slate">
                  {navlinks.map((value, index) => {
                    return (
                      <motion.div
                        className=""
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        key={index}
                      >
                        <NavLinks
                          data={{
                            title: value.title,
                            number: value.number,
                            link: value.link,
                          }}
                          key={index}
                        />
                      </motion.div>
                    );
                  })}
                  <motion.div
                    className=" w-24 h-16 flex justify-center items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <a
                      href="https://sairamsenapati.netlify.app/resume.pdf"
                      className="border-textGreeen outline-none px-3 py-1 border-2 rounded-md font-fontMono hover:border-r-4 hover:border-b-4 bg-bgColor"
                    >
                      Resume
                    </a>
                  </motion.div>

                  <div className="icon flex gap-5">
                    <motion.a
                      className={`text-lightSlate`}
                      href="https://github.com/Sai1Ram"
                      target={"_blank"}
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 4px gray",
                      }}
                    >
                      <FiGithub
                        className="h-[20px] w-[20px] "
                        // md:h-[30px] md:w-[30px]
                        // fill={"currentColor"}
                      />
                    </motion.a>

                    <motion.a
                      className={`text-lightSlate`}
                      href="https://instagram.com/__sai_ram_senapati?igshid=ZDdkNTZiNTM="
                      target={"_blank"}
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 4px gray",
                      }}
                    >
                      <FiInstagram
                        className="h-[20px] w-[20px] "
                        // md:h-[30px] md:w-[30px]
                        // fill={"currentColor"}
                      />
                    </motion.a>
                    <motion.a
                      className={`text-lightSlate `}
                      href="https://www.linkedin.com/in/sai1ram/"
                      target={"_blank"}
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 4px gray",
                      }}
                    >
                      <FiLinkedin
                        className="h-[20px] w-[20px] "
                        // md:h-[30px] md:w-[30px]
                        // fill={"currentColor"}
                      />
                    </motion.a>
                    <motion.a
                      className={`text-lightSlate `}
                      href="https://twitter.com/SaiRam00223"
                      target={"_blank"}
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 4px gray",
                      }}
                    >
                      <FiTwitter
                        className="h-[20px] w-[20px]  "
                        // md:h-[30px] md:w-[30px]
                        // fill={"currentColor"}
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </Headroom>

          <div className="w-full md:min-h-screen lg:px-56 md:px-24 px-6 md:pt-32 py-12  md:pb-0">
            <motion.h4
              className="font-fontMono md:text-lg text-xs text-textGreeen md:mb-6 mb-2 ml-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              Hi, my name is
            </motion.h4>
            <motion.h1
              className="font-fontSans md:text-5xl lg:text-7xl text-3xl text-lightestSlate font-[600] md:mb-6 mb-2 "
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
            >
              Sai Ram Senapati
            </motion.h1>
            <motion.h2
              className="text-xl lg:text-6xl md:text-4xl font-fontSans text-slate font-[600] md:mb-6 mb-2 "
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
            >
              I build things for the web.
            </motion.h2>
            <motion.p
              className="font-fontSans text-slate lg:w-[450px] w-full text-xs md:text-base"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              I'm a Mechanical undergraduate at <strong>NIT Rourkela</strong> ,
              with a passion for exploring the world of full stack web
              development.{" "}
            </motion.p>
          </div>
          <About />

          <Experience />
          <Projects />
          <Contact />
        </div>
      </ReusableAnimation>
      <SocialLinks side={"left"} />
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <SocialLinks side={"right"} />
      </motion.div>
    </>
  );
}

export default Main;
