import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container, ThemeProvider } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import { QueryClient, QueryClientProvider } from "react-query";
import ScrollToTop from "react-scroll-to-top";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/styles/globals.css";
import { Footer } from "../components/Footer/footer";
import { Header } from "../components/header/header";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.asPath === "/" && router.push("home");
  }, [router]);
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title> Bu</title>
      </Head>
      <ThemeProvider>
        <Header />
        <Container fluid style={{ padding: "0px" }}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
      <ScrollToTop smooth component={<IoIosArrowUp />} />
    </QueryClientProvider>
  );
}

export default MyApp;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// const index = ({ children }) => {

//     return (
//         <>
//           {children}
//         </>
//     )
// }

// export default index
