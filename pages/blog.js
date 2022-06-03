import Head from "next/head";

import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import BlogHero from "components/blog/BlogHero";
import Subscribe from "components/blog/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Astra | Blog</title>
        <meta name="description" content="Astra Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BlogHero />
      <Subscribe />
      <Footer />
    </>
  );
}
