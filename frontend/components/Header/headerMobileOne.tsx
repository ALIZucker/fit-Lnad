import React from 'react';
import Image from "next/image";
import img from "@/public/icon/وضعیت های هدر3.png"
import img2 from "@/public/icon/menu.png"
import img3 from "@/public/icon/search-normal.png"

function HeaderMobileOne() {
    return (
        <div className="w-full flex flex-col items-center px-3 gap-2 ">
            <div className="flex justify-between items-center w-full py-3 ">
                <Image src={img} alt={`image`} className={`w-[70px] h-[16px]`}/>
                <Image src={img2} alt={`image`} className={`w-[24px] h-[24px]`}/>
            </div>
            <div className="flex flex-row items-center w-[86.1111vw] gap-2 bg-gray-200 py-1 px-1 rounded-xl">
                <Image src={img3} alt={`image`} className={`w-[24px] h-[24px]`}/>
                <input placeholder={`جست و جو`} className="bg-transparent text-sm "/>
            </div>
        </div>
    );
}

export default HeaderMobileOne;
