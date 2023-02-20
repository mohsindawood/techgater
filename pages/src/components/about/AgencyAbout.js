import React from 'react'
import CountUp from 'react-countup';
import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from '@mui/material'
import VisibilitySensor from "react-visibility-sensor";

const data = [
     {
          item: 9,
          paragraph: "Happy Clients"
     },
     {
          item: 9,
          name: "k",
          paragraph: "Hours Worked"
     },
     {
          item: 31,
          paragraph: "Project Done"
     },
]
export default function AgencyAbout() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    py: { lg: 10, sm: 5, xs: 2 },
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 0,
                    "::before": {
                         content: `""`,
                         background: `url("/static/home/dot_bg.png")`,
                         position: 'absolute',
                         width: "100%",
                         height: "100%",
                         top: 0,
                         zIndex: -1,
                    }
               }}
          >
               <Container>
                    <Grid container spacing={3}>
                         <Grid item lg={6} md={6} sm={12} xs={12}>
                              <img src="/static/home/company-about.png" alt='about us' />
                         </Grid>
                         <Grid item lg={6} md={6} sm={12} xs={12}>
                              <Box sx={{
                                   [theme.breakpoints.down("md")]: { textAlign: "center" },
                              }}>
                                   <Typography variant="h6" color="primary" sx={{ fontWeight: 400 }}>ABOUT US</Typography>
                                   <Typography variant="h2" color="text.primary" sx={{ fontWeight: 600, my: 2 }}>About Agency</Typography>
                                   <Typography my={2} variant="body1" color="text.secondary">Techgater is Lahore, Pakistan based software company. SE Software Technologies comprises a team of experienced Web Developers, Graphic Designers, Web Engineers and Testing personnel working around the globe in different time zones to keep supporting you 24 hrs. Our sophisticated Web development and Business Solutions bring you peace of mind while we handle everything for you using our client-focused solutions and Services. We value the uniqueness of your business needs and tailor our services according to your specific objectives.</Typography>
                                   <Typography sx={{my:{lg:6,md:4,xs:2}}} variant="body1" color="text.secondary">We understand, analyze and strategize on the existing and sparse tools/platforms for various aspects of life. Our aim is to bring oneness, and most of all make technology useable by humans, and that does not mean creating beautiful designs alone.</Typography>
                              </Box>
                              <Grid container justifyContent="center" spacing={3}>
                                   {data.map((v) => (
                                        <Grid key={Math.random()} item lg={4} md={4} sm={4} xs={4}>
                                             <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                                                  {({ isVisible }) => (
                                                       <Typography variant="h3" color="text.primary" sx={{ height: 50, [theme.breakpoints.down("md")]: { textAlign: "center" } }}>
                                                            {isVisible ? <CountUp end={v.item} /> : null}
                                                            {v.name}
                                                       </Typography>
                                                  )}
                                             </VisibilitySensor>
                                             <Typography variant="body1" color="primary"  sx={{ [theme.breakpoints.down("md")]: { textAlign: "center" } }}>{v.paragraph}</Typography>
                                        </Grid>
                                   ))}
                              </Grid>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}
