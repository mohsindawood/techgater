import React from 'react';
import Head from 'next/head'
import GetQuote from "src/components/get-quote/GetQuote"
import Contact from "src/components/get-quote/Contact"
import Location from "src/components/home/Location"
export default function index() {
  return (
    <>
      <Head>
        <title>Get-Quote | | Techgater - Web Design & Development Agency</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <GetQuote />
      <Contact />
      <Location />
    </>
  );
}
