import App from "@/App";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import React, {useState} from "react";
import Menu from "./Menu"; 
import {CardSearch} from '@/components/CardSearch'

/* assets */
import Lupa from '../assets/Lupa.svg'
import { OctagonPauseIcon } from "lucide-react";

   

export function Search(){
   return(
      <> {/* tenta isso */}
      
         <div className="bg-[#181818] w-full p-4">
            <h1 className="font-bold text-white text-4xl pt-6 mb-5">Search</h1>
               <div className="flex w-full bg-white rounded-[9px]">
               <img src={Lupa} className='bg-white absolute left-5 top-[107px] w-10'/>
               <Input className="bg-white rounded-[9px] " placeholder="artist" />
            </div>
            <h1 className="text-white mt-2 font-bold">your top genres</h1>
            
            <div className="flex flex-wrap gap-5">
            <CardSearch 
            className="bg-[#8C67AC] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Pop"/>
            <CardSearch className="bg-[#8B1932] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Bollywood"/>
            </div>

            <h1 className="text-white mt-6 font-bold">Browse All</h1>

            <div className="flex flex-wrap gap-5">
            <CardSearch 
            className="bg-[#E13300] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Podcasts"/>

            <CardSearch 
            className="bg-[#E8125C] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="New Realeases"/>
            </div>

            <div className="flex flex-wrap gap-5">
            <CardSearch 
            className="bg-[#8C67AC] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Charts"/>

            <CardSearch 
            className="bg-[#1E3264] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Concerts"/>
            </div>

            <div className="flex flex-wrap gap-5">
            <CardSearch 
            className="bg-[#1E3264] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="Made for you"/>

            <CardSearch 
            className="bg-[#477D95] w-[184px] h-[116px] p-2 mt-3 rounded-[6px]"
            tittle="At Home"/>
            </div>
         </div>
         
         <Menu/>
      </>
   );
}