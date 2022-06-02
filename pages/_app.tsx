import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Head from 'next/head';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [ token, setToken ] = useState<any>(null);

  useEffect(() => {
    const _token: any = localStorage.getItem("token");
    setToken(JSON.parse(_token));
  }, [])
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },

        pageAnimate: {
          opacity: 1
        }
      }}> 
        <Head>
          <title>Healthcare</title>
        </Head>
        {
          token !== null ? (
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Component {...pageProps} />
          </div>
          ) :(
            <div>
              <Header />  
              <Component />
            </div>
          )
            
        }
        { token !== null ? null : <Footer /> }
    </motion.div>
  );
}

export default MyApp
