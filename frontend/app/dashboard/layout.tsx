// app/login/layout.tsx

import React from 'react';

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            {children}
        </div>
    );

}
