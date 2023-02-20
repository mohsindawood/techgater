import React from 'react'
import { Container, Grid, Box, Typography, Link } from '@mui/material'
const cardData = [
     {
          img: "/static/home/11.jpg",
          link: "#",
          name: "Creative App",
          paragraph: "ios, design"
     },
     {
          img: "/static/home/12.jpg",
          link: "#",
          name: "Icon Pack",
          paragraph: "Android & iOs, Design"
     },
     {
          img: "/static/home/13.png",
          link: "https://blochtransport.com",
          name: "Bloch Transport",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/14.png",
          name: "Hotel Gater",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/techgater lahore softwere spatay.png",
          link: "#",
          name: "Brochure Design",
          paragraph: "Graphic, Print"
     },
     {
          img: "/static/home/15.png",
          link: "https://app.poolz.finance/lobby",
          name: "Poolz",
          paragraph: "Web Application"
     },

     {
          img: "/static/home/16.png",
          link: "https://app.poolz.finance/lobby",
          name: "Ipurvey",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/world bi group.png",
          link: "http://worldbigroup.com/",
          name: "World BI",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/suregifts admin panel .png",
          link: "https://www.amygoz.com/",
          name: "Packaging Design",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/magentoassist .png",
          link: "http://magentoassist.nl/",
          name: "magentoassist",
          paragraph: "Web Application"
     },
];
export default function Card() {
     return (
          <>
               <Container>
                    <Grid container spacing={4}>
                         {cardData.map((v) => (
                              <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                                   <Box sx={{ my: { lg: 5, md: 3, xs: 2 } }}>
                                        <Box
                                             sx={{
                                                  borderRadius: 2,
                                                  overflow: "hidden",
                                                  img: {
                                                       objectFit: "cover",
                                                       transition: `all 0.8s`,
                                                       ":hover": {
                                                            transform: `scale(1.1)`,
                                                       }
                                                  },
                                             }}
                                        >
                                             <Link href={v.link} target="_blank">
                                                  <img src={v.img} alt="magentoassist " width="100%" height="350px" />
                                             </Link>
                                        </Box>
                                        <Typography variant="h4" color="text.primary" sx={{ my: { md: 2, xs: 1 } }}>{v.name}</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ my: { md: 2, xs: 1 } }}>{v.paragraph}</Typography>
                                   </Box>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </>
     )
}
