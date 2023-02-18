import Head from 'next/head';

import HamburgerMenu from '@/components/HamburgerMenu';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Demo from '@/sections/Demo';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>OPTIPOS | An advanced POS system</title>
        <meta name="description" content="OPTIPOS is an essential tool for any business looking to streamline its sales process and improve customer experience. OPTIPOS can help you manage inventory, process transactions, generate reports, and more. Discover the benefits of OPTIPOS software and find the right solution for your business today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-dark min-h-screen w-full px-8 relative scroll-smooth`}>
        <HamburgerMenu/>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Demo/>
        <FAQ />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}
