import React from 'react';
import Image from "next/image";
import img from "@/public/icon/404.png";
import arraw from "@/public/icon/arrow-left.png";
import HeaderMobileOne from "@/components/Header/headerMobileOne";
import HeaderDesktop from "@/components/Header/headerDesktop";
import Footer from "@/components/Footer/Footer";
function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center lg:gap-10">
                <div
                    className="flex flex-row items-center justify-center lg:text-desktext24  text-mobtext10 py-3  bg-secondery text-white  w-full">
                    با عضویت در فیت لند اولین ارسال را مهمون ما باش :)
                </div>
                <div className="lg:hidden flex w-full">
                    <HeaderMobileOne/>
                </div>
                <div className="hidden lg:flex lg:w-full  lg:flex-col items-center  gap-10 relative">
                    <HeaderDesktop/>
                </div>
            </div>

            <div className="py-[15vh]">
                <div className="flex w-full items-center gap-10 justify-center px-5  flex-col">
                    <Image src={img} alt={`image`} className="lg:w-[27.45vw] w-full lg:h-[26.61vh] object-cover"/>
                    <p className="lg:text-desktext24 text-[18px] font-semibold ">متاسفانه صفحه مورد نظر پیدا نشد :(</p>
                    <div
                        className="lg:w-[11.44vw] lg:h-[4.18vh] mt-2 w-[75.60vw] h-[56px]  bg-secondery text-white flex flex-row gap-2 items-center justify-center rounded-xl">
                        <Image src={arraw} alt={`image`}/>
                        <p className="text-xs lg:text-desktext16 font-bold">مشاهده محصولات</p>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    );
}

export default NotFound;