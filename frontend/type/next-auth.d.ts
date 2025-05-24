// types/next-auth.d.ts
import NextAuth from 'next-auth';

export interface itemsDashboard {
    id: number;
    name: string;
    image: string;
}
export interface dataproduct {
    image: string;
    title: string;
    price: string;
    size: string;
    star: number;
    off: string | null;
    offPrice:string|null;
}

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        role: string;
        name?: string;
        accessTokenExpires?: number;
        accessTextExpires?:string;

    }

    interface User {
        accessToken?: string;
        role: string;
        name?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        accessTokenExpires?: number;
        accessTextExpires?:string;

    }
}
