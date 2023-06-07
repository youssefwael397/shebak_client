import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "antd/dist/antd.css";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shebak</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logo5.png" />
      </Head>



      {/* <Script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" 
      crossOrigin="anonymous" 
      /> */}

      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />

      <Provider store={store}>
        {
          Component.getLayout ?
            Component.getLayout(<Component {...pageProps} />) :
            <Layout>
              <ThemeProvider>
                <Component {...pageProps} />
              </ThemeProvider>
            </Layout>
        }
      </Provider>
    </>
  );
}

export default MyApp;
