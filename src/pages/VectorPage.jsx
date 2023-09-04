import React, { useEffect, useState } from 'react'
import Vector from '../components/Vector'
import img1 from '../assests/img1.jpg'
import Searchbar from '../components/Searchbar'
import { fetchVector, fetchVideos } from '../utilis'
import Loading from '../components/Loading'

const VectorPage = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [loading , setLoading] = useState(true)

  const fetchVec = async () => {
    setLoading(true)
    const res = await fetchVector({ query , limit });
    setData(res);
    setLoading(false)
  };


  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value);
  };


  const handleSearched = async (e) => {
    setLoading(true)
    e.preventDefault();
    fetchVec();
    setLoading(false)
    console.log("searching");
    
  };

  const showMore = () => {
    setLoading(true)
    setLimit(prev => prev + 10)
    fetchVec()
    setLoading(false)
}

  useEffect(() => {
    fetchVec();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <div className='bg-[#3d5755]' > 
       <div className='w-full h-[100vh]  ' >
      
      {/* <marquee className='text-white' behavior="" direction="">Hello world</marquee> */}
      
      <div className=' relative w-full h-full' >
        {/* <img src={HeaderImage} alt="" className=' h-full w-full object-cover' /> */}
        <img src={ img1 } className=' h-full w-full object-cover' />
      </div>

      <div className=' absolute w-full h-full bg-gradient-to-t from-[#3d5755] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4' >
      <h1 className=' text-white text-3xl md:text-5xl font-bold text-center' >
      Stunning free stock photos for download   
        </h1>
        <p className='text-white text-xl py-2 pt-4' >
        Over 3.6 million+ royalty-free stock photos shared by our talented community.         </p>

        {/* Search Bar */}
        <form action=""  onSubmit={handleSearched} >
        <Searchbar handalInputClick={handleSearched}  handleInputChange={handleChange}  />
        </form>

      {/* <p className=' text-sm mt-4 text-center text-gray-500 bg-[] px-6 py-4 rounded' >Welcome to my Website</p> */}
      </div>
    </div>
    <Vector showMore={showMore} data={data} />
    </div>
  )
}

export default VectorPage
