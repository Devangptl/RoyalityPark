import React, { useEffect, useState } from "react";
import { fetchVector } from "../utilis";
import { BsChevronCompactDown } from "react-icons/bs";
import {saveAs} from "file-saver";

const Vector = (props) => {
  const handleClick = (card)=>{

    let url = card.target.src
    const tags = card.target.alt.charAt(0).toUpperCase() + card.target.alt.substr(1).toLowerCase()

    saveAs(url , tags);
   }


  return (
    <div className=" bg-gradient-to-t from-[white] ">
   {   
    props.data?.length > 0 ? (
     <>
      <div
        style={{ gridAutoFlow: "dense" }}
        className=" px-3 grid md:grid-cols-5 relative h-[100%] w-[100%]  gap-3 "
      >
        {props.data.map((card) => (
          <>
            <div className=" p-1 imgs  container-img w-[100%] h-[100%] relative  ">
              <div className=" rounded-lg  relative w-[100%] h-[100%] overflow-hidden ">
                <img
                  className={`  w-[100%] h-[100%] object-cover object-center  cursor-pointer hover:scale-110  hover:opacity-80 duration-500 `}
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
      <div className="flex w-full items-center justify-center py-9">
        <button className={`  bg-green-800 text-white px-3 py-1 rounded-full text-sm flex items-center justify-center gap-2  `} onClick={props.showMore} >Show more <span className="  " ><BsChevronCompactDown/></span> </button>
      </div>
      </>
    ) :  (
      <div className="text-white w-full items-center justify-center py-10">
        <p className="text-center text-4xl font-bold ">Images Found</p>
      </div>
    )
      }
    </div>
  );
};

export default Vector;
