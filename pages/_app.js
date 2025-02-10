import "@/src/globals.css";
import Head from "next/head";
import { Gabarito } from "next/font/google";
import FuzzyOverlay from "@/components/FuzzyOverlay";
import Footer from "@/components/Footer";
import Script from "next/script";

const gabarito = Gabarito({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; 
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZ8SSSB5');
          `,
        }}
      />

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
