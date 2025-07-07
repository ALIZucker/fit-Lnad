'use client'
import React, {useEffect} from 'react';
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PostDetail from "@/components/PostsComponent/postDetail";

interface PropsTakhfif {
    color: string;
    url: string;
}

interface formatDAta{
    image:string;
    title:string;
    price:string;
    size:string;
    vip:boolean;
    off:string;
}

function Takhfif({color,url}: PropsTakhfif) {
    const [dataArrived, setDataArrived] = React.useState<formatDAta[]>([]);

    useEffect(() => {

        axios.get(url)
            .then(res => setDataArrived(res.data))
            .catch(err => console.log(err));

    }, [])
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className={`flex lg:mt-[8.36vh] mt-2 flex-col items-center w-full gap-2 ${color} lg:h-[59.83vh] h-[49vh]`}>
            <h2 className="lg:text-desktext32 text-monile12 font-extrabold bg-white py-2 px-5 rounded-xl">تخفیفات ویژه</h2>

            <Carousel className="w-full py-8 lg:px-10 "
                      responsive={responsive}
                      infinite
                      autoPlay
                      autoPlaySpeed={3000}
                      keyBoardControl
                      transitionDuration={500}
                      removeArrowOnDeviceType={['tablet', 'mobile']}
                      containerClass="carousel-container"
                      itemClass="px-4"
            >
                {
                    dataArrived.map((item, i) => (
                        <>
                            <PostDetail key={i} image={item.image} title={item.title} price={item.price} vip={item.vip} off={item.off}/>

                        </>

                    ))
                }
            </Carousel>
        </div>
    );
}

export default Takhfif;