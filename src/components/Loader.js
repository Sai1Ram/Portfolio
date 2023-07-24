import React from "react";
function Loader() {
  return (
    <div className="flex justify-center items-center bg-[#040c18] h-screen w-screen ">
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;
