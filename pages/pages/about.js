import React from 'react'
import Head from 'next/head'
import AboutCompany from 'src/components/about/AboutCompany';
import AgencyAbout from 'src/components/about/AgencyAbout';
import WhyChoose from 'src/components/about/WhyChoose';
export default function index() {
     return (
          <div>
               <Head>
                    <title>About | | Techgater - Web Design & Development Agency</title>
                    <meta property="og:title" content="My page title" key="title" />
               </Head>
               <AboutCompany />
               <AgencyAbout />
               <WhyChoose />
          </div>
     )
}
