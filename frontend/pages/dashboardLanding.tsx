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
import InterstedUser from "@/components/Dashboard/interstedUser";

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
                className={selected !== null ? `hidden lg:flex lg:px-[6.5vw] w-full  lg:justify-evenly    flex-row gap-[2vw] py-8 px-4` : `lg:px-[6.5vw] w-full h   flex-row gap-[2vw] lg:py-8 py-0 px-4`}>

                <div
                    className="lg:w-[18.1703vw] w-full  lg:bg-[#fff8f5] px-[1.67vw] flex flex-col gap-[5vh] rounded-xl lg:shadow   py-[6.02vh] h-[91vh] "
                >
                    <section className=" flex items-center lg:flex-col flex-row   gap-6  w-full relative">
                        <Image src={img} alt={`image`}
                               className="lg:w-[6.2vw] lg:h-[12.662vh] w-[17.9922vw]  h-[8.9459vh] object-cover"/>
                        <Image src={img2} alt={`image`} className="top-[8.6845vh] lg:h-[3.0651vh] lg:w-[1.5142vw] right-[4.7vw] absolute hidden lg:block"/>
                        <div className="flex-col flex lg:w-full w-auto font-semibold lg:items-center justify-start gap-2">
                            <p className="lg:text-desktext18 text-monile12">مهسا شیرین زبان</p>
                            <p className="lg:text-desktext16 text-monile12">mahsashirinzaban751@gmail.com</p>
                        </div>

                    </section>
                    <section className="w-full flex flex-col h-[25.94vh]  ">
                        {
                            dataDashboard.map((data, index) => (
                                <div key={index}
                                     className={`flex cursor-pointer flex-row gap-2 items-center box-border py-[3.06vh]   ${selected === index ? 'border-b-2 border-b-black' : null} `}
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
                    {selected === 2 ? (<InterstedUser/>) : null}

                </div>

            </div>
            <div className={`lg:hidden w-full py-6 ${ selected === null ? `hidden` : null }`}>
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