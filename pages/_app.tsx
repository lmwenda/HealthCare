import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
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
        <Header />  
        <Component {...pageProps} />
        <Footer />
    </motion.div>
  );
}

export default MyApp
