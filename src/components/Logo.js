import { YinYang } from "../assets/AllSvg";

function Logo({ onclick, click }) {
  return (
    <>
      <span
        className={`rounded-[50%] transition-[left, right] duration-500 ease-linear z-[1] absolute ${
          click ? "top-[100%] left-[100%] translate-y-[-90%] translate-x-[-10%] sm:translate-y-[-70%] sm:translate-x-[-40%] lg:translate-y-[-50%] lg:translate-x-[-100%]" : "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        } `}
        onClick={onclick}
      >
        <YinYang
          className={` ${
            click
              ? "h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] lg:h-[100px] lg:w-[100px]"
              : "w-[100px] h-[100px] lg:h-[200px] lg:w-[200px]"
          } animate-spin`}
        />
      {!click && <h2 className={`font-[Pacifico] left-[50%] translate-x-[-50%] absolute text-sm w-full text-center animate-[visible_0.4s_1_0.5s_linear_forwards] opacity-0`}>Click Here</h2>}
      </span>
    </>
  );
}

export default Logo;
