'use client'
import React from 'react';
import style from "@/components/BannerItems/style.module.css";
import Image from "next/image";
import icon from "@/public/icon/3square.png"

interface PropsPost {
    image: string;
    text: string;
}


function PostNew({image, text}: PropsPost) {

    const [isHover, setIsHover] = React.useState<boolean | undefined>(false);

    return (
        <div className="relative">

            <div onMouseEnter={() => setIsHover(true)}
                 className={`w-[39.34vw] h-[25.11vh] ${isHover ? "blur-[4px]" : " "} lg:w-[20.57vw] lg:h-[48.32vh] rounded-xl   `}
                 style={{backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "top"}}>

                <div
                    className={`absolute bottom-0 flex  right-0 w-full  flex-col gap-2 items-center text-white lg:px-1 px-2 lg:py-[4vh] py-2.5 justify-end h-[84px] lg:w-full  lg:h-[20.08vh] rounded-xl ${style.backgroundText}`}>
                    <p className=" text-[9px] lg:text-desktext18 text-center justify-center lg:w-[15vw] w-[31vw]"> {text}</p>

                </div>

            </div>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                 className={` absolute h-full w-full ${isHover ? "" : "hidden "} py-8 rounded-xl top-0 flex flex-col gap-2 items-center px-4 justify-end`}
                 style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
                <p className="text-white text-center lg:text-desktext20  text-monile12">فقط با یک کلیک وارد دنیای محصولات جدید
                    شوید</p>
                <div className="flex w-[28.98vw] lg:w-[12.28vw] py-2 rounded-xl px-1 flex-row justify-center gap-2 bg-transparent " style={{border:"1px solid white"}}>
                    <p className="text-white  lg:text-desktext16 text-mobtext10">
                        جدیدترین محصولات
                    </p>
                    <Image src={icon} alt={`image`}/>
                </div>
            </div>
        </div>
    );
}

export default PostNew;