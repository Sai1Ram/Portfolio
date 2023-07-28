import React, { useState } from "react";
import Heading from "./Heading";
import ReusableAnimation from "./ReusableAnimation";
import { GiPlayButton } from "react-icons/gi";
import { UnderLineLink } from "./Projects";

const ExperienceHeading = (data) => {
  return (
    <h1 className=" md:text-xl text-sm text-lightestSlate font-fontSans font-semibold flex gap-2">
      {data.message}
      <p className="relative group">
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="text-textGreeen group flex flex-col"
        >
          {data.highlight}
        </a>
        <span className="absolute bottom-1 left-0 w-0 h-[0.1px] bg-textGreeen transition-all group-hover:w-full"></span>
      </p>
    </h1>
  );
};

const Experience = () => {
  const [tabs, setTab] = useState(1);

  return (
    <ReusableAnimation delay={0.5} threshold={0.5}>
      <div className="w-full md:px-24 lg:px-56 px-6 flex lg:mt-32 flex-col mb-10" id="experience">
        <Heading headingData={{ number: "02", title: "Where I’ve Worked" }} />
        <div className="flex pt-10 gap-8 h-[500px] flex-col lg:flex-row">
          <div className="text-slate flex lg:flex-col lg:w-[25%] text-sm justify-start flex-row  w-full">
            <button
              className={`lg:w-44 w-full lg:px-6 px-2 py-3 ${
                tabs === 1
                  ? "border-l-[3px] border-l-textGreeen text-textGreeen bg-lightestNavy border-b-[3px] border-b-lightestNavy"
                  : "border-l-2 border-l-lightestNavy border-b-[3px] border-b-bgColor"
              } transition-all duration-500 text-start hover:bg-lightestNavy hover:border-b-[3px] hover:border-b-lightestNavy`}
              onClick={() => {
                setTab(1);
              }}
            >
              e-Yantra (IITB)
            </button>
            <button
              className={`lg:w-44 w-full lg:px-6 px-2 py-3 ${
                tabs === 2
                  ? "border-l-[3px] border-l-textGreeen text-textGreeen bg-lightestNavy border-b-[3px] border-b-lightestNavy"
                  : "border-l-2 border-l-lightestNavy border-b-[3px] border-b-bgColor"
              } transition-all duration-500 text-start hover:bg-lightestNavy hover:border-b-[3px] hover:border-b-lightestNavy`}
              onClick={() => {
                setTab(2);
              }}
            >
              NeoPhyte
            </button>
          </div>
          <div className="text-slate text-xs md:text-base">
            {tabs === 1 && (
              <div className="eyrc transition-all duration-300 ease-in-out md:w-2/3 w-full flex flex-col">
                {ExperienceHeading({
                  message: "Summer Intern",
                  highlight: "@COC",
                  link: "https://drive.google.com/file/d/1bckSo_SS53fT701DrlzuO7TemZ_vTbJe/view",
                })}
                <div className="flex gap-2 py-2">
                  <GiPlayButton className="text-textGreeen w-8 h-8" />
                  <p>
                    Created an immersive{" "}
                    <span className="text-textGreeen">3D Museum Website</span>{" "}
                    for an international e-Yantra School Robotics competition,
                    featuring virtual rooms, a lobby, networking zone, and
                    exhibition booths.
                  </p>
                </div>

                <div className="flex gap-2 py-4">
                  <GiPlayButton className="text-textGreeen w-8 h-8" />
                  <p>
                    Contributed to Django implementation for secure
                    <span className="text-textGreeen"> authentication</span>.
                    Enabled user-friendly model{" "}
                    <span className="text-textGreeen">upload/delete</span> with
                    admin permissions, enhancing functionality and user
                    experience.
                  </p>
                </div>

                <div className="flex gap-2 py-4">
                  <GiPlayButton className="text-textGreeen w-8 h-8" />
                  <p>
                    Developed a networking zone using{" "}
                    {UnderLineLink({
                      name: "Django",
                      link: "https://www.djangoproject.com/",
                    })}
                    ,{" "}
                    {UnderLineLink({
                      name: "Javascript",
                      link: "https://www.geeksforgeeks.org/javascript/",
                    })}
                    , &{" "}
                    {UnderLineLink({
                      name: "Tailwind CSS",
                      link: "https://tailwindcss.com/",
                    })}{" "}
                    for e-Yantra School Robotics participants. Enabled posting
                    thoughts and interactions among participants.
                  </p>
                </div>
              </div>
            )}
            {tabs === 2 && (
              <div className="transition-all duration-300 ease-in-out md:w-2/3 w-full flex flex-col">
                {ExperienceHeading({
                  message: "Web Development Intern",
                  highlight: "@NeoPhyte",
                  link: "https://neophyte.live",
                })}
                <div className="flex gap-2 py-2">
                  <GiPlayButton className="text-textGreeen w-8 h-8" />
                  <p>
                    As a Web Development Intern, I crafted stunning UIs and
                    integrated APIs using technologies like{" "}
                    {UnderLineLink({
                      name: "React",
                      link: "https://react.dev/",
                    })}
                    ,{" "}
                    {UnderLineLink({
                      name: "Redux",
                      link: "https://redux.js.org/",
                    })}
                    ,{" "}
                    {UnderLineLink({
                      name: "Tailwind CSS",
                      link: "https://tailwindcss.com/",
                    })}{" "}
                    , and{" "}
                    {UnderLineLink({
                      name: "Material UI",
                      link: "https://mui.com/",
                    })}
                    , resulting in eye-catching websites.
                  </p>
                </div>

                <div className="flex gap-2 py-4">
                  <GiPlayButton className="text-textGreeen w-8 h-8" />
                  <p>
                    Developed user-friendly features <span className="text-textGreeen">(search, addition, updates) </span>
                    for a responsive, dynamic company website. Emphasized
                    reusable components and thorough documentation for easy
                    maintenance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ReusableAnimation>
  );
};

export default Experience;
