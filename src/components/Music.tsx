import { Menu } from "@/components/Menu";
import Poster from "@/assets/Poster.png";
import Propertier from "@/assets/Properties.png";
import Arrow from "@/assets/Arrow.png";
import Heart from "@/assets/Heart.png";

export function Music() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute top-[9px] left-0 m-4">
          <img className="w-[15px] h-[15px]" src={Arrow} alt="Arrow Icon" />
        </div>
        <div className="absolute top-[9px] right-0 m-4">
          <img className="w-[8px] h-[18px]" src={Propertier} alt="Propertier Icon" />
        </div>
        <div className="text-[#ffffff] text-center pt-3 pb-9">
          <h1 className="font-normal text-sm">PLAYING FROM SEARCH</h1>
          <h2 className="font-semibold text-sm">“stay” in Songs</h2>
          <img className="w-[300px] h-[340px] pl-3 pr-3 pt-5" src={Poster} alt="" />
        </div>
        <div className="flex items-center justify-between w-full px-[50px] pt-3 text-[#ffffff]">
          <div>
            <h1 className="font-bold text-xl">STAY (with Justin Bieber)</h1>
            <h2 className="font-semibold text-base text-[#B8B7B5]">The Kid LAROI, Justin Bieber</h2>
          </div>
          <img className="w-[20px] h-[20px]" src={Heart} alt="Heart Icon" />
        </div>
        <div className="w-full px-[50px] mt-3">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="25" 
            className="w-full h-1 bg-[#535353] rounded-lg appearance-none cursor-pointer" 
          />
          <div className="flex justify-between text-xs text-[#B8B7B5] mt-1 ">
            <span>1:23</span>
            <span>3:36</span>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Music;
