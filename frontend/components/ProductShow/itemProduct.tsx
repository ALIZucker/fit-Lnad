import React from 'react';
import Image from "next/image";
import img from "@/public/img/pronew.png";
import ReadOnlyRating from "@/components/ProductShow/readOnlyRating";
import {dataproduct} from "@/type/next-auth";


function ItemProduct({item}: { item: dataproduct }) {
    return (
        <div className="lg:w-[18vw] lg:h-[53.97vh] relative  flex flex-col gap-4 rounded-2xl shadow-md hover:shadow-xl">
            <img src={item.image} alt="image" className="rounded-t-xl" width={400} height={500} />
            <div className="flex flex-col gap-3 px-3 ">
                {
                    item.off !== null ? (<div
                        className="top-[0.5vh] right-[0.5vw] w-[2.44vw] rounded-2xl py-2  text-center absolute bg-primary text-white text-sm">
                        {item.off}
                    </div>) : null
                }
                <div className="w-full flex flex-row justify-between gap-3 ">
                    <h2 className="text-desktext18 font-semibold"> {item.title}</h2>
                    <ReadOnlyRating star={item.star}/>
                </div>
                <p className="text-xs ">از سایز M تا 3XL</p>
                <div className="flex flex-col gap-3 w-full">
                    <p className="text-sm ">{item.price} تومان</p>
                    {
                        item.offPrice !== null ? (
                            <p className="text-sm text-gray-600 line-through">200.000 تومان</p>
                        ):null
                    }
                </div>

            </div>
        </div>
    );
}

export default ItemProduct;