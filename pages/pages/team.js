import React from 'react'
import Head from 'next/head'
import OurLeaders from 'src/components/team/OurLeaders';
import OurTeam from 'src/components/team/OurTeam';
export default function index() {
     return (
          <div>
               <Head>
                    <title>Our Team | | Techgater - Web Design & Development Agency</title>
                    <meta property="og:title" content="My page title" key="title" />
               </Head>
               <OurLeaders />
               <OurTeam />
          </div>
     )
}
