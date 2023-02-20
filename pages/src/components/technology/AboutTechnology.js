import React from 'react';
import { useTheme } from "@mui/material/styles";
import {Box, Container, Typography } from '@mui/material'

export default function AboutTechnology() {
     const theme = useTheme();
     return <>
     <Box sx={{my:{lg:8,md:6,xs:2}, [theme.breakpoints.down("md")]: { textAlign: "center" }}}>
          <Container>
               <Typography variant="h6" color="primary" sx={{ mt:{md:4,xs:2}, fontWeight: 400, textTransform: "uppercase" }}>Technologies We Provide</Typography>
               <Typography variant="h2" color="text.primary">About Technologies</Typography>
               <Typography variant="body1" color="text.secondary" sx={{
                    span:{
                         fontWeight:600,
                    }
               }}>Creating a complex web application involves technologies from both the server side and client side. When we are talking about Web Technologies, it usually means the client-side technologies, which are used to build and display everything that the end user interacts with.The main language of the web is JavaScript, presented on most webpages and web apps on the client side. This means that the web technologies are mostly based on JavaScript. We will go through some of the most popular and well-known web technologies to figure out which kind of technologies you need for your project. <span>Techgater</span> also offers free quotes if you have any concerns or need help from an IT expert. Do not hesitate and contact us now for all your IT needs</Typography>
          </Container>
          </Box>
     </>;
}
