import React from 'react';
import BoxInput from "@/components/loginComponent/boxInput";
import Image from "next/image";
import icon from "@/public/icon/arrow-right.png";


interface LoginEnterp {
    setValue: React.Dispatch<React.SetStateAction<boolean>>;

}

function LoginEnter({setValue}:LoginEnterp) {


    const handleEnter = () => {
        setValue(true);
    }

    return (
        <div className="lg:w-[23.93vw] w-[85%] lg:h-[35.23vh] bg-white rounded-xl z-10 p-8 flex flex-col gap-[2vh]"
             style={{border: "1px solid rgba(200,200,200,0.5)"}}>
            <h2 className="lg:text-desktext28 text-sm font-semibold ">ورود</h2>
            <BoxInput title="لطفا شماره موبایل یا ایمیل خود را وارد کنید."/>
            <button className="w-full bg-primary py-2 text-white text-monile12 lg:text-desktext16 rounded-2xl">تایید</button>

            <div className="flex flex-row gap-1 mt-2 items-center cursor-pointer" onClick={handleEnter}>
                <Image src={icon} alt={`image`} className="w-6 h-6"/>
                <p className="lg:text-desktext16 text-monile12 text-gray-700 font-semibold">صفحه ثبت نام</p>
            </div>
        </div>
    );
}

export default LoginEnter;