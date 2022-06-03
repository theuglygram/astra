import Head from "next/head";
import Footer from "components/navigation/Footer";
import WorkHero from "components/casestudy/WorkHero";
import CaseHero from "components/casestudy/CaseHero";

export default function Casestudy() {
  return (
    <>
      <Head>
        <title>Astra | Casestudy</title>
        <meta name="description" content="Astra Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CaseHero />

      <WorkHero />
      <Footer />
    </>
  );
}
