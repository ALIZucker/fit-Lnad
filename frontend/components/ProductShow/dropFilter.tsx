'use client'
import React, {useState} from 'react';
import Image from "next/image";
import img from "@/public/icon/up.png";

function DropFilter({children, text}: { children: React.ReactNode, text: string }) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const toggleDropdown = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    return (
        <div className="w-full">
            <button
                className="w-full flex flex-row-reverse justify-between text-left py-2 px-3 shadow  rounded "
                style={{borderBottom: "1px solid white"}}
                onClick={() => toggleDropdown('menu1')}
            >
                <Image src={img} alt={`image`}
                       className={`transition-transform ${openMenu === 'menu1' ? 'rotate-180' : 'rotate-0'}`}/>
                <p className="font-bold text-[14px]">{text}</p>
            </button>
            {openMenu === 'menu1' && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export default DropFilter;