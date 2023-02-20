import React from 'react'
import { Box, Typography, Container, Divider, Paper, Grid, Fab } from '@mui/material';
import Icon from "src/utils/icon";
import { useTheme, alpha } from "@mui/material/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const data = [
     {
          name: "HTML WEBSITE",
          pages: "Landing Pages",
          price: 200,
          paragraph: "HTML, CSS, BS, JS, Jquery, Bootstrap, Wow Effect",
          action: "10 Landing pages",
          action1: "Animations",
          action2: "Mobile Responsive",
          action3: "Content Uplaod",
          action4: "Deploy",
          icon: "plan-1",
          id: 1
     },
     {
          name: "REACT + NEXT WEB APP",
          pages: "Landing Pages",
          price: 400,
          paragraph: "MaterialUI, ANTD, TailwindCSS, Sass/Scss",
          action: "10 Reuseable Components",
          action1: "Api Integration",
          action2: "SEO",
          action3: "Redux",
          action4: "Deploy",
          icon: "plan-2",
          id: 2
     },
     {
          name: "REACT DASHBOARD",
          pages: "Great For Large Business",
          price: 800,
          paragraph: "React, Redux, Charts, Material-UI, Firebase",
          action: "Auth",
          action1: "Api Integration",
          action2: "Dark Mode Theme",
          action3: "DataTables & Charts",
          action4: "Deploy",
          icon: "plan-3",
          id: 3
     },
]


export default function PricingTable() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    py:{lg:8,md:6,xs:2},
                    textAlign: "center",
               }}
          >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 400, my: 1 }}>PRICING</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ fontWeight: 600, mb:{md:5,xs:2}  }}>Pricing Table</Typography>
                    <Grid container justifyContent="center" spacing={2}>
                         {data.map((v) => (
                              <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                                   <Paper
                                        sx={{
                                             m: 1,
                                             p: 4
                                        }}
                                   >
                                        <Box
                                             sx={{
                                                  mx: "auto",
                                                  my: 2,
                                                  p: 1,
                                                  width: "70px",
                                                  height: "70px",
                                                  borderRadius: '50%',
                                                  background: `${alpha(theme.palette.primary.main, 0.16)}`,
                                                  svg: {
                                                       fill: `${theme.palette.primary.main} !important`
                                                  }
                                             }}
                                        >
                                             <Icon path={v.icon} />
                                        </Box>
                                        <Typography variant="h6" color="text.secondary">{v.name}</Typography>
                                        <Typography variant="body1" color="text.secondary">{v.pages}</Typography>
                                        <Typography variant="h2" color="primary"><sup>$</sup>{v.price}</Typography>
                                        <Typography variant="body1" color="text.secondary">{v.paragraph}</Typography>
                                        <Divider sx={{ my: 4 }} />
                                        <Typography my={2} variant="body1" color="text.secondary">{v.action}</Typography>
                                        <Typography my={2} variant="body1" color="text.secondary">{v.action1}</Typography>
                                        <Typography my={2} variant="body1" color="text.secondary">{v.action2}</Typography>
                                        <Typography my={2} variant="body1" color="text.secondary">{v.action3}</Typography>
                                        <Typography my={2} variant="body1" color="text.secondary">{v.action4}</Typography>
                                        <Fab variant="extended" size="large" color="primary" aria-label="edit"
                                         sx={{background:`${v.id === 2 ? "linear-gradient(to right, #673AB7 0%,#2196F3 100%)": theme.palette.primary.main}`,mb: -9, px: 4, svg: { ml: 1, fontSize: "12px !important" } }}>
                                             Choose plane
                                             <ArrowForwardIosIcon size="small" />
                                        </Fab>
                                   </Paper>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box>
     )
}
