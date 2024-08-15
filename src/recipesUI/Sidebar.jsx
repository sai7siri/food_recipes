import React from "react";
import { CiHeart, CiHome } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { SlBubble } from "react-icons/sl";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <DisplayView />
      <MobileView />
     
    </>
  );
}

export default Sidebar;

const DisplayView = () => {
  return (
    <div className="w-24 border-r-2 p-3 min-h-screen md:w-52 md:p-14 hidden sm:block bg-[#f5f5ed]">
      <div className="flex flex-col items-center gap-16 w-full sticky top-14">
        <div className="flex items-center justify-center w-full">
          <img
            src="./spoon.log.png"
            alt="somethibg"
            className="max-w-32 hidden lg:block"
          />

          <img src="./cook.logo.png" alt="" className="max-w-[70px] lg:hidden" />
        </div>

        <div className="flex flex-col items-center lg:items-start gap-8">

          <Link to="/" className="flex items-center gap-1">
            <CiHome size={"24"} />
            <span className="font-semibold font-mono hidden lg:block">
              Home
            </span>
          </Link>

          <Link to="/liked" className="flex items-center gap-1">
            <FaRegHeart size={"20"}  />
            <span className="font-semibold font-mono hidden lg:block">
              Favourites
            </span>
          </Link>

        </div>

      </div>
      <div className="flex items-center gap-1 fixed bottom-1 ">
            <p className="font-mono  text-xl text-blue-800"> Sai</p>

            <SlBubble size={"20"} color="green"/>
            </div>
    </div>
  );
};

const MobileView = () => {
  return (
  <div className="flex justify-center gap-6 fixed z-10 bottom-0 w-full py-4 border-t-2 bg-black sm:hidden">

   <Link to="/" className="flex items-center gap-1 hover:scale-125 text-white">
            <CiHome size={"24"} />
            
          </Link>

          <Link to="/liked" className="flex items-center gap-1 hover:scale-125 text-white">
            <FaRegHeart size={"20"} />

          </Link>

          <div className="flex items-center gap-1 absolute right-6">
            <p className="font-mono  text-xl text-blue-700"> Sai</p>

            <SlBubble size={"20"} color="yellow"/>
            </div>
  </div>
 

  );
};
