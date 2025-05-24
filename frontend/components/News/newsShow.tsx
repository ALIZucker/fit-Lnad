'use client'
import React from 'react';
import axios from 'axios';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 768},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 768, min: 0},
        items: 1,
    },
};

interface structData {

    imageUrl: string;
    titleNews: string;
    descriptionNews: string;
}

function NewsShow() {

    const [dataArrived, setDataArrived] = React.useState<structData[]>([])

    React.useEffect(() => {
        axios.get("http://localhost:8080/news/show").then(res => setDataArrived(res.data));
    }, [])


    return (
        <div className="w-full flex flex-col mt-8 items-center lg:gap-12 gap-8 ">

            <h2 className="lg:text-desktext32 text-[16px]  font-bold">جدیدترین ها در اخبار ورزش</h2>
            <Carousel
                className="w-[90%] py-12"
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={1500}
                keyBoardControl
                transitionDuration={500}
                showDots={true}
                arrows={true}
                removeArrowOnDeviceType={['tablet', 'mobile']}
            >
                {
                    dataArrived.map((data, index) => (
                        <div className="flex flex-col gap-2 items-end    w-full lg:w-[25.62vw] rounded-xl h-auto "
                             style={{border: "1px solid rgba(0,0,0,0.3)"}} key={index}>
                            <Image src={data.imageUrl} alt="asdasdasd"
                                   className="w-full h-[31.21vh] object-cover object-center rounded-xl"
                                   width={300} // Required
                                   height={280} // Required
                            />
                            <section className="px-4  flex flex-col  py-2 lg:gap-4 gap-2" >
                                <h3 className="lg:text-desktext20 text-monile12 font-bold text-right">{data.titleNews}</h3>
                                <p className="lg:text-sm text-mobtext10 font-semibold text-right">{data.descriptionNews}</p>
                            </section>
                                <button className="lg:w-[7vw] w-[20vw]  lg:text-desktext18 text-monile12 py-2 lg:h-[5.02vh] mx-3 my-3 lg:px-2  bg-primary rounded-xl text-white">مشاهده خبر</button>

                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default NewsShow;