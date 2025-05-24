import Image from "next/image";
import styles from "./page.module.css";
import HomeLanding from "@/pages/homeLanding";
import Footer from "@/components/Footer/Footer";
import React from "react";
import HeaderMobileOne from "@/components/Header/headerMobileOne";
import HeaderDesktop from "@/components/Header/headerDesktop";
import HeaderAll from "@/components/headerAll";

export default function Home() {
    return (
        <div className="w-full flex flex-col lg:gap-10 items-center">
            <HeaderAll/>
            <HomeLanding/>
            <Footer/>

        </div>
    );
}
