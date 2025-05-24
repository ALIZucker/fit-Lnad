import React from 'react';
import Image from "next/image";

import store from "@/public/icon/Frame 1430103290.png";
import like from "@/public/icon/Frame 1430103294.png";
import cal from "@/public/icon/Frame 1430103291.png";
import dots from "@/public/img/Frame 1430103320.png"
import arraw from "@/public/icon/arrow-left.png";
import img2 from "@/public/img/deskrun.png";

function BannerMobile() {
    return (
        <div className="flex flex-row gap-1 lg:px-[8.92vw] px-4 relative">
            <div className="flex flex-col gap-[1vh] lg:gap-6 py-4 w-[60%] lg:w-[50%]">
                <p className="text-gray-700 text-[10px] lg:text-desktext16 ">راحت و مطمئن خرید کنید.</p>
                <h1 className="text-gray-900 text-base font-bold lg:text-desktext32">همراه تو در مسیر سلامتی</h1>
                <p className="text-primary text-lg font-semibold lg:text-desktext32">سهم بزرگ خودتان را امروز بگیرید!</p>
                <p className="text-gray-600 text-[10px] lg:text-desktext16 font-semibold">بزرگترین حراج فصل فیت لند همین حالا شروع کن و
                    محصولات با یه تخفیف انگیز بخر!</p>
                <div className="lg:w-[11vw] lg:h-12 mt-2 w-[40.09vw] h-8 bg-secondery text-white flex flex-row gap-2 items-center justify-center rounded-xl">
                    <Image src={arraw} alt={`image`}/>
                    <p className="text-xs lg:text-desktext16 font-bold">مشاهده محصولات</p>
                </div>

            </div>
            <div className="flex flex-row gap-[5.66vw] justify-center w-[40%]  items-center ">
                <Image src={img2} alt={`image`} className="lg:w-[422px] lg:h-[49.68vh] w-[34.40vw] h-[17.74vh] mt-6"/>
                <div className="lg:flex flex-col gap-4 hidden py-3">
                    <section className="flex flex-row gap-4 w-[12vw] items-center">
                        <Image src={store} alt={`image`} className="w-20 h-20"/>
                        <p className="text-gray40 font-semibold text-desktext16 ">+ ۳۰۰ محصولات متنوع</p>
                    </section>
                    <section className="flex flex-row gap-4 w-[12vw] items-center">
                        <Image src={like} alt={`image`} className="w-20 h-20"/>
                        <p className="text-gray40 font-semibold text-desktext16 ">۹۵ % رضایت مشتری</p>
                    </section>
                    <section className="flex flex-row gap-4 w-[12vw] items-center">
                        <Image src={cal} alt={`image`} className="w-20 h-20"/>
                        <p className="text-gray40 font-semibold text-desktext16 ">۴ روز از خرید تا دریافت</p>
                    </section>
                </div>
            </div>
                <Image src={dots} alt={`image`} className="absolute bottom-0 z-[-1] hidden w-[80%]  lg:block"/>
        </div>
    );
}

export default BannerMobile;