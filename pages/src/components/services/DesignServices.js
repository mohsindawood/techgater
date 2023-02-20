import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
import Icon from "src/utils/icon";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const data = [
     {
          icon: "pin",
          name: "Graphic Design",
          paragraph: "Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Intellectsoft’s UI and UX services."
     },
     {
          icon: "branding",
          name: "Website design",
          paragraph: "We specialize in quality web design services to suit all businesses, Tastes, and Budgets. Whether it is a simple, Elegant web design or a custom built web design and enhancements,"
     },
     {
          icon: "app",
          name: "Mobile app design",
          paragraph: "We are team of experienced designers who know how to design for various screen sizes. Our designs are not just minimal desktop version designs but we know how to be beef up the efficiency."
     },
]


export default function DesignServices() {
     const theme = useTheme();
     const { themeMode } = useSettings();
     const isLight = themeMode === "light";
     return <>
          <Box
               sx={{
                    py: {lg:8,md:6,xs:2},
                    background: `url(/static/home/bg-line.svg)`,
                    backgroundSize: "50px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                    zIndex: 0,
                    "::before": {
                         content: `''`,
                         background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.16)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
                         position: "absolute",
                         top: 0,
                         height: "100%",
                         width: "100%",
                         opacity: 1.5,
                         right: 0,
                         left: 0,
                         zIndex: -1,
                    },
               }}
          >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ mt:{md:4,xs:2}, fontWeight: 400, textTransform: "uppercase", textAlign: "center" }}>Service</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ textAlign: "center", mb: {lg:5,xs:2}}}>Design Service</Typography>
                    <Grid container spacing={3}>
                         {data.map((v) => (
                              <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                                   <Paper
                                        sx={{
                                             height:"440px",
                                             textAlign: "center",
                                             p: "50px 20px",
                                             border:`1px solid ${theme.palette.background.default}`,
                                             svg: {
                                                  width: "80px",
                                                  height: "80px",
                                             },
                                             button:{
                                                  svg: {
                                                       width: "12px",
                                                       height: "12px",
                                                  }, 
                                             }
                                        }}
                                   >
                                        <Icon path={v.icon} />
                                        <Typography my={2} variant="h4" color="text.primary">{v.name}</Typography>
                                        <Typography variant="body1" color="text.secondary">{v.paragraph}</Typography>
                                        <Button size="small" variant="text" endIcon={<ArrowForwardIosIcon size="small" />} sx={{ mt: 2}}>
                                             Learn More
                                        </Button>
                                   </Paper>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box>
     </>;
}
