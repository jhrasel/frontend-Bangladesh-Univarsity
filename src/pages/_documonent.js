import "bootstrap/dist/css/bootstrap.min.css";
import Document, { Head, Html, Main, NextScript } from "next/document";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/styles/globals.css";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
          {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />*/}
          {/*<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"*/}
          {/*            rel="stylesheet" />*/}
          {/*<link*/}
          {/*    rel="stylesheet"*/}
          {/*    type="text/css"*/}
          {/*    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"*/}
          {/*/>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
