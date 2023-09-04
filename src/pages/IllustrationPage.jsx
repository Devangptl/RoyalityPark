import React, { useEffect, useState } from 'react'
import img1 from '../assests/img1.jpg'
import Illustration from '../components/Illustration'
import Searchbar from '../components/Searchbar'
import { fetchIllustration } from '../utilis'
import Loading from '../components/Loading'

const IllustrationPage = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(30);
  const [loading , setLoading] = useState(true)

  const fetchIllu = async () => {
    setLoading(true)
    const res = await fetchIllustration({ query , limit });
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
    fetchIllu();
    setLoading(false)
    console.log("searching");
    
  };

  const showMore = () => {
    setLoading(true)
    setLimit(prev => prev + 10)
    fetchIllu()
    setLoading(false)
}

  useEffect(() => {
    fetchIllu();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <div>
         <div className='w-full h-[100vh] ' >
      
      {/* <marquee className='text-white' behavior="" direction="">Hello world</marquee> */}
      
      <div className=' relative w-full h-full' >
        {/* <img src={HeaderImage} alt="" className=' h-full w-full object-cover' /> */}
        <img src={ img1 } className=' h-full w-full object-cover' />
      </div>

      <div className=' absolute w-full h-full bg-gradient-to-t from-[#161616] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4' >
      <h1 className=' text-white text-3xl md:text-5xl font-bold text-center' >
      Stunning free stock photos for download   
        </h1>
        <p className='text-white text-xl py-2 pt-4' >
        Over 3.6 million+ royalty-free stock photos shared by our talented community.         </p>

        {/* Search Bar */}
        <form action="" onSubmit={handleSearched} >
        <Searchbar handalInputClick={handleSearched}  handleInputChange={handleChange} />
        </form>

      {/* <p className=' text-sm mt-4 text-center text-gray-500 bg-[] px-6 py-4 rounded' >Welcome to my Website</p> */}
      </div>
    </div>
    <Illustration showMore={showMore} data={data} />
    </div>
  )
}

export default IllustrationPage
