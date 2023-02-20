import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from '@mui/material'
export default function AboutAgency() {
     const theme = useTheme();
     return (
          <Box
               sx={{
                    py: 8,
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 0,
                    "::before": {
                         content: '""',
                         background: 'url("/static/home/dot_bg.png")',
                         position: "absolute",
                         height: "100%",
                         width: "100%",
                         top: 0,
                         zIndex: -1
                    }
               }}
          >
               <Container>
                    <Grid container spacing={3}>
                         <Grid item lg={6} md={6}>
                              <img src="/static/home/web1.png" alt="web1-png" />
                         </Grid>
                         <Grid item lg={6} md={6}>
                              <Box
                                   sx={{
                                        [theme.breakpoints.down("md")]: { textAlign: "center" },
                                   }}
                              >
                                   <Typography variant="h6" color="primary" sx={{ fontWeight: 400, my: 2 }}>WE ARE CREATIVE AGENCY</Typography>
                                   <Typography variant="h2" color="text.primary" sx={{ fontWeight: 600, my: 2 }}>About Agency</Typography>
                                   <Typography variant="body1" color="text.secondary">Techgater is Sargodha, Pakistan based software company. We understand, analyze and strategize on the existing and sparse tools/platforms for various aspects of life. Our aim is to bring oneness, and most of all make technology useable by humans, and that does not mean creating beautiful designs alone.</Typography>
                              </Box>
                              <Box
                                   sx={{
                                        bgcolor: theme.palette.background.default,
                                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                                        my: 4,
                                        p: 3,
                                   }}
                              >
                                   <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>Our aim is to provide best solution for every business and individual to empower the online world.</Typography>
                              </Box>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}
