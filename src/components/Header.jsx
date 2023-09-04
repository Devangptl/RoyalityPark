import React, { useEffect, useState } from "react";
import { fetchVideos } from "../utilis";
import { BsChevronCompactDown } from "react-icons/bs";
import vid from '../assests/production_id_4913016 (2160p).mp4'

// const videos = [video1, video2, video3];

const Header = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    // e.preventDefault()
    setQuery(e.target.value);
  };

  const fetchV = async () => {
    const res = await fetchVideos({ query });

    setData(res);
  };

  const handleSearched = async (e) => {
    e.preventDefault();
    fetchV();
    console.log("searching");
  };



  useEffect(() => {
    fetchV();
  }, []);

  return (
    <>
    <div className="w-full bg-[#101010] opacity-100 h-[100vh] ">
      {/* <marquee className='text-white' behavior="" direction="">Hello world</marquee> */}

      <div className=" relative w-full h-full">
        {/* <img src={HeaderImage} alt="" className=' h-[100%] w-[50%] ' /> */}
        <video
          src={vid}
          muted
          autoPlay
          loop
          type="video/mp4"
          className=" h-full w-full object-cover"
        />
      </div>

      <div className=" text-left absolute w-full h-full bg-gradient-to-t from-[#161616] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className=" text-white text-2xl md:text-5xl font-bold ">
          Stunning royalty-free images & royalty-free stock
        </h1>
        <p className="text-white  text-left md:text-xl text-sm py-2 pt-4">
          Over 4.1 million+ high quality stock images, videos shared by our
          talented community.
        </p>

        {/* Search Bar */}
        {/* <Searchbar handleInputChange={handleChange} /> */}

{/*        
        <p className=" p-3 px-6 rounded-full bg-white text-3xl mt-10 font-bold text-[black]">
          Scroll Now
        </p> */}

        {/* <p className=' text-sm mt-4 text-center text-gray-500 bg-[] px-6 py-4 rounded' >Welcome to my Website</p> */}
      </div>
    </div>
    
          </>
  );
};

export default Header;
