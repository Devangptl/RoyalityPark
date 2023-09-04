import React, { useEffect, useState } from "react";
import Videos from "../components/Videos";
import video1 from "../assests/ocean_-_28268 (1440p).mp4";
import video2 from '../assests/video.mp4'
import Searchbar from "../components/Searchbar";
import { fetchVideos } from "../utilis";
import Loading from "../components/Loading";

const videos = [ video1];

const VideosPage = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [loading , setLoading] = useState(true)

  const fetchV = async () => {
    setLoading(true)
    const res = await fetchVideos({ query , limit });
    setData(res);
    setLoading(false)
  };


  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value);
  };


  const handleSearched =  (e) => {
    e.preventDefault();
    setLoading(true)
    fetchV();
    setLimit(false)
    console.log("searching");
    
  };

  const showMore = () => {
    setLoading(true)
    setLimit(prev => prev + 10)
    fetchV()
    setLoading()
}

  useEffect(() => {
    fetchV();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <div>
      <div className="w-full h-[100vh] ">
        {/* <marquee className='text-white' behavior="" direction="">Hello world</marquee> */}

        <div className=" relative w-full h-full">
          {/* <img src={HeaderImage} alt="" className=' h-full w-full object-cover' /> */}
          <video
            src={videos[Math.floor(Math.random() * videos.length)]}
            muted
            autoPlay
            loop
            type="video/mp4"
            className=" h-full w-full object-cover"
          />
        </div>

        <div className=" absolute w-full h-full bg-gradient-to-t from-[#161616] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
          <h1 className=" text-white text-3xl md:text-5xl font-bold text-center">
            Stunning free stock video footage & clips
          </h1>
          <p className="text-white text-xl py-2 pt-4">
            Thousands of free stock video clips & footage shared by our talented
            community.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearched}  >
          <Searchbar handalInputClick={handleSearched}  handleInputChange={handleChange}  />
          </form>

          {/* <p className=' text-sm mt-4 text-center text-gray-500 bg-[] px-6 py-4 rounded' >Welcome to my Website</p> */}
        </div>
      </div>
      <Videos showMore={showMore} data={data} />
    </div>
  );
};

export default VideosPage;
