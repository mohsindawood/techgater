import React from 'react'
import Marquee from "react-fast-marquee";
import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";

export default function OurClients() {
     const theme = useTheme();
     const { themeMode } = useSettings();
     const isLight = themeMode === "light";
     const setting = {
          gradient: false
     }
     const logoData = [
          "commercehope-logo.png",
          "logo_med.svg",
          "bhsg.png",
          "mejora.png",
          "phptravels.png",
          "wattba.png",
          "PNNV.png",
          "ae.png",
          "musingo.png",
          "suregifts.svg",
          "magentoassistlogo.png",
     ]

     return (
          <Box
               sx={{
                    py: 10,
                    textAlign: "center",
               }}
          >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 400, textTransform: "uppercase" }}>Our happy customers</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ mb: 5 }}>Clients work with</Typography>
                    <Marquee {...setting}>
                         {logoData.map((v) => (
                              <Stack spacing={3} direction="row" alignItems='center'>
                                   <Box mx={3} sx={{
                                        bgcolor: "#ffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: '10px',
                                        minWidth: "80px",
                                        height: "80px",
                                        borderRadius: '10px',
                                        width: "100%",
                                   }}>
                                        <img src={`/static/home/icon/${v}`} alt="logo" height="60px" />
                                   </Box>
                              </Stack>
                         ))}
                    </Marquee>
               </Container>
          </Box>
     )
}
