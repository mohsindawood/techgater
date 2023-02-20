import React from 'react';
import { useTheme } from "@mui/material/styles";
import {Box, Container, Typography } from '@mui/material'

export default function AboutServices() {
     const theme = useTheme();
     return <>
     <Box sx={{my:{lg:8,md:6,xs:2}, [theme.breakpoints.down("md")]: { textAlign: "center" }}}>
          <Container>
               <Typography variant="h6" color="primary" sx={{ mt:{md:4,xs:2}, fontWeight: 400, textTransform: "uppercase" }}>Service We Provide</Typography>
               <Typography variant="h2" color="text.primary">About Service</Typography>
               <Typography variant="body1" color="text.secondary">Techgater is an established firm for providing web applications and software as a service (SaaS). Our front-end designers and programmers have the skills and expertise to provide you a product build with latest technology. We are experienced in handling complex business logic, your unique business needs and develops solutions effectively. Our designers and developers collaborate to make the website that has flow design that looks pleasant on the user end and deliver functionality.</Typography>
          </Container>
          </Box>
     </>;
}
