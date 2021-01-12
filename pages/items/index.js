import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AppComponent from "../../components/app/App";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import SearchResult from "../../components/search-result/SearchResult";

export const fetchQuery = async (query) => {
    if (!query) return {};
    const res = await fetch(encodeURI(`http://localhost:3000/api/items?q=${query}`));
    const results = await res.json();
    return results || {};
};

const Items = () => {
    const router = useRouter();
    const [queryResult, setQueryResult] = useState({ items: [], categories: [] });

    useEffect(async () => {
        const results = await fetchQuery(router.query.q);
        setQueryResult(results);
    }, [router.query.q]);

    return (
        <section>
            <Head>
                <title>MeLi App By Luis Catano</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/3cc81101a5.js" crossorigin="anonymous"></script>
            </Head>
            <AppComponent>
                <>
                    <Breadcrumb categories={queryResult?.categories} />
                    <SearchResult items={queryResult?.items} />
                </>
            </AppComponent>
        </section>
    );
};

export default Items;
