'use client'
import React, {useState} from 'react';

import img from "@/public/img/Profile photo.png"
import img2 from "@/public/icon/Frame 1430103596.png"
import Image from "next/image";
import {itemsDashboard} from "@/type/next-auth"

import pic from "@/public/icon/user-square.png";
import pic2 from "@/public/icon/note.png";
import pic3 from "@/public/icon/heart.png";
import pic4 from "@/public/icon/location.png";
import pic5 from "@/public/icon/message.png";
import pic6 from "@/public/icon/logout.png";
import picarrow from "@/public/icon/arrow-right.png";
import {data} from "autoprefixer";
import InfoUser from "@/components/Dashboard/infoUser";
import ExitUser from "@/components/Dashboard/exitUser";
import HisrysOfBuy from "@/components/Dashboard/hisrysOfBuy";

const dataDashboard: itemsDashboard[] = [
    {id: 0, name: "حساب کاربری", image: pic.src},
    {id: 1, name: "تاریخچه سفارشات", image: pic2.src},
    {id: 2, name: "علاقه مندی ها", image: pic3.src},
    {id: 3, name: "آدرس ها", image: pic4.src},
    {id: 4, name: "دیدگاه هاونظرات", image: pic5.src}
]

function DashboardLanding() {





    const [selected, setSelected] = React.useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>

            <div
                className={selected !== null ? `hidden lg:flex lg:px-[10.5vw] w-full   flex-row gap-[2vw] py-8 px-4` : `lg:px-[10.5vw] w-full   flex-row gap-[2vw] py-8 px-4`}>

                <div
                    className="lg:w-[15.2vw] w-full  lg:bg-[#fff8f5] px-[1.67vw] flex flex-col gap-[5vh] rounded-xl lg:shadow   py-[5.02vh] h-[73.84vh] "
                >
                    <section className=" flex items-center lg:flex-col flex-row  gap-6 w-full relative">
                        <Image src={img} alt={`image`}
                               className="lg:w-[5.24vw] lg:h-[10.46vh] w-[9.6vw] h-[4.46vh] object-cover"/>
                        <Image src={img2} alt={`image`} className="top-[6.7vh] right-[3vw] absolute hidden lg:block"/>
                        <div className="flex-col flex gap-2">
                            <p className="text-xs">مهسا شیرین زبان</p>
                            <p className="text-xs">mahsashirinzaban751@gmail.com</p>
                        </div>

                    </section>
                    <section className="w-full flex flex-col h-[25.94vh]  ">
                        {
                            dataDashboard.map((data, index) => (
                                <div key={index}
                                     className={`flex cursor-pointer flex-row gap-2 items-center box-border py-4   ${selected === index ? 'border-b-2 border-b-black' : null} `}
                                     onClick={() => setSelected(index)}>
                                    <Image src={data.image} alt={`image`} width={20} height={20}/>
                                    <p className="lg:text-desktext16 text-monile12">{data.name}</p>
                                </div>
                            ))
                        }
                        <div
                             className={`flex cursor-pointer flex-row gap-2 items-center box-border py-4   ${selected === 5 ? 'border-b-2 border-b-black' : null} `}
                             onClick={() => {setSelected(5); setIsOpen(true)}}>
                            <Image src={pic6} alt={`image`} width={20} height={20}/>
                            <p className="lg:text-desktext16 text-monile12">خروج</p>
                        </div>
                    </section>
                </div>
                <div className="w-[61vw] hidden lg:block
                 ">
                    {selected === 0 ? (<InfoUser/>) : null}
                    {selected === 1 ? (<HisrysOfBuy/>) : null}
                </div>

            </div>
            <div className="lg:hidden w-full py-6">
                <div className="text-monile12 py-6 gap-2 lg:py-0 flex flex-row-reverse  items-center justify-end  px-3"
                     onClick={() => setSelected(null)}>
                    <p className="font-semibold text-mobtext10 text-primary">صفحه پروفایل</p>
                    <Image src={picarrow} alt={`image`}/>
                </div>

                {selected === 0 ? (<InfoUser/>) : null}
                {selected === 5 ? (<ExitUser  setIsOpen={setIsOpen} IsOpen={isOpen} setSelected={setSelected}/>) : null}

            </div>
        </>
    );
}

export default DashboardLanding;