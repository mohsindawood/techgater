import React from 'react'
import { Box, Typography, Container, Grid, Card, Button } from '@mui/material';
import { useTheme, alpha } from "@mui/material/styles";
// hooks
import useSettings from "src/hooks/useSettings";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Location() {
     const theme = useTheme();
     const { themeMode, } = useSettings();
     const isLight = themeMode === "light";
     return (
          <Box sx={{
               py: 8,
               position: "relative",
               overflow: "hidden",
               textAlign: "center",
          }} >
               <Container>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 400, textTransform: "uppercase" }}>OUR LOCATIONS</Typography>
                    <Typography variant="h2" color="text.primary" sx={{ mb: 5 }}>Our office</Typography>
                    <Box sx={{
                         position: "relative",
                         zIndex: 0,
                         "::before": {
                              content: `''`,
                              background: `url(/static/icons/shape-1.svg)`,
                              backgroundSize: "auto",
                              position: "absolute",
                              height: "150px",
                              width: "150px",
                              backgroundRepeat: "no-repeat",
                              left: "-50px",
                              top: "-35px",
                              zIndex: -1,
                              [theme.breakpoints.down("sm")]: { display: "none"}
                         },
                         "::after": {
                              content: `''`,
                              background: `url(/static/icons/shape-2.svg)`,
                              backgroundSize: "auto",
                              position: "absolute",
                              height: "150px",
                              width: "150px",
                              backgroundRepeat: "no-repeat",
                              right: "-40px",
                              top: "-55px",
                              zIndex: -1,
                              [theme.breakpoints.down("sm")]: { display: "none"}
                         }
                    }}>
                         <Grid container justifyContent="center" spacing={3}>
                              <Grid item lg={6} md={6} sm={6} xs={12}>
                                   <Card sx={{
                                        p: 2,
                                        background: `${alpha(theme.palette.primary.main, 0.16)}`,
                                        border:` 1px solid ${theme.palette.primary.main}`,
                                        borderRadius:1,
                                        img:{
                                             objectFit:"contain"
                                        }
                                   }}>
                                        <img src="/static/home/icon/lahore.png" height="335px" width="100%" alt="Location" />
                                   </Card>
                                   <Typography my={1} variant="h4" color="text.primary">Sargodha</Typography>
                                   <Typography my={1} variant="body1" color="text.secondary">Rattokala, PO Khas Tehlsil Bhalwal Sargodha, Pakistan</Typography>
                                   <Button variant="outlined" target="_blank" href='https://goo.gl/maps/Vayyej7BgeMe1smSA' color="primary" size='large' endIcon={<ArrowForwardIosIcon size="small" />} sx={{ my: 1, svg: { fontSize: "12px !important" } }}>
                                        View on Map
                                   </Button>
                              </Grid>
                         </Grid>
                    </Box>
               </Container >
          </ Box >
     )
}
