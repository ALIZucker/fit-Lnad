import React from 'react';

interface IProps {
    image: string;
}

function DetailImagePro(props: IProps) {
    return (
        <div className="w-[40.3502vw] h-auto flex flex-col gap-7 ">
            <img style={{objectFit: 'cover', objectPosition: 'top'}} src={props.image} alt={`product image`}
                 className="w-[37.3502vw] rounded-3xl h-[380px]"/>
            <section className="flex flex-row gap-6  border-gray-200 h-auto w-full">
                <img src="/img/detai1.png" className='w-[5.0473vw] h-[80px] rounded-xl object-cover object-center border-2 border-gray-400' alt="image"/>
                <img src="/img/detai3.png" className='w-[5.0473vw] h-[80px] rounded-xl object-cover object-center border-2 border-gray-400' alt="image"/>
                <img src="/img/detai2.png" className='w-[5.0473vw] h-[80px] rounded-xl object-cover object-center border-2 border-gray-400' alt="image"/>
                <img src="/img/detai1.png" className='w-[5.0473vw] h-[80px] rounded-xl object-cover object-center border-2 border-gray-400' alt="image"/>
                <img src="/img/detai3.png" className='w-[5.0473vw] h-[80px] rounded-xl object-cover object-center border-2 border-gray-400' alt="image"/>
                <div className='w-[5.0473vw] h-[80px] items-center justify-center rounded-xl object-cover object-center flex flex-col gap-1 border-2 border-gray-400'>

                    <img src="/icon/gallery.png" className="w-5 h-5" alt="image"/>
                    <p className={`font-extrabold text-[10px]`}> تصاویر بیشتر</p>
                </div>
            </section>
        </div>
    );
}

export default DetailImagePro;