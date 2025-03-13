import {Menu} from "@/components/Menu";
import EdSheeran from "@/assets/Ed Sheeran.png"
import { IoIosArrowBack } from "react-icons/io";

export function Playlist() {
  return (
    <>
    <div className=" relative font-[Poppins] bg-gradient-to-t from-[#121212] to-[#52534E] w-full h-full py-4 px-3 ">
      <div className="absolute z-20 pt-4">
        <IoIosArrowBack className="text-white"/>
      </div>
      <img className="flex pl-20 pr-20 z-10 pt-5" src={EdSheeran} alt="" />
    </div>
    <Menu/>
    </>
  );
}

export default Playlist;