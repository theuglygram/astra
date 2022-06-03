import Head from "next/head";
import Footer from "components/navigation/Footer";
import CareerHero from "components/careers/CareerHero";
import OurBenefits from "components/careers/OurBenefits";
import TeamTestimony from "components/careers/TeamTestimony";
import OpenPositions from "components/careers/OpenPositions";
export default function Careers() {
  return (
    <>
      <Head>
        <title>Astra | Careers</title>
        <meta name="description" content="Astra Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CareerHero />
      <OurBenefits />
      <OpenPositions />
      <TeamTestimony />

      <Footer />
    </>
  );
}
