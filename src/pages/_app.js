import React, {useEffect} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../assets/styles/globals.css'
import {Container, ThemeProvider} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/header";
import {Footer} from "../components/Footer/footer";

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        router.asPath === '/' && router.push('home');
    }, [])
    return (
        <div>
            <Head>
                <title> Bu</title>
            </Head>
            <ThemeProvider>
                <Header />
                <Container fluid className='body_padding'>
                    <Component {...pageProps} />
                </Container>
                {
                    router.asPath !== '/login' && (
                        <Footer />
                    )
                }
            </ThemeProvider>
        </div>
    )
}

export default MyApp;