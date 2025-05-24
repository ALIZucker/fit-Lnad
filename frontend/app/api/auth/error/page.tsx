// app/auth/error/page.tsx
'use client';

import {useEffect} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';

export default function AuthErrorPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const error = searchParams?.get('error');
        console.log(error);
        router.replace('/login');
    }, [searchParams, router]);

    return <p>در حال ریدایرکت...</p>;
}
