import React from 'react'
import Head from 'next/head'
import OurProjects from 'src/components/portfolio/OurProjects'
import OurWork from 'src/components/portfolio/OurWork'
export default function index() {
     return (
          <><Head>
          <title>Portfolio | | Techgater - Web Design & Development Agency</title>
          <meta property="og:title" content="My page title" key="title" />
     </Head>
             <OurProjects/>
             <OurWork/> 
          </>
     )
}
