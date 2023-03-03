import React from "react";
import { PowerBtn } from "../assets/AllSvg";
import { Link } from "react-router-dom";
function PowerButton({click}) {
  return (
    <>
      <div className={`powerSwitch absolute  left-[50%] translate-x-[-50%] z-[1]`}>
        <Link className={`${click ? 'text-white lg:text-black' : ''}`}>
          <PowerBtn width={30} height={30} fill={"currentColor"} />
        </Link>
      </div>
    </>
  );
}

export default PowerButton;
