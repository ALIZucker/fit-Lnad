import React from 'react';
import Image from 'next/image';
import DropDown from "@/components/dropDown"
import img from '@/public/icon/Group.png';
import img2 from '@/public/icon/Group1.png';
import img3 from '@/public/icon/Group3.png';
import img4 from '@/public/icon/Group2.png';

import fimage from '@/public/icon/01.png';
import fimage2 from '@/public/icon/02.png';
import fimage3 from '@/public/icon/03 1.png';


function Footer() {


    return (
        <div className="w-full px-[5.62vw] flex flex-col gap-20 bg-footer text-white">
            <section className="flex flex-row mt-[6.48vh] gap-[2.08vh]">
                <div className="lg:flex hidden flex-col gap-2">
                    <p className="font-bold text-[14px]">محبوب ترین ها</p>
                    <ul className="flex flex-col gap-2">
                        <li>لباس مردانه</li>
                        <li>کفش فوتبال</li>
                        <li>دوچرخه</li>
                        <li>لباس زنانه</li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-col gap-2">
                    <p className="font-bold text-[14px]">خدمات مشتری</p>
                    <ul className="flex flex-col gap-2">
                        <li>سوالات متداول</li>
                        <li>حریم خصوصی</li>
                        <li>گزارش ایراد در سایت</li>
                        <li>لباس زنانه</li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-col gap-2">
                    <p className="font-bold text-[14px]">راهنمای خرید</p>
                    <ul className="flex flex-col gap-2">
                        <li>راهنمای ثبت سفارش</li>
                        <li>شیوه های پرداخت</li>
                        <li>نحوه ارسال سفارش ها</li>
                        <li>نحوه پیگیری محصول</li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-col gap-2">
                    <p className="font-bold text-[14px]">اطلاعات تماس</p>
                    <ul className="flex flex-col gap-2">
                        <li>نشانی تهران - تجریش - خیابان سالور</li>
                        <li> شماره تماس <span className="text-primary"> 021-3456789</span></li>
                        <li> پست الکترونیک<span className="text-primary"> info@fitland.com</span></li>
                        <li>ساعت کاری شنبه تا چهارشنبه 9 تا 17</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 lg:gap-7 lg:mr-[10vw] w-full lg:w-[25%]" >
                    <p>برای دریافت تخفیف های بیشتر ما را دنبال کنید!</p>
                    <div className="flex flex-row justify-around gap-2">
                        <Image src={img} alt={`image`}/>
                        <Image src={img2} alt={`image`}/>
                        <Image src={img4} alt={`image`}/>
                        <Image src={img3} alt={`image`}/>
                    </div>
                    <div className="flex flex-col lg:hidden">
                        <DropDown />
                    </div>

                </div>

            </section>
            <section className="flex flex-col lg:flex-row w-full lg:gap-2 gap-10 justify-between">
                <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                    <h3>فروشگاه اینترنتی فیت لند</h3>
                    <p className="text-justify ">فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز
                        کرد و با هدف ارائه
                        جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک
                        ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین
                        مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و
                        تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت
                        فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.</p>
                </div>

                <div className="flex px-10 w-full lg:w-[34%] flex-row  gap-6 items-center">
                    <Image src={fimage} alt={`image`}/>
                    <Image src={fimage2} alt={`image`}/>
                    <Image src={fimage3} alt={`image`}/>
                </div>
            </section>

            <div className="w-full flex lg:flex-row text-center flex-col gap-3 justify-between text py-2 text-sm text-white" style={{borderTop:'1px solid white'}}>
                <p>تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.</p>
                <p>طراحی شده توسط علی ذبیحی  طراحی رابط کاربری توسط احسان عزتی</p>
            </div>
        </div>
    );
}

export default Footer;