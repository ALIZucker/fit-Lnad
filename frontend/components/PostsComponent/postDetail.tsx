'use client'
import React from 'react';
import Image from "next/image";


interface PostDetailProps {
    image: string;
    title: string;
    price: string;
    vip: boolean;
    off: string;
}


function PostDetail({image, title, price, vip, off}: PostDetailProps) {
    return (
        <div className="lg:w-[366px] w-full lg:h-[468px] bg-white flex flex-col justify-start relative rounded-xl">
            <img
                src={image}
                alt="asdasd"
                className="w-full rounded-xl object-cover object-center"
                width={366} // Required
                height={280} // Required
            />
            <div className="flex flex-col text-[14px] lg:text-desktext18 items-end gap-2 py-2 px-2 "  >
                <h3 >{title}</h3>
                <p > {price} تومان</p>
                <p>از سایز L تا XXl</p>
            </div>
            <div className="flex flex-row gap-2 top-1 left-1 items-center absolute">
                {
                    vip ? (
                        <p className="bg-primary text-white text-monile12 lg:text-desktext16 w-10 h-10 rounded-[50%] flex flex-row justify-center items-center">VIP</p>

                    ) : null
                }
                {
                    off !== null ? (
                        <p className="bg-blue50 text-black text-monile12 lg:text-desktext16 w-10 h-10 rounded-[50%] flex flex-row justify-center items-center">{off}</p>

                    ) : null
                }
            </div>
        </div>
    );
}

export default PostDetail;