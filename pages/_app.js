import '@/src/globals.css'
import Head from 'next/head';
import {Gabarito}  from "next/font/google"
import FuzzyOverlay from "@/components/FuzzyOverlay";
import Footer from "@/components/Footer";

const gabarito = Gabarito({subsets: ["latin"], weight: ["400", "700"]});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Phoenix Project | Innovative Solutions for a Better Future</title>
      <meta 
    name="description" 
    content="Phoenix Project helps businesses and individuals achieve success through cutting-edge solutions, innovation, and creativity." 
  />
    </Head>
    <main className={gabarito.className}>
      <div className="relative overflow-hidden">
      <Component {...pageProps} />
      <Footer />
      <FuzzyOverlay />
      </div>
    </main>
    </>
  );
}
