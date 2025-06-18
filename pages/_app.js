import "../styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";
// import SplashScreen from "../components/splashScreen.js";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* Add the favicon */}
      <Head>
        <title>Shijaz ks</title>
        <meta name="keywords" content="shijaz ks,ks,jazdesign,jaz,shijaz" />
        <link rel="shortcut icon" href="/static/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* {loading ? <SplashScreen /> : <Component {...pageProps} />} */}
       <Component {...pageProps} />
    </>
  );
}

export default MyApp;
