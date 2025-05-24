import React from 'react';
import {AbortSignal} from "next/dist/compiled/@edge-runtime/primitives";
import ShowProduct from "@/pages/showProduct";
import HeaderAll from "@/components/headerAll";
import Footer from "@/components/Footer/Footer";

function Page() {
    return (
       <div>
           <HeaderAll/>
           <ShowProduct/>
           <Footer/>
       </div>
    );
}

export default Page;