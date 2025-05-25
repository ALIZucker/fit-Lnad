'use client'
import React, {ChangeEvent} from 'react';
import Image from 'next/image';

import img6 from "@/public/icon/star.png";
import img7 from "@/public/icon/flash.png";
import {useRouter} from "next/navigation";
import man from "@/public/img/image 11.png"
import lavazem from "@/public/img/image 13.png"
import child from "@/public/img/image 10.png"
import ghoghom from "@/public/img/image 12.png"
import {dataSreach, MenuData, menuData, MenuDataAll} from "@/data/menu.data"
import Link from 'next/link';
import {useSession} from 'next-auth/react'
import {handleLogout} from "@/lib/singOut";


function HeaderDesktop() {

    const [itemsMenu, setItemsMenu] = React.useState<MenuDataAll[] | undefined>()
    const [image, setImage] = React.useState<string | undefined>()
    const [isHovered, setIsHovered] = React.useState<number>(5);
    const router = useRouter();
    const {data: session, status} = useSession();
    console.log(session);


    React.useEffect(() => {

        const items = menuData[isHovered]
        setItemsMenu(items ? [items] : undefined)

        console.log(items?.title)
        switch (items?.title) {
            case "مردانه":
                setImage(man.src)
                break;
            case "زنانه":
                setImage("/img/image 9.png")
                break;
            case "بچگانه":
                setImage(child.src)
                break;
            case "شیکر و جاگ":
                setImage(ghoghom.src)
                break;
            case "لوازم ورزشی":
                setImage(lavazem.src)
                break;
            default:
                setImage(undefined)

        }


    }, [isHovered])
    React.useEffect(() => {
        if (session?.accessTextExpires === "TokenExpired") {
            console.warn("توکن منقضی شده است، خروج از سیستم...");
            handleLogout(session)
        }
    }, [session]);


    const [showResults, setShowResults] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [reasultList, setreasultList] = React.useState<string[]>([]);


    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        const str = dataSreach.filter(value => value.includes(e.target.value));
        setreasultList(str)

    }

    return (
        <>
            <section className="flex flex-row justify-around gap-[10.24vw] ">
                <Image src="/icon/Frame 1430103224.png" alt={`image`} width={150} height={50} />
                <section className="relative  w-[33.49vw] py-2 flex flex-col ">
                    <div className="flex flex-row items-center px-2 py-3 w-full gap-2 bg-gray-100  rounded-xl">
                        <Image src="/icon/search-normal.png" alt={`image`} width={24} height={24}/>
                        <input placeholder={`جست و جو`} className="bg-transparent text-sm w-full outline-none"
                               onFocus={() => setShowResults(!showResults)}
                               onBlur={() => setShowResults(!showResults)}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handlerChange(e)}/>
                    </div>
                    {
                        showResults ? (<div
                            className="absolute w-full rounded-xl top-[5.5vh] p-6 z-10  bg-gray-100 h-auto flex flex-col gap-8 "
                            style={{borderTop: "2px solid rgba(100,100,100,.4)"}}>
                            {
                                query ? (
                                    <div className="text-sm flex flex-col gap-6 font-semibold w-full">
                                        <h3 className="font-semibold">
                                            همه کالا های مربوط به <span className="text-primary">{query}</span>

                                        </h3>
                                        <section className="flex flex-col gap-2 items-center">
                                            <>
                                                {
                                                    reasultList.map((item, index) => (
                                                        <p key={index}
                                                           style={{borderBottom: "1px solid rgba(180,180,180,.5)"}}
                                                           className=" px-3 w-full text-xs  py-2 cursor-pointer">{item}</p>
                                                    ))
                                                }
                                            </>


                                        </section>
                                    </div>
                                ) : (
                                    <div className="text-sm flex flex-col gap-6 font-semibold w-full">
                                        <h3 className="font-semibold">
                                            جستجوهای اخیر
                                        </h3>
                                        <section className="flex flex-row gap-3 items-center">
                                            <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">هودی</p>
                                            <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">کوهنوردی</p>
                                        </section>

                                    </div>
                                )
                            }
                            <div className="text-sm flex flex-col gap-6 font-semibold w-full">
                                <h3 className="">
                                    جستجوهای پرطرفدار
                                </h3>
                                <section className="flex flex-row gap-3 items-center">
                                    <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">شیکر بدنسازی</p>
                                    <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">کفش کوهنوردی</p>
                                    <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">ست ورزشی</p>
                                    <p className="bg-gray-200 p-3 text-xs rounded-xl cursor-pointer">استوک</p>
                                </section>

                            </div>
                        </div>) : null
                    }
                </section>

                <section className="flex flex-row items-center gap-4 ">
                    {
                        session ? (<button className=" py-3 px-5 text-sm rounded-xl font-extrabold "
                                           onClick={() => router.push("/dashboard")}
                                           style={{boxShadow: "1px 1px 2px 2px rgba(200,200,200,0.5)"}}>
                            کاربر {session.name}
                        </button>) : (<button className=" py-3 px-5 text-sm rounded-xl font-extrabold "
                                              onClick={() => router.push("/login")}
                                              style={{boxShadow: "1px 1px 2px 2px rgba(200,200,200,0.5)"}}>ثبت
                            نام|ورود
                        </button>)
                    }

                    <div className="bg-primary w-[48px] rounded-xl h-[48px] flex items-center justify-center  ">
                        <Image src="/icon/bag-2.png" alt={`image`} width={28} height={28}/>
                    </div>
                </section>
            </section>

            <div className="flex flex-row w-[80%] bg-gray-100 justify-between  rounded-xl py-5"
                 onMouseLeave={() => setIsHovered(5)}>
                <ol className="w-[34vw] flex flex-row justify-around font-semibold text-[14px]">
                    <i className="cursor-pointer " onMouseEnter={() => setIsHovered(0)}><Link
                        href="/product">مردانه</Link></i>
                    <i className="cursor-pointer " onMouseEnter={() => setIsHovered(1)}>زنانه</i>
                    <i className="cursor-pointer " onMouseEnter={() => setIsHovered(2)}>بچگانه</i>
                    <i className="cursor-pointer " onMouseEnter={() => setIsHovered(3)}>لوازم ورزشی</i>
                    <i className="cursor-pointer " onMouseEnter={() => setIsHovered(4)}>شیکر و جاگ</i>
                </ol>
                <ol className="w-[34vw] flex flex-row justify-around  font-semibold text-[14px]">
                    <i className="flex flex-row gap-1  cursor-pointer"><img src={img6.src} alt={`image`}
                                                                              className={`w-[20px] h-[20px]`}/>
                        جدیدترین محصولات</i>
                    <i className="flex flex-row gap-1  cursor-pointer"><img src="/icon/award.png" alt={`image`}
                                                                              className={`w-[20px] h-[20px]`}/>تخفیفات
                        ویژه</i>
                    <i className="flex flex-row gap-1 cursor-pointer "><img src={img7.src} alt={`image`}
                                                                              className={`w-[20px] h-[20px]`}/>پرفروش
                        ترین ها</i>

                </ol>
                <div
                    className={`${isHovered == 5 ? "hidden" : " "} absolute w-[80%] h-auto top-[99%] gap-[6.2vw] rounded-xl flex flex-row justify-around flex-wrap z-10    bg-gray-200 px-[2.75vw] py-[4.18vh]  `}>
                    {

                        itemsMenu ? itemsMenu[0].subset.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 items-center">
                                    <h2 className="text-lg font-semibold text-primary">{item.title}</h2>
                                    {
                                        item.subtitle.map((subTitle, index) => (
                                            <p key={index} className="cursor-pointer">{subTitle}</p>
                                        ))
                                    }
                                </div>


                            ))
                            : null

                    }
                    {
                        image ? <img src={image} alt={`image`} width={200} height={200}/> : ""
                    }

                </div>

            </div>


        </>
    )
        ;
}

export default HeaderDesktop;