import React from "react";
import BallCanvas from "./Ball";
function Skills() {
  const technologies = [
    {
      name: "HTML 5",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/html_dyrmws.png",
    },
    {
      name: "CSS 3",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/css_je3kuc.png",
    },
    {
      name: "JavaScript",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/javascript_fscw5i.png",
    },
    {
      name: "React JS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/reactjs_qxndia.png",
    },
    {
      name: "PHP",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679651461/portfolio/kisspng-php-server-side-scripting-yii-web-application-scri-5b00d886698cb9.3580042815267820864324_toqlik.jpg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/tailwind_axhorq.png",
    },
    {
      name: "Node JS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/nodejs_vk2f3h.png",
    },
    {
      name: "MongoDB",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/mongodb_vkiokg.png",
    },
    {
      name: "git",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/git_khlotn.png",
    },
  ];
  return (
    <div className="w-full justify-center flex-wrap flex flex-row">
      {technologies
        .map((v, i) => {
          return (
            <div className=" md:w-20 md:h-20 w-10 h-10" key={i}>
              <BallCanvas icon={technologies[i].icon} />
            </div>
          );
        })}
    </div>
  );
}

export default Skills;
