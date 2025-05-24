'use client';
import axios from "axios";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";


export const handleLogout = async (session:Session) => {
    if (!session || !session.accessToken) {
        console.log('توکن در دسترس نیست');
        return;
    }

    try {
        const token = session.accessToken;

        // ارسال درخواست POST با axios
        const res = await axios.post('http://localhost:8080/user/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('توکن با موفقیت باطل شد', res.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('خطا در باطل کردن توکن:', error.response?.data || error.message);
        } else {
            console.error('خطای ناشناخته:', error);
        }
    }

    // خروج از سشن NextAuth
    signOut({callbackUrl: '/login'});
};