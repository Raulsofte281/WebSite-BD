import App from "@/App";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import React, {useState} from "react"; 

/* assets */
import Lupa from '../assets/Lupa.svg'
import { OctagonPauseIcon } from "lucide-react";

   

export function Search(){
   return(
      <>
         <div className="bg-[#181818] w-full p-4">
            <h1 className="font-bold text-white text-4xl pt-6 mb-5">Search</h1>
               <div className="flex w-full bg-white rounded-[9px]">
               <img src={Lupa} className='bg-white absolute left-5 top-[107px] w-10'/>
               <Input className="bg-white rounded-[9px] " placeholder="artist" />
            </div>
         </div>
      </>
   );
}