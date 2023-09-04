import React from "react";
import signImg from "../assests/GDPR.gif";

const SignUp = () => {
  return (
    <div className=" pt-[100px] items-center md:grid grid-cols-2 bg-[#58f0fe3c] h-screen">
      <div className=" justify-center flex items-center ">
        <img
          className=" rounded-lg  shadow-2xl"
          src={signImg}
          height={400}
          width={400}
          alt=""
        />
      </div>

      <div className=" text-white pr-[200px] ">
        <p className="text-3xl text-center uppercase text-orange-400 font-bold">
          Sign up
        </p>
        <form action="">
        <div className=" px-[50px] py-[50px] flex flex-col">
            <div className="  flex  justify-between">
            <input className=" outline-none text-black rounded-sm py-1 pl-2" type="text" placeholder="First Name" />
            
            <input className=" outline-none text-black rounded-sm py-1 px-2" type="text" placeholder="Last Name" />
            </div>
            <br />
          <input className=" outline-none text-black rounded-sm py-1 px-2" type="email" placeholder="Email" />
          <br />
          <div className="  justify-between items-center  flex flex-row  ">
            <input className=" outline-none text-black rounded-sm py-1 pl-2" type="password" placeholder="Password" />
          
            <input className="  outline-none  text-black rounded-sm py-1 px-2" type="password" placeholder=" Confirm Password" />
          </div>
          <div className=" flex justify-center items-center pt-[30px]">

        <button className="  items-center  uppercase font-bold w-full hover:bg-orange-600 duration-300 py-1 bg-orange-400" type="submit"> Submit</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
