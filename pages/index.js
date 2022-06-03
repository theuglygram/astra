import Head from "next/head";
import Casestudies from "components/home/Casestudies";

import Clients from "components/home/Clients";
import Footer from "components/navigation/Footer";
import HomeHero from "components/home/HomeHero";
import OurServices from "components/home/OurServices";
import Team from "components/home/Team";
import Testimonials from "components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Astra | Home</title>
        <meta name="description" content="Astra Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <OurServices />
      <Casestudies />
      <Testimonials />
      <Team />
      <Clients />
      <Footer />
    </>
  );
}
