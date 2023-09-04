import React, { useEffect, useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { AiFillCamera, AiFillHome, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsVectorPen } from "react-icons/bs";
import { FaPaintbrush, FaVideo } from "react-icons/fa6";

const Navbar = () => {
  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [open, setOpen] = useState(false);
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#101010") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <div
      
      className=" w-full fixed z-10 bd-black opacity-90"
    >
      <div
       style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }} 
       className=" flex w-full py-2 md:py-3 px-4 md:px20 items-center justify-between">
        <Link
          to={"/"}
          className="flex gap-1 items-center justify-center text-[white] text-lg cursor-pointer"
        >
          <img src={logo} alt="logo" className="   w-8 h-8 lg:w-14 lg:h-14" />
          <p
            className=" text-xl font-bold text-[white]"
          >
             <span className="text-2xl" >R</span>oyalty 
            <span className=" text-[green] text-2xl">
              Park
            </span>
          </p>
        </Link>

        <ul
          className=" hidden md:flex text-[white] text-xl font-semibold font-sans  gap-6"
        >
          <li className=" hover:text-[green]  duration-300 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" hover:text-[green] duration-300 ">
            <Link to={"/images"}>Images</Link>
          </li>
          <li className=" hover:text-[green] duration-300 ">
            <Link to={"/videos"}>Videos</Link>
          </li>
          <li className=" hover:text-[green] duration-300 ">
            <Link to={"/illustration"}>Illustration</Link>
          </li>
          <li className=" hover:text-[green] duration-300 ">
            <Link to={"/vector"}>Vector</Link>
          </li>
          <li className=" hover:text-[green] duration-300 ">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>

        <button
          className=" hidden py-1 md:block bg-transparent border border-[white] font-semibold font-sans text-[white] hover:text-[black] hover:border-none rounded-md min-w-[130px] hover:bg-[white] duration-300 ease-linear"
        ><Link to={'/signup'}>Sign in</Link>
          
        </button>

        <button
          className=" duration-1000  block md:hidden text-white   text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose className="" /> : <HiMenuAlt3 />}
        </button>
      </div>
      <div
        className={`${
          open ? " translate-x-[0%]" : " "
        } flex-col bg-[#101010] font-bold  flex translate-x-[-100%] duration-700 transition-all text-center  w-full px-4 pt-16 pb-10 text-white gap-6 text-[15px] `}
      >
        <Link className="flex justify-center items-center gap-3" to={"/"}><AiFillHome/>Home</Link>
        <Link className="flex justify-center items-center gap-3" to={"/Images"}><AiFillCamera className="text-md" />Images</Link>
        <Link className="flex justify-center items-center gap-3" to={"/videos"}><FaVideo className="text-md" />Videos</Link>
        <Link className="flex justify-center items-center gap-3" to={"/illustration"}><FaPaintbrush className="text-md" />Illustration</Link>
        <Link className="flex justify-center items-center gap-3" to={"/vector"}><BsVectorPen className="text-md" />Vector</Link>
        <Link className="flex justify-center items-center gap-3" to={"/about"}><BsVectorPen className="text-md" />About</Link>
      </div>
    </div>
  );
};

export default Navbar;
