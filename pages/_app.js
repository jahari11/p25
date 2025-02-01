import "@/styles/globals.css";
import {Gabarito}  from "next/font/google"
import FuzzyOverlay from "@/components/FuzzyOverlay";
import Footer from "@/components/Footer";

const gabarito = Gabarito({subsets: ["latin"], weight: ["400", "700"]});

export default function App({ Component, pageProps }) {
  return (
    <main className={gabarito.className}>
      <div className="relative overflow-hidden">
      <Component {...pageProps} />
      <Footer />
      <FuzzyOverlay />
      </div>
    </main>
  );
}
