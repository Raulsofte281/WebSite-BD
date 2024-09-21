import React from "react";
import Back from '@/assets/Back.svg'
import Folder from '@/assets/Folder.svg'
import { BsSpotify } from "react-icons/bs";
import { Heart } from "lucide-react";
import PlayButton from '@/assets/PlayButton.svg'
import Properties from '@/assets/Properties.svg'

export function Music(){
    return (
        <>
        <div className="font-[Poppins] bg-gradient-to-t from-[#121212] to-[#52534E]  w-full h-full py-4 px-3">
           
            
            <div className="flex  justify-center gap-6 ">
                <img src={Back} className="w-6 h-7" />
                <img src={Folder} className="w-[233.56px] drop-shadow-xl"/>
            </div>

           <p className="text-[#A8A8A8] font-medium text-sm pl-2 mt-4">Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more</p>
            <div className="flex gap-2 my-3 pl-2">
            <BsSpotify className="text-green-600 size-6"/>
            <h1 className="text-base text-white font-bold">Spotify</h1>
            </div>
            <p className="text-[#A8A8A8] font-medium text-sm pl-2">191,165 likes . 3h 45min</p>
            <div className="pl-2 mt-2 flex justify-between">
             <div className="flex gap-5">
                <Heart className="text-white size-7"/>
                <img src={Properties} className="w-[15px] h-[25px]"/>
             </div>  
            <img src={PlayButton} className="size-[60px]"/>
            </div>
        </div>
        
        </>
    );
    
}