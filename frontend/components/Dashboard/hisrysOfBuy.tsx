'use client'
import React from 'react';
import axios from 'axios'
import TemplateOrder from "@/components/Dashboard/templateOrder";
import {itemspostDashboard} from "@/type/next-auth"


function HisrysOfBuy() {
    const [selected, setSelected] = React.useState<number >(1)
    const [data, setData] = React.useState<itemspostDashboard[] | null>(null)
    const [result, setResult] = React.useState<itemspostDashboard[] >([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const respont = await axios.get('http://127.0.0.1:8080/mypost/show')
                console.log(respont.data.massage)
                setData(respont.data.massage)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    React.useEffect(() => {
        console.log(data)
        const result = data?.filter(item => item.situation === selected.toString());

        console.log(result)



    }, [selected])

    return (
        <div className="flex flex-col gap-4 ">
            <h2 className="text-desktext24 font-semibold px-5"> تاریخچه سفارشات</h2>
            <div className="flex flex-col w-full  items-center rounded-2xl "
                 style={{border: "0.12vw solid rgba(138, 138, 138, 0.5)"}}>
                <div className="flex flex-row text-desktext16 w-full gap-9 items-center justify-start p-6"
                     style={{borderBottom: "0.12vw solid rgba(138, 138, 138, 0.5)"}}>
                    <p className={selected == 1 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(1)}>جاری ۱</p>
                    <p className={selected == 2 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(2)}>تحویل شده 8</p>
                    <p className={selected == 3 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(3)}> مرجوع شده 2</p>
                    <p className={selected == 4 ? `bg-backDash rounded-xl font-semibold text-green-800 px-2 py-1 ` : `px-2 py-1 cursor-pointer`}
                       onClick={() => setSelected(4)}>لغو شده 8</p>
                </div>
                <div className="flex flex-col items-center gap-6 w-full  p-6">
                    {
                        result.length == 0 ? <p>asdasd</p> : (
                           <>

                           {
                               result.map((item) => (
                                   <TemplateOrder items={item}/>
                               ))
                           }

                           </>
                       )
                    }


                </div>

            </div>
        </div>
    );
}

export default HisrysOfBuy;