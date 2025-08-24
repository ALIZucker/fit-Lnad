'use client';

import React from 'react';
import {useParams} from "next/navigation";
import {getDetailPost} from '../lib/getDetailPost'
import {dataproduct} from "@/type/next-auth";

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
        <div>




        </div>
    );
}

export default ProductDetailPage;