import React from 'react';
import Image from "next/image";
import arraw from "@/public/icon/arrow-left.png";


interface IProps {
    text: string;
    description: string;
    image: string;
    bool: boolean;
    size: string
}

function SecondBanner({text, description, image, bool, size}: IProps) {
    return (
        <>

            <div className="w-full flex flex-col  lg:h-[70vh]  h-[24vh]" style={{
                backgroundImage: `url('${image}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${size}`,
                backgroundPosition: "top"
            }}>
                <div className="lg:px-[7.769vw] lg:py-[16.52vh] py-[2.52vh] px-[1.769vw] flex flex-col items-center gap-2">

                    {
                        bool ? (
                            <div className="w-full flex flex-col  lg:gap-2 gap-1">
                                <h2 className="lg:text-desktext24 text-mobtext10 ">
                                    {text}
                                </h2>
                                <p className="lg:text-desktext24 text-mobtext10 font-semibold">{description}</p>
                                <div
                                    className="lg:w-[11vw]  lg:h-12 lg:mt-8 mt-2 w-[23.09vw] h-8 bg-secondery text-white hidden lg:flex flex-row gap-2 items-center justify-center rounded-xl">
                                    <Image src={arraw} alt={`image`} className="w-4 h-4 lg:w-6 lg:h-6"/>
                                    <p className="text-[8px] lg:text-desktext16 font-bold">مشاهده محصولات</p>
                                </div>
                            </div>
                        ) : null
                    }

                </div>

            </div>

        </>
    );
}

export default SecondBanner;
