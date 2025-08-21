import React from 'react';
import axios from 'axios';


export interface dataIntersted {
    image: string;
    title: string;
    price: string;
}


function InterstedUser() {
    const [dataInterested, setDataInterested] = React.useState<dataIntersted[]>([]);

    const getData = async () => {
        const response = await axios.get('http://localhost:8080/products/interested');
        setDataInterested(response.data);
    }

    React.useEffect(() => {
        try {
            getData();
        } catch (e) {
            console.error(e);
        }

    }, [])
    React.useEffect(() => {
        console.log(dataInterested);

    }, [dataInterested])

    return (
        <div className="flex flex-col gap-6 ">
            <h2 className="text-desktext24 font-bold">علاقه مندی ها</h2>
            <div className="h-auto  flex gap-[1.75vw] px-[2vw] flex-wrap  flex-row w-full">
                {
                    dataInterested.map((item, index) => (
                        <>
                            <div key={index} className="flex flex-col rounded-t-xl  bg-[#f9f9f9] h-auto w-[17vw]">
                                <img src={item.image} alt={item.title} />
                                <section className="flex flex-col gap-2 w-full py-4">
                                    <p className="text-desktext16 px-4 font-medium ">{item.title}</p>
                                    <p className="text-desktext16 px-4 font-medium ">از سایز M تا 3XL</p>
                                    <p className="text-desktext16 px-4 font-medium ">{item.price} تومان</p>
                                </section>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
}

export default InterstedUser;