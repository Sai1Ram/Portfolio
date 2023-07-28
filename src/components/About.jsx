import React from "react";
import profile from "../assets/profile_pic.jpeg";
// import layer_img from "../assets/layer.png";
import Heading from "./Heading";
import ReusableAnimation from "./ReusableAnimation";
import { UnderLineLink } from "./Projects";
import { GiPlayButton } from "react-icons/gi";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind",
  "Typescript",
  "Material UI",
  "React Js",
  "Next Js",
  "Express Js",
  "Node Js",
  "Django",
  "PHP",
  "Java",
  "Python",
];
const About = () => {
  return (
    <ReusableAnimation delay={0.5} threshold={0.5}>
      <div
        className="w-full md:min-h-screen md:px-24 lg:px-56 px-6  py-12 md:mb-24 mb-12 h-full  flex flex-col gap-4 md:gap-0"
        id="about"
      >
        <Heading headingData={{ number: "01", title: "About Me" }} />
        <div className="flex justify-center items-center gap-10 md:h-[400px] h-full flex-col md:flex-row">
          <div className="left md:w-[55%] py-8 w-full">
            <p className="font-fontSans text-slate  lg:text-lg text-sm">
              Hello, I'm a Mechanical undergraduate at{" "}
              {UnderLineLink({
                name: "NIT Rourkela",
                link: "https://www.nitrkl.ac.in/",
              })}
              , with a passion for exploring the world of{" "}
              <span className="text-textGreeen">
                Full Stack Web Development
              </span>
              . I enjoy experimenting with new technologies and building
              exciting projects that showcase my skills.
            </p>
            <p className="font-fontSans text-slate lg:text-lg text-sm mt-4">
              My favorite tools are{" "}
              {UnderLineLink({ name: "React JS", link: "https://react.dev/" })}{" "}
              and{" "}
              {UnderLineLink({
                name: "Tailwind CSS",
                link: "https://tailwindcss.com/",
              })}
              , and{" "}
              {UnderLineLink({
                name: "Node JS",
                link: "https://nodejs.org/en",
              })}{" "}
              which I use to create beautiful and responsive websites.
            </p>
            <p className="font-fontSans text-slate lg:text-lg text-sm mt-4">
              Now I am looking for a good{" "}
              <span className="text-textGreeen">Internship</span> which allow me
              to showcase my skills. My main focus these days is to learn new
              tech stacks and use it my projects
            </p>
          </div>
          <div className="right md:w-[55%] py-8 w-full h-full">
            <div className=" w-full h-full md:block hidden relative">
              <div className="img w-72 h-72 z-10 absolute top-0 left-0 hover:-translate-y-2 hover:-translate-x-2 transition duration-400 ease-out peer after:w-full after:h-full after:content-[''] after:z-20 after:absolute after:top-0 after:left-0 after:bg-textGreeen after:opacity-40 after:hover:opacity-0 after:transition-opacity after:duration-300 after:rounded-lg">
                <img
                  src={profile}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="absolute border-textGreeen border-2 rounded-lg w-72 h-72 left-3 top-3  peer-hover:translate-y-2 peer-hover:translate-x-2 transition duration-400 ease-out"></div>
            </div>
            <div className="w-full h-full md:hidden flex justify-center items-center">
              <div className="img w-56 h-56 z-10 relative top-0 left-0 transition duration-400 ease-out peer after:w-full after:h-full after:content-[''] after:z-20 after:absolute after:top-0 after:left-0 after:bg-textGreeen after:opacity-40 after:hover:opacity-0 after:transition-opacity after:duration-300 after:rounded-lg">
                <img
                  src={profile}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <Heading headingData={{ number: "1.1", title: "Skills" }} />
          <ul className="py-6 grid h-44 grid-cols-3">
            {skills.map((value, index) => {
              return (
                <ReusableAnimation delay={0.25 + index * 0.1} key={index}>
                  <li className="font-fontSans text-slate md:text-sm text-xs flex gap-2 items-center">
                    <GiPlayButton className="text-textGreeen md:text-[0.7rem] text-[0.45rem]" />
                    {value}
                  </li>
                </ReusableAnimation>
              );
            })}
          </ul>
        </div>
      </div>
    </ReusableAnimation>
  );
};

export default About;
