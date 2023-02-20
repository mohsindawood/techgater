import React from 'react'
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
import Icon from "src/utils/icon";

export default function Domains() {
     const theme = useTheme();
     const { themeMode } = useSettings();
     const isLight = themeMode === "light";

     const data = [
          {
               icon: "icon-1",
               heading: "Social Networking",
               color: "#7635DC"

          },
          {
               icon: "icon-2",
               heading: "Digital Marketing",
               color: `${theme.palette.secondary.light}`

          },
          {
               icon: "icon-3",
               heading: "Ecommerce Development",
               color: `${theme.palette.info.main}`

          },
          {
               icon: "icon-4",
               heading: "Video Service",
               color: `${theme.palette.success.main}`

          },
          {
               icon: "icon-5",
               heading: "Banking Service",
               color: `${theme.palette.warning.main}`

          },
          {
               icon: "icon-6",
               heading: "Enterprise Service",
               color: `${theme.palette.error.main}`

          },
          {
               icon: "icon-7",
               heading: "Education Service",
               color: `#7635DC`

          },
          {
               icon: "icon-8",
               heading: "Tour and Travels",
               color: `${theme.palette.secondary.light}`

          },
          {
               icon: "icon-9",
               heading: "Health Service",
               color: `${theme.palette.info.main}`

          },
          {
               icon: "icon-10",
               heading: "Event & Ticket",
               color: `${theme.palette.success.main}`

          },
          {
               icon: "icon-11",
               heading: "Restaurant Service",
               color: `${theme.palette.warning.main}`

          },
          {
               icon: "icon-12",
               heading: "Business Consultant",
               color: `${theme.palette.error.main}`

          },
     ]

     return (
          <Box
               sx={{
                    py: 10,
                    background: `linear-gradient(to top, ${alpha(theme.palette.primary.main, 0.26)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
               }}
          >
               <Container>
                    <Grid container spacing={3}>
                         <Grid item lg={4} md={4} sm={6} xs={12}>
                              <Box sx={{
                                   my: { lg: 8, md: 6, xs: 4 },
                                   [theme.breakpoints.down("md")]: { textAlign: "center" }
                              }}>
                                   <Typography variant="h6" color="primary" sx={{ fontWeight: 400, textTransform: "uppercase" }}>Industries we work for</Typography>
                                   <Typography variant="h2" color="text.primary" sx={{ mb: 5 }}>Helping Businesses in All Domains</Typography>
                                   <Typography variant="body1" color="text.secondary">Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                              </Box>
                         </Grid>
                         <Grid item lg={8} md={8} sm={6} xs={12}>
                              <Grid container spacing={3}>
                                   {data.map((v) => (
                                        <Grid key={Math.random()} item lg={3} md={3} sm={6} xs={12}>
                                             <Card sx={{
                                                  p: 3,
                                                  textAlign: "center",
                                                  height: "155px",
                                                  background: `${alpha(v.color, 0.16)}`,
                                                  borderRadius: "8px 40px 8px 40px",
                                                  border: ` 1px solid ${v.color}`,
                                                  svg: {
                                                       width: "60px",
                                                       height: "60px",
                                                       fill: `${v.color}!important`,
                                                       g: {
                                                            fill: `${v.color}!important`,
                                                       }
                                                  }
                                             }}>
                                                  <Icon path={v.icon} />
                                                  <Typography variant="body1" color="text.primary">{v.heading}</Typography>
                                             </Card>
                                        </Grid>
                                   ))}
                              </Grid>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}