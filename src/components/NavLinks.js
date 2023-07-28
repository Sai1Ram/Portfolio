import React from "react";

const NavLinks = ({data}) => {
  return (
    <div>
      <a className="font-fontMono hover:text-textGreeen focus:text-textGreeen" href={data.link}>
        <span className="text-textGreeen">{data.number}.</span> {data.title}
      </a>
    </div>
  );
};

export default NavLinks;
