import React from 'react';
import ToggleSwitch from "@/components/ProductShow/ToggleSwitch";
import DropFilter from "@/components/ProductShow/dropFilter";


function FilterSilde() {
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center">
                <p className="font-semibold lg:text-desktext18">فیلترها</p>
                <p className="font-semibold text-gray-400 text-desktext18">حذف فیلترها</p>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
                <p className="font-semibold lg:text-desktext16">محصولات موجود</p>
                <ToggleSwitch/>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
                <p className="font-semibold lg:text-desktext16">محصولات تخفیف دار</p>
                <ToggleSwitch/>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
                <DropFilter text={`قیمت ها`}>
                    <div className="flex flex-col w-full gap-3 py-7">
                        <section className="flex flex-row items-center justify-evenly gap-2">
                            <p className="text-desktext16 font-semibold">بیشترین</p>
                            <input type="text" className="w-[10.28vw] rounded-xl bg-gray-200 py-2 px-3 text-[10px]"/>
                        </section>
                        <section className="flex flex-row items-center justify-evenly gap-2">
                            <p className="text-desktext16 font-semibold">کمترین</p>
                            <input type="text" className="w-[10.28vw] rounded-xl bg-gray-200 py-2 px-3 text-[10px]"/>
                        </section>
                    </div>
                </DropFilter>
                <DropFilter text={`رنگ ها`}>
                    <div className="flex flex-row w-full justify-center gap-1.5 py-5">
                        <div className="w-6 h-6 rounded-[50%] bg-black"></div>
                        <div className="w-6 h-6 rounded-[50%] bg-yellow-500"></div>
                        <div className="w-6 h-6 rounded-[50%] bg-blue-500"></div>
                        <div className="w-6 h-6 rounded-[50%] bg-green-500"></div>
                        <div className="w-6 h-6 rounded-[50%] bg-red-500"></div>
                    </div>
                </DropFilter>
                <DropFilter text={`سایزها`}>
                    <div className="flex flex-row w-full justify-center gap-1.5 flex-wrap py-5">
                        <div className="w-[4.09vw] h-[2.92vh] text-desktext16 font-semibold bg-gray-200 text-center rounded-xl">L</div>
                        <div className="w-[4.09vw] h-[2.92vh] text-desktext16 font-semibold bg-gray-200 text-center rounded-xl">XL</div>
                        <div className="w-[4.09vw] h-[2.92vh] text-desktext16 font-semibold bg-gray-200 text-center rounded-xl">2XL</div>
                        <div className="w-[4.09vw] h-[2.92vh] text-desktext16 font-semibold bg-gray-200 text-center rounded-xl">M</div>

                    </div>
                </DropFilter>
            </div>
        </>
    );
}

export default FilterSilde;