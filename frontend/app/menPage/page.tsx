'use client'
import React from 'react';
import {useSession} from 'next-auth/react'
import {redirect} from "next/navigation";
function Page() {
    const {data: session,} = useSession();

    if (!session) {
        redirect('/login');
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1>صفحه مردانه هست</h1>
        </div>
    );
}

export default Page;