import { Box, Container, Typography, Grid, Link } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";

const dataCreativeWork = [
     {
          img: "/static/home/suregifts admin panel .png",
          link: "https://www.amygoz.com/",
          name: "Suregifts",
          paragraph: "Website Development"
     },
     {
          img: "/static/home/techgater lahore softwere spatay.png",
          link: "https://spatay.me/",
          name: "Spatay Traveling App",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/world bi group.png",
          link: "http://worldbigroup.com/",
          name: "World BI",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/techgater lahore softwere spatay.png",
          link: "https://presshog.com/",
          name: "Presshog",
          paragraph: "Web Application"
     },
     {
          img: "/static/home/magentoassist .png",
          link: "http://magentoassist.nl/",
          name: "magentoassist.nl",
          paragraph: "Web Application"
     },
];

export default function CreativeWork() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    position: "relative",
                    py: 7,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    zIndex: 0,
                    "::before": {
                         content: `""`,
                         background: 'url("/static/home/dot-pattern.png")',
                         position: "absolute",
                         height: "400px",
                         right: 0,
                         left: 0,
                         top: 0,
                         backgroundSize: "auto",
                         backgroundRepeat: "repeat",
                         zIndex: -1,
                    },
                    ".MuiGrid-item":{
                         [theme.breakpoints.down("sm")]: { pt:"30px !important" }
                    }
               }}
          >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ mt: 4, fontWeight: 400, textTransform: "uppercase" }}>Our work</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ mb: 5 }}>Our Latest Creative Work</Typography>
                    <Grid container justifyContent="center" spacing={8}>
                         {dataCreativeWork.map((v) => (
                              <Grid key={Math.random()} item lg={4} md={4}>
                                   <Box my={2}>
                                        <Box
                                             sx={{
                                                  borderRadius: 2,
                                                  width:"350px",
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
                                        <Typography variant="h4" color="text.primary" sx={{ my:{lg:2, xs:1} }}>{v.name}</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ my: {lg:2, xs:1}}}>{v.paragraph}</Typography>
                                   </Box>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box >
     )
}
