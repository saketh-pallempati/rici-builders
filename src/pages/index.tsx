import Head from "next/head";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          RICI Builders - 20 Years of Excellence in Civil Construction
        </title>
        <meta
          name="description"
          content="RICI Builders - 20+ Years of Experience in Residential, Commercial, and Renovation Works. Quality Materials, On-Time Completion, Transparent Pricing. Contact: 8838397405"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="civil construction, residential construction, commercial construction, renovation, interior works, Chennai builders, Tamil Nadu construction"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HomeBanner />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}
