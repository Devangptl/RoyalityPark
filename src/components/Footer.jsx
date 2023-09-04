import React from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import {CiFacebook, CiLinkedin} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="" >
    <hr />
    <div className=" md:px-3 px-6  bg-white h-full  md:grid grid-cols-2">

      <div className="   flex flex-col justify-center items-center " >
        <div className="" ><Link
          to={"/"}
          className=" mt-2 mb-3 flex gap-1 items-center justify-center text-white text-lg cursor-pointer"
        >
          <img src={logo} alt="logo" className="   w-8 h-8 lg:w-14 lg:h-14" />
          <p
            className=" text-xl font-bold text-[black]"
          >
             <span className="text-2xl" >R</span>oyalty 
            <span className=" text-[green] text-2xl">
              Park
            </span>
          </p>
        </Link>
</div>
        <div className="" >Over 4.3 million+ high quality stock images, videos and music shared by our talented community.</div>
      <div className=" py-5" >
        <ul className=" text-3xl  flex gap-7 " >
          <li className=" pb-1 hover:text-[green] hover:scale-110 duration-200 "> <Link to={'https://www.instagram.com/devang_.03/'} ><AiOutlineInstagram/></Link></li>
          <li className=" pb-1 hover:text-[green] hover:scale-110 duration-200 "> <Link to={'https://github.com/Devangptl'} ><AiFillGithub/></Link></li>
          <li className=" pb-1 hover:text-[green] hover:scale-110 duration-200 "> <Link to={'https://www.linkedin.com/in/devangmakani/'} ><CiLinkedin/></Link></li>
          {/* <li className=" pb-1 hover:text-[green] hover:scale-110 duration-200 "> <Link to={''} ><AiOutlineTwitter/></Link></li> */}
      
        </ul>
      </div>
      </div>

     
      <div className="justify-center m-10  text-black md:gap-14 gap-10 flex flex-row" >
        <div className="" > <span className="  font-bold text-lg" >Discover</span>
          <ul className="text-md pt-2 text-[#343333] " >
            <li className=" pb-1 hover:text-[green]" ><Link to={'/'} >Editor's Choice</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Curated Collections</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Popular Images</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Popular Videos</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Popular Searches</Link></li>
           
          </ul>
        </div>
        <div> <span className=" font-bold text-lg">Community</span>
        <ul className="text-md pt-2 text-[#343333] " >
            <li className=" pb-1 hover:text-[green]" ><Link to={'/'} >Blog</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Forum</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Creators</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Cameras</Link></li>
           
          </ul>
        </div>
        <div> <span className=" font-bold text-lg">About</span>
        <ul className="text-md pt-2 text-[#343333] " >
            <li className=" pb-1 hover:text-[green]" ><Link to={'/'} >About Us</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >FAQ</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >License Summary</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Terms of Service</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Privacy Policy</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >Cookies Policy</Link></li>
            <li className=" pb-1 hover:text-[green]"><Link to={''} >API</Link></li>
           
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
