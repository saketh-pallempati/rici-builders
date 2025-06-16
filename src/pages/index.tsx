import Head from "next/head";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

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
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Header />
      <HomeBanner />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}
