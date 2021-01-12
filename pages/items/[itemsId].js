import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppComponent from "../../components/app/App";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductDetail from "../../components/product-detail/product-detail";

export const fetchProductDetail = async (productId) => {
    if (!productId) return {};
    const res = await fetch(encodeURI(`http://localhost:3000/api/items/${productId}`));
    const results = await res.json();
    return results || {};
};

const ItemsId = () => {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState({});

    useEffect(async () => {
        const item = await fetchProductDetail(router.query.itemsId);
        setProductInfo(item);
    }, [router.query.itemsId]);

    return (
        <section>
            <Head>
                <title>MeLi App By Luis Catano</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/3cc81101a5.js" crossorigin="anonymous"></script>
            </Head>
            <AppComponent fullHeight={false}>
                <>
                    <Breadcrumb categories={productInfo?.categories} />
                    <ProductDetail productDetail={productInfo?.item} />
                </>
            </AppComponent>
        </section>
    );
};

export default ItemsId;
