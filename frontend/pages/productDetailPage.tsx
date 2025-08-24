'use client';

import React from 'react';
import {useParams} from "next/navigation";
import {getDetailPost} from '../lib/getDetailPost'
import {dataproduct} from "@/type/next-auth";
import DetailImagePro from "@/components/DetailProductCompo/DetailImagePro";
import DetailTextPro from "@/components/DetailProductCompo/DetailTextPro";

function ProductDetailPage() {
    const [dataDetail, setDataDetail] = React.useState<dataproduct>();
    const params = useParams()
    React.useEffect(() => {
        let itemParams = decodeURIComponent(params?.id as string)

        getDetailPost(itemParams).then(value => {
            setDataDetail(value)
        });

    }, [])

    return (
        <div className="flex flex-row w-full bg-gray-100 px-[4.2902vw] py-12">
            <DetailImagePro image={dataDetail?.image as string}/>
            <DetailTextPro off={dataDetail?.off as string} star={dataDetail?.star as number} offPrice={dataDetail?.offPrice as string} text={dataDetail?.title as string} price={dataDetail?.price as string}/>

        </div>
    );
}

export default ProductDetailPage;