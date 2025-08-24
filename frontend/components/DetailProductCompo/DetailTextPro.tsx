import React from 'react';

interface Props {
    text: string;
    price: string;
    offPrice: string;
    star: number;
    off: string

}

function DetailTextPro(props: Props) {
    return (
        <div className="flex flex-col gap-4  w-[40vw] ">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="text-desktext28 font-bold">{props.text}</h2>
                <p className="font-semibold text-desktext16 py-1 px-2 bg-[#fff7f4]">{props.star}</p>
            </div>
            <p className="text-[14px] text-gray-400 font-medium">تیشرت ورزشی</p>
            <p className="text-desktext32  font-bold">{props.price} تومان</p>
            <div className="flex flex-row justify-between items-center w-[11.6088vw]">
                <h2 className="text-desktext24 text-gray-400  font-medium line-through">{props.offPrice}</h2>
                <p className="font-semibold text-desktext16 py-2 px-4 bg-primary rounded-2xl text-white">{props.off}</p>
            </div>
            <h3 className="font-semibold text-2xl">رنگ</h3>
            <div className="flex flex-row flex-wrap justify-start gap-2 rounded-2xl items-center w-[15.8991vw]">
                <p className="font-semibold text-desktext16 py-1 px-8 bg-detailBack">xl</p>
                <p className="font-semibold text-desktext16 py-1 px-8 bg-detailBack">2xl</p>
                <p className="font-semibold text-desktext16 py-1 px-8 bg-detailBack">3xl</p>
                <p className="font-semibold text-desktext16 py-1 px-8 bg-detailBack">sm</p>
                <p className="font-semibold text-desktext16 py-1 px-8 bg-detailBack">M</p>
            </div>
            <h3 className="font-semibold text-2xl">سایز</h3>
            <div className="flex flex-row flex-wrap justify-start gap-2 rounded-2xl items-center w-full">
                <section className="flex flex-row gap-1 items-center bg-detailBack px-3">
                    <div className="w-6 h-6 bg-pink-300 rounded-[50%]"></div>
                    <p className="font-semibold text-desktext16  ">صورتی</p>
                </section>
                <section className="flex flex-row gap-1 items-center bg-detailBack px-3">
                    <div className="w-6 h-6 bg-green-700 rounded-[50%]"></div>
                    <p className="font-semibold text-desktext16  ">سبز</p>
                </section>
                <section className="flex flex-row gap-1 items-center bg-detailBack px-3">
                    <div className="w-6 h-6 bg-primary rounded-[50%]"></div>
                    <p className="font-semibold text-desktext16  ">نارنجی</p>
                </section>

            </div>
            <div className="w-full flex flex-row  items-center justify-center">
                <section className="w-[21.4511vw] bg-primary py-4 flex flex-row rounded-2xl justify-center text-white ">
                    افزودن به سبد خرید
                </section>
            </div>

        </div>
    );
}

export default DetailTextPro;