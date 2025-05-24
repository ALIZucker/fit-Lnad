import React from 'react';
import HeaderMobileOne from "@/components/Header/headerMobileOne";
import HeaderDesktop from "@/components/Header/headerDesktop";
import BannerMobile from "@/components/BannerItems/bannerMobile";
import NewProductBanner from "@/components/BannerItems/newProductBanner";
import SecondBanner from "@/components/BannerItems/secondBanner";
import Takhfif from "@/components/PostsComponent/takhfif";
import NewsShow from "@/components/News/newsShow";
import ServiceWeb from "@/components/serviceWeb";
import Footer from "@/components/Footer/Footer";


const HomeLanding = () => {

    return (
        <div className="flex w-full items-center   flex-col lg:gap-10  gap-2 px-[5.5vw]">

            <BannerMobile/>
            <NewProductBanner imageFirst="/img/pronew.jpg" imageSecend="/img/pronew2.jpg"
                              textFirst="جدید ترین تخفیفات فصل برند پوما ۵۰ ٪ تخفیف روی تمام محصولات"
                              textSecondary="جدید ترین تخفیفات فصل برند نایک ۵۰ ٪ تخفیف روی تمام محصولات"
                              descriptionFirst="جدید ترین محصولات"
                              descriptionSecondary="جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید"/>
            <div className="hidden lg:block w-full">
                <SecondBanner image="/img/bannerBe.png" text="برای حال خوب"
                              description="لوازم ایروبیک و تناسب اندام بگیر" bool={true} size={"cover"}/>
            </div>
            <div className="lg:hidden block w-full ">
                <SecondBanner image="/img/bannerMobil.png" text="برای حال خوب"
                              description="لوازم ایروبیک و تناسب اندام بگیر" bool={true} size={"none"}/>
            </div>
            <Takhfif color="bg-postBackColor" url={"http://localhost:8080/home"}/>
            <div className="hidden lg:block w-full mt-12">
                <SecondBanner image="/img/bikedestop.png" text="برای لذت بردن از مسیر"
                              description="دوچرخه اسکیت و اسکوتر بگیر" bool={true} size={"cover"}/>
            </div>
            <div className="lg:hidden block w-full mt-7 ">
                <SecondBanner image="/img/bikemoblie.png" text="برای لذت بردن از مسیر"
                              description="دوچرخه اسکیت و اسکوتر بگیر" bool={true} size={"none"}/>
            </div>
            <Takhfif color="bg-bluesky" url={"http://localhost:8080/home/takhfif"}/>

            <NewProductBanner imageFirst="/img/vintage-runner-with-his.png"
                              imageSecend="/img/vintage-runner-with-his-arms-crossed 1.png"
                              textFirst="جدید ترین تخفیفات فصل برند پوما ۵۰ ٪ تخفیف روی تمام محصولات"
                              textSecondary="جدید ترین تخفیفات فصل برند نایک ۵۰ ٪ تخفیف روی تمام محصولات"
                              descriptionFirst="پرفروش ترین محصولات"
                              descriptionSecondary="پرفروش ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید"/>
            <div className="hidden lg:block w-full mt-12">
                <SecondBanner image="/img/mountain.png" text="برای لذت بردن از مسیر"
                              description="دوچرخه اسکیت و اسکوتر بگیر" bool={false} size={"cover"}/>
            </div>
            <div className="lg:hidden block w-full mt-7 ">
                <SecondBanner image="/img/motainMobile.png" text="برای لذت بردن از مسیر"
                              description="دوچرخه اسکیت و اسکوتر بگیر" bool={false} size={"none"}/>
            </div>

            <NewsShow/>
            <ServiceWeb/>

        </div>
    );
}

export default HomeLanding;