import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { BsChevronCompactDown } from "react-icons/bs";
import { saveAs } from "file-saver";

const Videos = (props) => {
  const handleClick = (card) => {
    let url = card.target.src;
    saveAs(url);
  };

  return (
    <div className=" bg-gradient-to-t from-[white] ">
      {props.data?.length > 0 ? (
        <>
          <div
            style={{ gridAutoFlow: "dense" }}
            className=" px-3 grid md:grid-cols-5 relative h-[100%] w-[100%]  gap-3 "
          >
            {props.data.map((card) => (
              <>
                <div className=" p-1   container-video w-[100%] h-[100%] relative  ">
                  <div className=" rounded-xl relative w-[100%] h-[100%] overflow-hidden ">
                    <HoverVideoPlayer
                      videoSrc={card.videos.tiny.url}
                      className={` w-[100%] h-[100%] object-cover object-center  cursor-pointer hover:scale-110  hover:opacity-80 duration-500 `}
                      preload=""
                      type="video/mp4"
                      onClick={handleClick}
                    />
                    <button className="text opacity-0 px-4 py-2  rounded-xl absolute top-[80%] transition ease-in-out left-[50%] pointer-events-none z-[4]  text-[white] duration-500 bg-[green] transform translate-x-[-50%] translate-y-[-50%] hover:text-[#d86c2a] text-sm font-bold ">
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
            <button
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm flex items-center justify-center gap-2  "
              onClick={props.showMore}
            >
              Show more{" "}
              <span className="  ">
                <BsChevronCompactDown />
              </span>{" "}
            </button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center text-4xl font-bold "> Videos Found</p>
        </div>
      )}
    </div>
  );
};

export default Videos;
