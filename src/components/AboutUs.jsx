import React from 'react'
import myImg from '../assests/myImg.jpg'

const AboutUs = () => {
  return (
    <div className=' pt-[100px] items-center md:grid grid-cols-2 bg-[#58f0fe3c] h-screen'>
      <div className=' justify-center flex items-center '>
        <img className=' rounded-lg  shadow-2xl'  src={myImg} height={400} width={400} alt="" />
      </div>
      <div className=' text-white pr-[200px] '>
        <p className=' text-orange-400 font-bold'>Hello, Welcome</p>
        <h1 className=' justify-center'> 
        <span className=' pb-4 font-bold text-[50px]'>I'm a Devang Patel</span>
         <br />
         <span className=' text-2xl mt-4 font-bold px-5 py-1 rounded-md  text-black bg-orange-400'>Front End Developer</span>
         </h1>
        <h1 className=' mt-4 font-bold'>I enjoy taking complex problems into simple and beautiful interface designs. I also love the logic and structure of coding and always write efficient code . whether it be HTML , CSS , REACT , etc...</h1>
      </div>
    </div>
  )
}

export default AboutUs
