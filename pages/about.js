import Head from "next/head";

import Footer from "components/navigation/Footer";
import AboutHero from "components/about/AboutHero";
import Values from "components/about/Values";
import SecondValue from "components/about/SecondValue";
import ThirdValue from "components/about/ThirdValue";
import Features from "components/about/Features";
import Story from "components/about/Story";
import WorkSection from "components/about/WorkSection";

export default function About() {
  return (
    <>
      <Head>
        <title>Astra | About</title>
        <meta name="description" content="Astra Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHero />
      <Values />
      <SecondValue />
      <ThirdValue />
      <Features />
      <Story /> <WorkSection />
      <Footer />
    </>
  );
}
