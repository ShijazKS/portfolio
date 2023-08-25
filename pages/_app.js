import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <title>Shijaz ks</title>
        <meta name="keywords" content="shijaz ks,ks,jazdesign,jaz,shijaz" />
        <link rel="shortcut icon" href="/static/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
