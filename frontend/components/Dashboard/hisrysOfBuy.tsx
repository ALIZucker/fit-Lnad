'use client'
import React from 'react';
import axios from 'axios'
import TemplateOrder from "@/components/Dashboard/templateOrder";
import {itemspostDashboard} from "@/type/next-auth"


function HisrysOfBuy() {
    const [selected, setSelected] = React.useState<number>(1)
    const [data, setData] = React.useState<itemspostDashboard[] | null>(null)
    const [result, setResult] = React.useState<itemspostDashboard[] | undefined>([])

    const [currentOrder, setCurrentOrder] = React.useState<number | undefined>(0)
    const [deliveryOrder, setDeliveryOrder] = React.useState<number | undefined>(0)
    const [takeBackOrder, setTakeBackOrder] = React.useState<number | undefined>(0)
    const [cancelOrder, setCancelOrder] = React.useState<number | undefined>(0)


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const respont = await axios.get('http://127.0.0.1:8080/mypost/show')

                setData(respont.data.massage)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    React.useEffect(() => {

        if (!data) return;

        for (let i = 1; i <= 4; i++) {
            const result = data.filter(item => item.post.situation === i.toString());
            console.log(`situation ${i}:`, result);

            switch (i) {
                case 1:
                    setCurrentOrder(result.length);
                    break;
                case 2:
                    setDeliveryOrder(result.length);
                    break;
                case 3:
                    setTakeBackOrder(result.length);
                    break;
                case 4:
                    setCancelOrder(result.length);
                    break;
            }
        }
        const result = data?.filter(item => item.post.situation === selected.toString());
        setResult(result)

    }, [data]);

    React.useEffect(() => {

        const result = data?.filter(item => item.post.situation === selected.toString());

        setResult(result)


    }, [selected])

    return (
        <div className="flex flex-col gap-4 ">
            <h2 className="text-desktext24 font-semibold px-5"> تاریخچه سفارشات</h2>
            <div className="flex flex-col w-full  items-center rounded-2xl "
                 style={{border: "0.12vw solid rgba(138, 138, 138, 0.5)"}}>
                <div className="flex flex-row text-desktext16 w-full gap-9 items-center justify-start p-6"
                     style={{borderBottom: "0.12vw solid rgba(138, 138, 138, 0.5)"}}>
                    <p className={selected == 1 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(1)}>جاری {currentOrder}</p>
                    <p className={selected == 2 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(2)}>تحویل شده {deliveryOrder}</p>
                    <p className={selected == 3 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(3)}> مرجوع شده {takeBackOrder}</p>
                    <p className={selected == 4 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(4)}>لغو شده {cancelOrder}</p>
                </div>
                <div className="flex flex-col items-center gap-6 w-full  py-[2.5105vh]">
                    {
                        result?.length == 0 ? (<>
                            <img src="/img/not%20Order.png"
                                 className="lg:w-[15.0131vw] lg:h-[29.9163vh] object-center"/>
                            <p className="lg:text-desktext20 font-semibold">در حال حاضر شما سفارشی ندارید</p>
                        </>) : (<>
                            {
                                result?.map((item, index) => (
                                    <div key={index} className="flex lg:w-[59.1444vw] flex-col gap-1 rounded-xl " style={{border: "0.01vw solid rgba(138, 138, 138, 0.5)"}}>
                                        <section className={`${selected==2 ?`bg-backDash` : `bg-doshBacked`} w-full flex justify-around rounded-t-xl flex-row items-center lg:py-[2.5105vh] lg:text-desktext14 font-semibold`}>
                                            <p>{item.post.dateOrder}</p>
                                            <p>کد سفارش : {item.post.codeOrder}</p>
                                            <p>مبلغ پرداخت شده : {item.post.pay}</p>
                                            <p>تخفیف : {item.post.offPay}</p>
                                            <button className="font-bold ">مشاهده سفارش</button>
                                        </section>
                                        <section className="flex flex-row gap-1 w-full px-[1vw] py-[1.5105vh]">
                                            {
                                                item.post.images.map((image:string, index:number) => (
                                                    <img src={image} key={index} className="lg:w-[7.0866vw] rounded-xl lg:h-[13.7vh] object-center object-center]"/>
                                                ))
                                            }
                                        </section>
                                    </div>
                                ))
                            }
                        </>)
                    }

                </div>

            </div>
        </div>
    );
}

export default HisrysOfBuy;