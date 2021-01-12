import Head from "next/head";
import AppComponent from "../components/app/App";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SearchResult from "../components/search-result/SearchResult";

export default function Home() {
    return (
        <section>
            <Head>
                <title>MeLi App By Luis Catano</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/3cc81101a5.js" crossorigin="anonymous"></script>
            </Head>
            <AppComponent />
        </section>
    );
}
