'use client';
import React, { useState } from 'react';
import Image from "next/image";
import img from "@/public/icon/up.png";

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="w-full  flex flex-col items-center gap-5  text-white p-4">
            <div className="w-full">
                <button
                    className="w-[90%] flex flex-row-reverse justify-between text-left py-2 px-3 hover:bg-gray-700 rounded "
                    style={{borderBottom: "1px solid white"}}
                    onClick={() => toggleDropdown('menu1')}
                >
                    <Image src={img} alt={`image`}
                           className={`transition-transform ${openMenu === 'menu1' ? 'rotate-180' : 'rotate-0'}`}/>
                    <p className="font-bold text-[14px]">راهنمای خرید</p>
                </button>
                {openMenu === 'menu1' && (
                    <ul className="flex flex-col text-mobtext10 gap-2 px-2">
                        <li className="py-2 px-2  hover:underline">راهنمای ثبت سفارش</li>
                        <li className="py-2 px-2 hover:underline">شیوه پرداخت</li>
                        <li className="py-2 px-2 hover:underline"> نحوه ارسال سفارش ها</li>
                        <li className="py-2 px-2 hover:underline"> نحوه پیگیری سفارش ها</li>
                    </ul>
                )}
            </div>
            <div className="w-full">
                <button
                    className="w-[90%] flex flex-row-reverse justify-between text-left py-2 px-3 hover:bg-gray-700 rounded "
                    style={{borderBottom: "1px solid white"}}
                    onClick={() => toggleDropdown('menu2')}
                >
                    <Image src={img} alt={`image`}
                           className={`transition-transform ${openMenu === 'menu2' ? 'rotate-180' : 'rotate-0'}`}/>
                    <p className="font-bold text-[14px]"> اطلاعات تماس</p>
                </button>
                {openMenu === 'menu2' && (
                    <ul className="flex flex-col text-mobtext10 gap-2 px-2">
                        <li className="py-2 px-2 hover:underline">نشانی تهران - تجریش - خیابان سالور</li>
                        <li className="py-2 px-2 hover:underline">شماره تماس </li>
                        <li className="py-2 px-2 hover:underline">پست الکترونیک </li>
                        <li className="py-2 px-2 hover:underline">ساعت کاری شنبه تا چهارشنبه 9 تا 17</li>
                    </ul>
                )}
            </div>
            <div className="w-full">
                <button
                    className="w-[90%] flex flex-row-reverse justify-between text-left py-2 px-3 hover:bg-gray-700 rounded "
                    style={{borderBottom: "1px solid white"}}
                    onClick={() => toggleDropdown('menu3')}
                >
                    <Image src={img} alt={`image`}
                           className={`transition-transform ${openMenu === 'menu3' ? 'rotate-180' : 'rotate-0'}`}/>
                    <p className="font-bold text-[14px]">خدمات مشتریان</p>
                </button>
                {openMenu === 'menu3' && (
                    <ul className="flex flex-col text-mobtext10 gap-2 px-2">
                        <li className="py-2 px-2 hover:underline">سوالات متداول</li>
                        <li className="py-2 px-2 hover:underline">حریم خصوصی</li>
                        <li className="py-2 px-2 hover:underline">گزارش سایت</li>
                        <li className="py-2 px-2 hover:underline">شرایط بازگردانی محصول</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
