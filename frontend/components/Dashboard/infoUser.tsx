import React from 'react';
import Image from "next/image";

import pic from "@/public/icon/edit-2.png"

interface accountDetails {
    name: string;
    value: string;
}


function InfoUser() {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [account, setAccount] = React.useState<accountDetails[]>([
        {name: "نام و نام خانوادگی", value: "مهسا شیرین زبان"},
        {name: "کد ملی", value: "85600147002"},
        {name: "ایمیل", value: "mahsashirinzaban751@gmail.com"},
        {name: "شماره تماس", value: "0912345678"},
        {name: "جنسیت", value: "زن"},
    ]);


    const [name, setName] = React.useState<string>(account[0].value);
    const [code, setCode] = React.useState<string>(account[1].value);
    const [email, setEmail] = React.useState<string>(account[2].value);
    const [shomare, setShomare] = React.useState<string>(account[3].value);
    const [gener, setGener] = React.useState<string>(account[4].value);

    const handlSetValue = () => {

        setAccount([
            {name: "نام و نام خانوادگی", value: name},
            {name: "کد ملی", value: code},
            {name: "ایمیل", value: email},
            {name: "شماره تماس", value: shomare},
            {name: "جنسیت", value: gener},
        ])
        setIsEdit(!isEdit)
    }
    return (

        <div className="flex flex-col gap-6   px-2 lg:px-0">
            <h2 className="lg:text-desktext24 text-monile12 px-2 font-semibold">حساب کاربری</h2>
            <div
                className={`${isEdit ? "flex" : "hidden"}  flex-col rounded-xl px-[1.67vw] flex lg:h-[30.68vh]  flex-wrap lg:gap-2  gap-6 py-[3.34vh]`}
                style={{border: "1px solid rgba(190,190,190,.5)"}}>

                <div className="relative w-full lg:w-[22.04vw] h-[6.06vh]  py-3">
                    <p className=" bg-white absolute lg:top-0 top-1.5 right-[1.4vw] px-2 lg:text-sm  text-mobtext10">{account[0].name}</p>
                    <input type="text" value={name} style={{border: "2px solid rgba(220,220,220,.8)"}}
                           onChange={(e) => {
                               setName(e.target.value)
                           }}
                           className="rounded-xl lg:py-2 py-3 px-2 w-full outline-0 lg:text-desktext16 text-mobtext10"/>
                </div>
                <div className="relative  w-full lg:w-[22.04vw] h-[6.06vh]  py-3">
                    <p className=" bg-white absolute lg:top-0 top-1.5 right-[1.4vw] px-2 lg:text-sm  text-mobtext10 ">{account[1].name}</p>
                    <input type="text" value={code} style={{border: "2px solid rgba(220,220,220,.8)"}}
                           onChange={(e) => {
                               setCode(e.target.value)
                           }}
                           className="rounded-xl lg:py-2 py-3 px-2 w-full outline-0 lg:text-desktext16 text-mobtext10"/>
                </div>
                <div className="relative  w-full lg:w-[22.04vw] h-[6.06vh]  py-3">
                    <p className=" bg-white absolute lg:top-0 top-1.5 right-[1.4vw] px-2 lg:text-sm  text-mobtext10 ">{account[2].name}</p>
                    <input type="text" value={email} style={{border: "2px solid rgba(220,220,220,.8)"}}
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}
                           className="rounded-xl lg:py-2 py-3 px-2 w-full outline-0 lg:text-desktext16 text-mobtext10"/>
                </div>
                <div className="relative  w-full lg:w-[22.04vw] h-[6.06vh]  py-3">
                    <p className=" bg-white absolute lg:top-0 top-1.5 right-[1.4vw] px-2 lg:text-sm  text-mobtext10 ">{account[3].name}</p>
                    <input type="text" value={shomare} style={{border: "2px solid rgba(220,220,220,.8)"}}
                           onChange={(e) => {
                               setShomare(e.target.value)
                           }}
                           className="rounded-xl lg:py-2 py-3 px-2 w-full outline-0 lg:text-desktext16 text-mobtext10"/>
                </div>
                <div className="relative  w-full lg:w-[22.04vw] h-[6.06vh]  py-3">
                    <p className=" bg-white absolute lg:top-0 top-1.5 right-[1.4vw] px-2 lg:text-sm  text-mobtext10 ">{account[4].name}</p>
                    <input type="text" value={gener} style={{border: "2px solid rgba(220,220,220,.8)"}}
                           onChange={(e) => {
                               setGener(e.target.value)
                           }}
                           className="rounded-xl lg:py-2 py-3 px-2 w-full outline-0 lg:text-desktext16 text-mobtext10"/>
                </div>
                <button onClick={handlSetValue}
                        className=" lg:w-[22.04vw] w-full py-2 mt-3 font-semibold  rounded-xl  bg-primary  text-white">تایید
                </button>


            </div>
            <section
                className={`rounded-xl w-full  flex-col gap-2  px-[1.67vw] py-[3.34vh] ${isEdit ? "hidden" : "flex"} `}
                style={{border: "1px solid rgba(190,190,190,.5)"}}>
                <div className="w-full  flex flex-row justify-end ">
                    <Image src={pic} alt={`image`} width={25} height={25} onClick={() => setIsEdit(!isEdit)}/>
                </div>
                <div className="w-full flex lg:h-[33.68vh] h-auto  flex-col flex-wrap gap-6 justify-around px-6 lg:px-0">
                    {
                        account.map((account, index) => (
                            <div key={index} className="flex flex-col gap-4 ">
                                <h3 className="text-gray-500 lg:text-desktext20 text-monile12 ">{account.name}</h3>
                                <p className="text-black lg:text-desktext16 text-mobtext10">{account.value}</p>
                            </div>

                        ))
                    }
                </div>
            </section>
        </div>


    );
}

export default InfoUser;