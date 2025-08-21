
import React from 'react';

export default function productDetail({children}: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            {children}
        </div>
    );

}
