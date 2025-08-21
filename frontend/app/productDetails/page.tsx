import React from 'react';
import HeaderAll from "@/components/headerAll";
import Footer from "@/components/Footer/Footer";
import ProductDetailPage from "@/pages/productDetailPage";

function Page() {
    return (
        <div>
            <HeaderAll/>
            <ProductDetailPage/>
            <Footer/>
        </div>
    );
}

export default Page;