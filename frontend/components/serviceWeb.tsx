import React from 'react';
import Image from "next/image";

import img from "@/public/icon/frame1.png";
import img2 from "@/public/icon/frame2.png";
import img3 from "@/public/icon/frame3.png";

function ServiceWeb() {
    return (
        <div className="lg:w-[90%] w-full flex lg:flex-row flex-col lg:gap-5  gap-1 mt-8 bg-bluesky ">
            <section className="flex flex-row gap-6 lg:w-[50%] w-full justify-center lg:justify-end py-3 ">
                <Image src={img} alt={`image`} className="lg:w-[162px] lg:h-[162px] w-[72px] h-[72px]"/>
                <Image src={img2} alt={`image`} className="lg:w-[162px] lg:h-[162px] w-[72px] h-[72px]"/>
                <Image src={img3} alt={`image`} className="lg:w-[162px] lg:h-[162px] w-[72px] h-[72px]"/>
            </section>
            <div className="flex flex-col items-center  justify-center lg:w-[40%] w-full py-5">
              <p className="lg:text-desktext24 text-center text-monile12 font-bold lg:w-[50%] w-full">  با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</p>
            </div>
        </div>
    );
}

export default ServiceWeb;