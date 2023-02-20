import React from 'react'
import { useTheme, alpha } from "@mui/material/styles";
import { Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cardData = [
     {
          image: "/static/icons/branding.svg",
          alt: "Brand",
          heading: "Web App Development",
          paragraph: "Building functional Web App with ReactJS, VueJS, MaterialUI & Vuetify"
     },
     {
          image: "/static/icons/development.svg",
          alt: "Brand",
          heading: "Website Design & Development",
          paragraph: "Providing high-end creative website and web app development services."
     },
     {
          image: "/static/icons/app.svg",
          alt: "Brand",
          heading: "Mobile App Development",
          paragraph: "React Native, JAVA and Kotlin base mobile app with Material Design"
     },
     {
          image: "/static/icons/marketing.svg",
          alt: "Brand",
          heading: "Digital Marketing Service",
          paragraph: "Offering a highly tailored marketing services, SEO & digital marketing strategies"
     },
]


export default function OurDesign() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    position: "relative",
                    overflow: "hidden",
                    py:{lg:7, md:5, xs:3},
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    "::before": {
                         content: '""',
                         background: `url("/static/home/dot-shape.png") ${alpha(theme.palette.primary.main, 0.16)}`,
                         position: "absolute",
                         height: "400px",
                         right: 0,
                         left: 0,
                         top: 0,
                         width: "100%",
                         backgroundPosition: "center top",
                         backgroundSize: "contain",
                         backgroundRepeat: "repeat",
                    }
               }}

          >
               <Box
                    sx={{
                         position: "relative",
                         zIndex: 0,
                         "::before": {
                              content: '""',
                              background: `url(/static/icons/shape-2.svg)`,
                              backgroundSize: "auto",
                              position: "absolute",
                              height: "150px",
                              width: "150px",
                              backgroundRepeat: "no-repeat",
                              right: "-40px",
                              bottom: "-10px",
                              zIndex: -1,
                         },
                         "::after": {
                              content: '""',
                              background: `url(/static/icons/shape-1.svg)`,
                              backgroundSize: "auto",
                              position: "absolute",
                              height: "150px",
                              width: "150px",
                              backgroundRepeat: "no-repeat",
                              left: "-40px",
                              bottom: "-20px",
                              zIndex: -1,
                         }
                    }}
               >
                    <Container>
                         <Typography variant="h6" color="primary" sx={{ fontWeight: 400, my: 2, textTransform: "uppercase" }}>Services We’re Provided</Typography>
                         <Typography variant="h2" color="text.primary" sx={{ my: 2 }}>Our Design & Development Services</Typography>
                         <Grid container spacing={3}>
                              {cardData.map((v) => (
                                   <Grid key={Math.random()} item lg={3} md={3} sm={4} xs={12}>
                                        <Card sx={{
                                             py:6,
                                             mt:{lg:4,xs:1},
                                             mb:{lg:10, md:6, xs:1},
                                             borderRadius:2,
                                             background: `url(/static/icons/shape-7.svg) ${theme.palette.background.paper}`,
                                             backgroundSize: " 180px",
                                             backgroundPosition: "top right",
                                             backgroundRepeat: "no-repeat",
                                        }}>
                                             <Box sx={{ display: "inline-flex", my: 2 }}>
                                                  <img
                                                       height="80"
                                                       src={v.image}
                                                       alt={v.alt}
                                                  />
                                             </Box>
                                             <CardContent sx={{ p: "20px" }}>
                                                  <Typography gutterBottom variant="h5" component="div">
                                                       {v.heading}
                                                  </Typography>
                                                  <Typography variant="body1" color="text.secondary">
                                                       {v.paragraph}
                                                  </Typography>
                                             </CardContent>
                                             <CardActions sx={{ display: "block" }}>
                                                  <Button size="small" variant="text" endIcon={<ArrowForwardIosIcon size="small" />} sx={{ svg: { fontSize: "12px !important" } }}>
                                                       Learn More
                                                  </Button>
                                             </CardActions>
                                        </Card>
                                   </Grid>
                              ))}
                         </Grid>

                    </Container>
               </Box>
          </Box>
     )
}
