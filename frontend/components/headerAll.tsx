import React from 'react';
import HeaderMobileOne from "@/components/Header/headerMobileOne";
import HeaderDesktop from "@/components/Header/headerDesktop";

function HeaderAll() {
    return (
        <div className="flex w-full flex-col items-center lg:gap-10">
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

    );
}

export default HeaderAll;