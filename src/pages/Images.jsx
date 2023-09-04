import React, { useEffect, useState } from 'react'
import Photos from '../components/Photos'
import Searchbar from '../components/Searchbar'
import img5 from '../assests/img5.jpg'

import { fetchImages } from '../utilis'
import Loading from '../components/Loading'



const Images = () => {


  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [imagesss , setImage] = useState([])
  const [loading , setLoading] = useState(true)

  const fetchImg = async () => {
    setLoading(true)
    const res = await fetchImages({ query , limit });
    setData(res);
    setLoading(false)
  };

  
  const handleChange =  (e) => {
    
    e.preventDefault()
    setQuery(e.target.value);

  };
  
  
  const handleSearched =  (e) => {
    setLoading(true)
    e.preventDefault();
    fetchImg();
    setLoading(false)
    console.log("searching");
    
  };

  const showMore = () => {
    setLoading(true)
    setLimit(prev => prev + 10)

    fetchImg()
    setLoading(false)
}

  useEffect(() => {
    fetchImg();
  }, []);

  const seenDetails = ()=>{
     console.log(data)
  }

  if(loading){
    return <Loading/>
  }

  return (
    <div>
          <div className='w-full  h-[100vh] ' >
      
      {/* <marquee className='text-white' behavior="" direction="">Hello world</marquee> */}
      
      <div className=' relative w-full h-full' >
        <img src={ img5 } muted autoPlay loop type='video/mp4' className=' h-full w-full object-cover' />
      </div>

      <div className=' absolute w-full h-full bg-gradient-to-t from-[#161616] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4' >
        <h1 className=' text-white text-3xl md:text-5xl font-bold text-center' >
          Stunning free stock photos for download   
        </h1>
        <p className='text-white text-xl py-2 pt-4' >
          Over 3.6 million+ royalty-free stock photos shared by our talented community.         </p>

        {/* Search Bar */}
        <form onSubmit={handleSearched}  >
          <Searchbar handalInputClick={handleSearched}  handleInputChange={handleChange} />
        </form>

      </div>

    </div>

      <Photos data={data} seenDetails={seenDetails}   showMore={showMore}  />
    </div>
  )
}

export default Images
