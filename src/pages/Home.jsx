import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { fetchImages, fetchVideos } from "../utilis";
import Searchbar from "../components/Searchbar";
import { BsChevronCompactDown, BsVectorPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillCamera, AiOutlineCamera } from "react-icons/ai";
import {FaPaintbrush, FaVideo} from 'react-icons/fa6'
import Loading from '../components/Loading'
import {saveAs} from "file-saver";

const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [loading , setLoading] = useState(true)

  // console.log(query)

  const handleChange = (e) => {
    // e.preventDefault()
    setQuery(e.target.value);
  };

  const fetchImg = async () => {
    setLoading(true)
    const res = await fetchImages({ query, limit });

    setData(res);
    setLoading(false)
  };

  console.log(data);

  const handleSearched = async (e) => {
    setLoading(true)
    e.preventDefault();
    fetchImg();
    setLoading(false)
    console.log("searching");
  };

  const showMore = () => {
    setLoading(true)
    setLimit((prev) => prev + 10);
    fetchImg();
    setLoading(false)
  };

  const handleClick = (card)=>{

    let url = card.target.src
    const tags = card.target.alt.charAt(0).toUpperCase() + card.target.alt.substr(1).toLowerCase()
    // console.log(tags)
    saveAs(url , tags);
   }

  useEffect(() => {
    fetchImg();
  }, []);
  // console.log(data)

  if(loading){
    return  <Loading/> ;
  }

  return (
    <div>
      <Header />

      <div className=" md:flex   pb-7  items-center justify-between px-6">
        <ul className=" hidden  uppercase  gap-9 mb-[-15px] md:flex text-[#828282] md:text-md font-mono font-semibold  ">
          <li className=" hover:text-[#dd5805] duration-500 ">
            <Link className="flex justify-start items-center gap-1"  to={"/images"}> <AiFillCamera className="text-md" /> Photos</Link>
          </li>
          <li className=" hover:text-[#dd5805] duration-500 ">
            <Link className="flex justify-start items-center gap-1"  to={"/videos"}> <FaVideo className="text-md" /> Videos</Link>
          </li>
          <li className=" hover:text-[#dd5805] duration-500 ">
            <Link className="flex justify-start items-center gap-1"  to={"/illustration"}> <FaPaintbrush className="text-md" /> Illustration</Link>
          </li>
          <li className=" hover:text-[#dd5805] duration-500 ">
            <Link className="flex justify-start items-center gap-1"  to={"/vector"}> <BsVectorPen className="text-md" /> Vector</Link>
          </li>
        </ul>

        <form action="" onSubmit={handleSearched} onClick={handleSearched}>
          <div className=" ">
            <Searchbar handleInputChange={handleChange} className=" w-[100%]" />
          </div>
        </form>
      </div>

      {/* <Events />
      <EventVideo /> */}
      {/* <Videos/> */}
      {/* <Photos data={data} fetchImg={fetchImg} /> */}

      <div className="  bg-gradient-to-t from-[white]  " >
        <div
          style={{ gridAutoFlow: "dense" }}
          className=" px-3 grid md:grid-cols-5  h-[100%] w-[100%]  gap-3 "
        >
          {data.map((card) => (
            <>
              <div className=" p-1 imgs container-img w-[100%] h-[100%] relative  ">
                <div className=" rounded-lg   relative w-[100%] h-[100%] overflow-hidden ">
                  <img
                    className={`  w-[100%] h-[100%] object-cover object-center  cursor-pointer hover:scale-110  hover:opacity-80 duration-500  rounded-sm`}
                    src={card.webformatURL}
                    alt={card.tags}
                    onClick={handleClick}
                  />
                   <button 
               className="text opacity-0 px-4 py-2  rounded-xl absolute top-[80%] transition ease-in-out left-[50%] pointer-events-none z-[4]  text-[white] duration-500 bg-[green] transform translate-x-[-50%] translate-y-[-50%] hover:text-[#d86c2a] text-sm font-bold " 
               >
                DownLoad
              </button>
                </div>

                <p className=" text opacity-0 px-4 py-2  rounded-xl absolute top-[50%] transition ease-in-out left-[50%] pointer-events-none z-[4]  text-[white] duration-500 transform translate-x-[-50%] translate-y-[-50%] hover:text-[#d86c2a] text-sm font-bold ">
                  {card.tags.charAt(0).toUpperCase() +
                    card.tags.substr(1).toLowerCase()}
                  {/* text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() */}
                </p>
              </div>
            </>
          ))}
        </div>
        <div className="  ">

        <div className="flex w-full items-center justify-center py-9">
          <button
            className="bg-green-800 text-white px-3 py-1 rounded-full text-sm flex items-center justify-center gap-2  "
            onClick={showMore}
            >
            Show more
            <span className="  ">
              <BsChevronCompactDown />
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
