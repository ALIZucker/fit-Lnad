'use client'
import React from 'react';
import FilterSilde from "@/components/ProductShow/filterSilde";
import axios from "axios";
import ItemProduct from "@/components/ProductShow/itemProduct";
import {dataproduct} from "@/type/next-auth";
import Image from "next/image";



function ShowProduct() {
    const [data, setdata] = React.useState<dataproduct[]>()

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/products");
                setdata(response.data);
            } catch (error) {
                console.error("خطا در دریافت محصولات:", error);
            }
        };
        fetchProducts();
    }, []);

    const [filterPopular, setFilterPopular] = React.useState<number | null>(null);

    const handelunderLinde = (item: number) => {
        setFilterPopular(item)
    }



    return (
        <div className="w-full flex lg:flex-row flex-col  lg:py-[11.50vh] py-[2vh] lg:px-[9.66vw] px-0 gap-6">
            <div className="lg:w-[16.11vw]  h-[52vh] hidden  lg:flex flex-col rounded-xl p-4  gap-6"
                 style={{border: "1px solid rgba(0,0,0,.25)"}}>
                <FilterSilde/>
            </div>
            <div className="lg:hidden flex flex-row w-full gap-4 justify-between items-center">
                <section className="flex  py-3 px-4 flex-row w-[48%] items-center gap-3">
                    <Image src="/icon/setting-4.png" alt={`image`} width={24} height={24} />
                    <p className=" text-sm">فیلترها</p>
                </section>
                <section className="flex  py-3 px-4 flex-row w-[48%] items-center gap-2">
                    <Image src="/icon/sort.png" alt={`image`} width={24} height={24} />
                    <p className=" text-sm">مرتب سازی بر اساس</p>
                </section>
            </div>
            <div className="lg:w-[62vw] h-auto flex flex-col gap-6 px-6 justify-start items-start   ">
                <div
                    className="lg:flex hidden flex-row gap-4 items-center lg:w-[27.7vw]  justify-around font-semibold text text-desktext16 ">
                    <p className={`cursor-pointer hover:text-primary ${filterPopular === 0 ? `underline underline-offset-8  decoration-2 decoration-primary` : null}`}
                       onClick={() => handelunderLinde(0)}>پربازدیدترین</p>
                    <p className={`cursor-pointer hover:text-primary ${filterPopular === 1 ? `underline underline-offset-8  decoration-2 decoration-primary` : null}`}
                       onClick={() => handelunderLinde(1)}>جدیدترین</p>
                    <p className={`cursor-pointer hover:text-primary ${filterPopular === 2 ? `underline underline-offset-8  decoration-2 decoration-primary` : null}`}
                       onClick={() => handelunderLinde(2)}>پرفروش ترین</p>
                    <p className={`cursor-pointer hover:text-primary ${filterPopular === 3 ? `underline underline-offset-8  decoration-2 decoration-primary` : null}`}
                       onClick={() => handelunderLinde(3)}>گران ترین</p>
                    <p className={`cursor-pointer hover:text-primary ${filterPopular === 4 ? `underline underline-offset-8  decoration-2 decoration-primary` : null}`}
                       onClick={() => handelunderLinde(4)}>ارزان ترین</p>
                </div>
                <section className=" w-full flex flex-row gap-10 justify-start flex-wrap items-center ">
                    {
                        data?.map((item, index) => (
                            <ItemProduct key={index} item={item}/>
                        ))
                    }
                </section>
            </div>
        </div>
    );
}

export default ShowProduct;