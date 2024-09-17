import { Search } from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import Library from "../assets/Library.png";
import { RiSpotifyFill } from "react-icons/ri";

import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
    <div className="fixed bottom-0 left-0 right-0">
      
      <div className=" bg-gradient-to-t from-black/95 via-black/70 to-black/50 text-gray-300 p-4 shadow-[0px_0px_40px_rgba(0,0,1,0.8)]">
        <div className="flex justify-center">
          <ul className="flex justify-between items-center w-full max-w-lg">
          <Link to="/Home-Screen">
            <li className="flex flex-col items-center cursor-pointer hover:scale-125 transition-transform">
              <GoHomeFill className="w-6 h-6 text-[#ffffff]" />
              <span className="text-xs mt-1">Home</span>
            </li>
            </Link>
            <Link to="/Search">
            <li className="flex flex-col items-center cursor-pointer hover:scale-125 transition-transform">
              <Search className="w-6 h-6 text-[#ffffff]" />
              <span className="text-xs mt-1">Search</span>
            </li>
            </Link>
            <Link to="/Playlist-Screen">
            <li className="flex flex-col items-center cursor-pointer hover:scale-125 transition-transform">
             <img className="w-10 h-7 " src={Library} alt="Library" />
             <span className="text-xs mt-1">Your Library</span>
            </li>
            </Link>
            <Link to="/Music">
            <li className="flex flex-col items-center cursor-pointer hover:scale-125 transition-transform">
              <RiSpotifyFill className="w-10 h-7 text-[#ffffff]"/>
              <span className="text-xs mt-1">Premium</span>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Menu;