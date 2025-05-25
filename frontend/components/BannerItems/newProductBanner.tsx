import React, {JSX} from 'react';
import style from './style.module.css'
import Image from "next/image";
import arraw from "@/public/icon/arrow-left.png";
import PostNew from "@/components/BannerItems/postNew";


interface PropsNewProduct {
    imageFirst: string;
    imageSecend: string;
    textFirst: string;
    textSecondary: string;
    descriptionFirst: string;
    descriptionSecondary: string;

}

function NewProductBanner({textFirst,descriptionFirst,imageFirst,imageSecend,textSecondary,descriptionSecondary}: PropsNewProduct) {

    return (
        <div className="lg:w-[80%] w-full  flex flex-row  justify-around lg:gap-6 gap-2 py-[7.84vh] lg:px-4   ">
           <PostNew image={imageFirst} text={textFirst}  />
            <PostNew image={imageSecend} text={textSecondary} />


            <div className="w-[16.27vw] lg:flex flex-col items-center justify-end gap-2 hidden">
                <h2 className="text-desktext24 font-semibold">{descriptionFirst}</h2>
                <p className="text-desktext16 text-gray50">{descriptionSecondary}</p>
                <div
                    className="lg:w-[16.27vw] lg:h-12 mt-2 w-[40.09vw] h-8 bg-primary text-white flex flex-row gap-4 items-center justify-center rounded-xl">
                    <img src={arraw.src} alt={`image`}/>
                    <p className="text-xs lg:text-desktext16 font-bold">مشاهده محصولات</p>
                </div>
            </div>

        </div>
    );
}

export default NewProductBanner;