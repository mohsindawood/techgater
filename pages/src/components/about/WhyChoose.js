import React from 'react'
import { Box, Typography, Container, Grid, Paper } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
import Icon from "src/utils/icon";

const data = [
     {
          icon: "research",
          name: "Reasearch and Analysis"
     },
     {
          icon: "chat",
          name: "Negotiation and power"
     },
     {
          icon: "monitor",
          name: "Creative and innovative solutions"
     },
     {
          icon: "trasparency",
          name: "Trasparency and ease of work"
     },
]

export default function WhyChoose() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    py: { lg: 8, md: 6, xs: 2 },
                    background: `${alpha(theme.palette.primary.main, 0.16)}`,
                    textAlign: "center",
               }}
          >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 400, my: 2 }}>WE ARE AWESOME</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ fontWeight: 600, my: 2 }}>Why Choose Us</Typography>
                    <Grid container spacing={3}>
                         {data.map((v) => (
                              <Grid key={Math.random()} item lg={3} md={3} sm={6} xs={12}>
                                   <Paper
                                        sx={{
                                             mt: { lg: 7, md: 5, xs: 2 },
                                             textAlign: "center",
                                             p: "50px 7px",
                                             height: "280px",
                                             border: `1px solid ${theme.palette.background.default}`,
                                             svg: {
                                                  width: "80px",
                                                  height: "80px",
                                             }
                                        }}
                                   >
                                        <Icon path={v.icon} />
                                        <Typography mt={2} variant="h4" color="text.primary">{v.name}</Typography>
                                   </Paper>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box>
     )
}
