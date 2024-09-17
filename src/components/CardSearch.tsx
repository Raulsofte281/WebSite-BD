import React from "react";

export function CardSearch({tittle, className = ''}: Props){/* w-[184px] h-[116px] p-2 mt-3 rounded-[6px] max-sm:w-1/2 */
    return(
    <>
        <div className={`${className}`} >
            <h1 className="text-white font-bold rounded-[6px]">{tittle}</h1>

        </div>
    </>
    );
}
