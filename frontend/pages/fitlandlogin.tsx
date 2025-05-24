'use client';
import {signIn, signOut} from 'next-auth/react';
import {useSession} from 'next-auth/react';
import React from "react";
import axios from "axios";
import Image from "next/image";
import img from "../public/icon/Left Login.png";
import img1 from "../public/icon/001.png";
import img2 from "../public/icon/002.png";
import Register from "@/components/loginComponent/register";
import LoginEnter from "@/components/loginComponent/loginEnter";


function Login() {
    const {data: session,} = useSession();
    const [isRegistered, setIsRegistered] = React.useState<boolean>(true);



    return (
        <div className="w-[100%] flex flex-row-reverse justify-center    ">
            <Image src={img} className="lg:w-[50%] lg:h-[100vh] object-cover hidden lg:block" alt={`image`}/>
            <div className="lg:w-[50%] w-full h-screen  lg:h-[100vh] flex flex-col items-center justify-around bg-gray-100 relative">
                <Image src={img1} alt={`image`} className="absolute bottom-0 right-0 z-0"/>
                <Image src={img2} alt={`image`} className="absolute top-0 left-0 z-0"/>
                {
                    isRegistered ?(
                        <Register setValue={setIsRegistered}/>
                    ):(
                        <LoginEnter setValue={setIsRegistered}/>
                    )
                }



            </div>

        </div>
    )
}

export default Login;
