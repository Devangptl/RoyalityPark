import React from 'react'
import {ImSearch} from "react-icons/im"

const Searchbar = ({
  type,
  value,
  name,
  placeholder,
  handleInputChange,
  required = false,
  handalInputClick
  
} , props) => {
  return (
    <div className=' relative pt-5 ' >
      <input type= { type ||"text"}  name={name} value={value} required={required} onChange={handleInputChange} placeholder='eg. Tiger , Mumbai , Flower'  className=' bg-[black] opacity-50 border border-gray-800 text-gray-300 text-md rounded-md focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block w-[100%]  md:w-[85vh] p-2.5 outline-none px-5 placeholder:text-sm shadow-xl ' />
      <div className=' absolute inset-y-0 right-0 flex  items-center pr-4 pt-5 cursor-pointer' >
            <ImSearch onClick={handalInputClick}  className=' text-gray-600' />
      </div>
    </div>
  )
}

export default Searchbar
