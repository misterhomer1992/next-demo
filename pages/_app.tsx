import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "../styles/vendors/bootsrap/bootstrap.css";
import {Header} from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Header/>
            <main className="main">
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
