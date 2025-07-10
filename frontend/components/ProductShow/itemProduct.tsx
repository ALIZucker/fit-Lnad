import React from 'react';
import Image from "next/image";
import img from "@/public/img/pronew.png";
import ReadOnlyRating from "@/components/ProductShow/readOnlyRating";
import {dataproduct} from "@/type/next-auth";


function ItemProduct({item}: { item: dataproduct }) {
    return (
        <div className="lg:w-[21vw] lg:h-[66.05vh] relative  flex flex-col gap-[1.4578vh] rounded-2xl shadow-md hover:shadow-xl">
            <img src={item.image} alt="image" className="rounded-t-xl w-full object-cover lg:h-[43.0108vh]" />
            <div className="flex flex-col gap-3 px-3 ">
                {
                    item.off !== null ? (<div
                        className="top-[0.5vh] right-[0.5vw] lg:w-[2.44vw] w-[40px]  rounded-2xl py-2  text-center absolute bg-primary text-white text-sm">
                        {item.off}
                    </div>) : null
                }
                <div className="w-full flex flex-row justify-between gap-3 ">
                    <h2 className="text-desktext18 font-semibold"> {item.title}</h2>
                    <ReadOnlyRating star={item.star}/>
                </div>
                <p className="text-[0.8vw] ">از سایز M تا 3XL</p>
                <div className="flex flex-col gap-[1.8vh] w-full">
                    <p className="text-sm ">{item.price} تومان</p>
                    {
                        item.offPrice !== null ? (
                            <p className="text-[0.7vw] text-gray-600 line-through">200.000 تومان</p>
                        ):null
                    }
                </div>

            </div>
        </div>
    );
}

export default ItemProduct;