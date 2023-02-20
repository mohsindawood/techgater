import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
import Icon from "src/utils/icon";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const data = [
     {
          icon: "content",
          name: "Web App Development",
          paragraph: "Providing high-end website and web app development services. I build best quality, user-friendly and responsive custom Websites and Web Based Applications."
     },
     {
          icon: "webdevelopment",
          name: "Website Development",
          paragraph: "Our web development team creates intuitive user experiences wrapped up in beautiful designs. Everything we create is custom and precisely made to your specification."
     },
     {
          icon: "app",
          name: "Mobile app Development",
          paragraph: "We help keep your apps updated and their features updated. We can wrangle the messiest legacy code, bring it in line with standards, and keep it functional, fast, and secure."
     },
]
export default function DevelopmentServices() {
     const theme = useTheme();
     return (
          <>
               <Box sx={{my:{lg:8,md:6,xs:2}}}>
                    <Container>
                         <Typography variant="h6" color="primary" sx={{ mt:{md:4,xs:2}, fontWeight: 400, textTransform: "uppercase", textAlign: "center" }}>Service</Typography>
                         <Typography variant="h2" color="text.primary" sx={{ textAlign: "center", mb:{md:5,xs:2} }}>Development Service</Typography>
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
          </>
     )
}
