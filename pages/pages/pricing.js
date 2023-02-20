import React from 'react'
import Head from 'next/head'
import Pricing from 'src/components/pricing/Pricing'
import PricingTable from 'src/components/pricing/PricingTable'
export default function index() {
     return (
          <div>
               <Head>
                    <title>Pricing | | Techgater - Web Design & Development Agency</title>
                    <meta property="og:title" content="My page title" key="title" />
               </Head>
               <Pricing />
               <PricingTable />
          </div>
     )
}
