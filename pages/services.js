import React from 'react'
import Head from 'next/head'
import OurServices from 'src/components/services/OurServices'
import AboutServices from 'src/components/services/AboutServices'
import DesignServices from 'src/components/services/DesignServices'
import DevelopmentServices from 'src/components/services/DevelopmentServices'
import CtaArea from 'src/components/services/CtaArea'

export default function index() {
     return (
          <>
               <Head>
                    <title>Web Services | | Techgater - Web Design & Development Agency</title>
                    <meta property="og:title" content="My page title" key="title" />
               </Head>
               <OurServices />
               <AboutServices />
               <DesignServices />
               <DevelopmentServices />
               <CtaArea />
          </>
     )
}
