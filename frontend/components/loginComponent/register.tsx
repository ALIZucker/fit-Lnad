import React from 'react';
import BoxInput from "@/components/loginComponent/boxInput";
import Image from "next/image";

import icon from "@/public/icon/arrow-right.png"
import {signIn} from "next-auth/react";

interface  registerProps {
    setValue: React.Dispatch<React.SetStateAction<boolean>>;

}


function Register({ setValue }: registerProps) {
    const [name, setName] = React.useState<string>("");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const handleLogin = async () => {
        const result = await signIn('credentials', {
            email:email,
            action:"register",
            phonenumber: phoneNumber,
            name: name,
            redirect: true,
            callbackUrl: '/',
        });

        console.log(result);
    };


    const handleEnter = () => {
        setValue(false)
    }


    return (
        <div className="lg:w-[23.93vw] w-[85%] lg:h-[65.37vh] h-[65.37vh]  flex flex-col  bg-white z-10 p-8 rounded-xl  gap-8"
             style={{border: "1px solid rgba(0,0,0,.2)"}}>
            <h2 className="lg:text-desktext28 font-semibold text-sm">ثبت نام</h2>
            <BoxInput title="نام و نام خانوادگی" setInput={setName} />
            <BoxInput title="شماره تلفن همراه" setInput={setPhoneNumber} />
            <BoxInput title="ایمیل (اختیاری)" setInput={setEmail} />
            <button className="w-full bg-primary py-2 text-white text-monile12 lg:text-desktext16  rounded-2xl" onClick={handleLogin}>تایید</button>
            <div className="flex flex-row gap-1  items-center cursor-pointer" onClick={handleEnter}>
                <Image src={icon} alt={`image`} className="w-6 h-6"/>
                <p className="lg:text-desktext16 text-monile12 text-gray-700 font-semibold">صفحه ورود</p>
            </div>
        </div>
    );
}

export default Register;