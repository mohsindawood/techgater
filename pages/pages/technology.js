import React from 'react';
import Head from 'next/head'
import Technology from "src/components/technology/Technology";
import AboutTechnology from "src/components/technology/AboutTechnology";
// import FrontendCards from "src/components/technology/FrontendCards";
import WebTechnologies from "src/components/technology/WebTechnologies";
import CtaArea from "src/components/services/CtaArea"
export default function index() {
  return (
    <>
      <Head>
        <title>Technology | | Techgater - Web Design & Development Agency</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Technology />
      <AboutTechnology />
      {/* <FrontendCards /> */}
      <WebTechnologies />
      <CtaArea />
    </>
  );
}
