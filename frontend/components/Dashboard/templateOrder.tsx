import React from 'react';
import {itemspostDashboard} from "@/type/next-auth"

interface Props {
    items:itemspostDashboard
}

function TemplateOrder({items}: Props) {
    return (
        <div className="flex flex-col w-[92%] h-[29.5vh] p-6  rounded-xl" style={{border:"0.1vw solid rgba(138, 138, 138, 0.5)"}}>
                <section className=" w-full gap-8 flex flex-row items-center justify-around p-6  " style={{borderBottom:"0.1vw solid rgba(138, 138, 138, 0.5)"}}>
                    <p>{items.dateOrder}</p>
                    <p>کد سفارش:{items.codeOrder}</p>
                    <p>مبلغ پرداخت شده:{items.pay}</p>
                    <p>تخفیف :{items.offPay} </p>
                    <p>سفارش</p>
                </section>
            <section className="p-6 w-full overflow-x-auto overflow-y-hidden  flex flex-row gap-2">
                <img src="/img/pronew.png" alt={`image`} className="w-[7.0341vw] h-[14.0167vh]"/>
                <img src="/img/pronew.png" alt={`image`} className="w-[7.0341vw] h-[14.0167vh]"/>
                <img src="/img/pronew.png" alt={`image`} className="w-[7.0341vw] h-[14.0167vh]"/>

            </section>
        </div>
    );
}

export default TemplateOrder;