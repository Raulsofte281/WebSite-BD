import React from "react";
import Alone from '@/assets/Alone.svg'
import Lyrics from '@/assets/Lyrics.svg'
import Properties from '@/assets/Properties.svg'
/* justify-between relative  -left-[90px] */
export function FaixasMusic({src, tittle, autor}: Props){
    return (
        <>
            <div className="flex w-full   mt-3">
                <div className="flex gap-3">
                <img src={src} className="w-16"/>
                <p className="font-medium text-[20px] leading-none mb-0 text-white w-56">{tittle}</p>
                </div>
                <div className="flex relative  -left-[160px] w-56  gap-2">
                <img src={Lyrics} className="mt-8 w-10 "/>
                <p className="font-medium text-[16px] w-[200px] text-[#A7A7A7] mt-10">{autor}</p>
                </div>
                <img src={Properties} className="w-[15px] h-[25px] relative  -left-[110px]  mt-5"/>
            </div>
        </>
    )
}