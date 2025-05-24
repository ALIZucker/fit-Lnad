'use client';

import {Dialog} from '@headlessui/react';


import {handleLogout} from "@/lib/singOut";
import {useSession} from "next-auth/react";


interface UserProps {
    IsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function ExitUser({setIsOpen, IsOpen,setSelected}: UserProps) {
    const {data: session} = useSession();

    return (
        <>


            <Dialog open={IsOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 lg:bg-black/30 bg-black" aria-hidden="true"/>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel
                        className="bg-white flex flex-col gap-6 p-6 rounded shadow  lg:w-[35.67vw] lg:h-[24.05vh]">
                        <Dialog.Title className="lg:text-lg text-monile14 font-bold">خواهید از حساب کاربری خارج
                            شوید؟</Dialog.Title>
                        <Dialog.Description className="mb-4 lg:text-desktext16 text-monile12">
                            با خروج از حساب کاربری، به اطلاعات و سبد خرید فعلیتان دسترسی نخواهید داشت و برای دسترسی
                            دوباره میتوانید دوباره وارد حسابتان شوید. </Dialog.Description>
                        <div className="flex flex-row gap-3 w-full justify-end h-[5vh]">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setSelected(null)
                                }}
                                className="bg-white text-black px-3 lg:py-2 py-0 lg:w-[6.66vw] w-[25vw] lg:text-desktext16 text-monile12 rounded shadow"
                            >
                                انصراف
                            </button>
                            <button
                                onClick={() => session !== null ? handleLogout(session) : null}
                                className="bg-gray-800 text-white px-3 py-2 lg:w-[6.66vw] w-[25vw] lg:text-desktext16 text-monile12 rounded"
                            >
                                خروج از حساب
                            </button>
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

