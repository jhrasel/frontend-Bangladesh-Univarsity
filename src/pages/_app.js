import React, {useEffect} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import '../assets/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container, ThemeProvider} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/header";
import {Footer} from "../components/Footer/footer";
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        router.asPath === '/' && router.push('home');
    }, [])
    return (
        <QueryClientProvider client={queryClient}>

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
        </QueryClientProvider>
    )
}

export default MyApp;