import React from 'react';
import { Box, Container, Typography, Grid, Link, Button } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useSettings from "src/hooks/useSettings";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Icon from "src/utils/icon";
export default function CtaArea() {
     const theme = useTheme();
     const { themeMode } = useSettings();
     const isLight = themeMode === "light";
     return (
          <>
               <Box
                    sx={{
                         position: "relative",
                         overflow: "hidden",
                         py: {lg:8,md:6,xs:2},
                         textAlign: "center",
                         zIndex: 0,
                         background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.16)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
                    }}
               >
                    <Container>
                         <Typography variant="h6" color="primary" sx={{ mt: 4, fontWeight: 400, textTransform: "uppercase", textAlign: "center" }}>Let's work together</Typography>
                         <Typography variant="h2" color="text.primary" sx={{ textAlign: "center", mb:{lg:5,xs:2} }}>We Love to Listen to Your <br />Requirements</Typography>
                         <Button variant="outlined" color="primary" size='large' endIcon={<ArrowForwardIosIcon size="small" />} sx={{ my: 1, svg: { fontSize: "12px !important" } }}>
                              Estimate Project
                         </Button>
                         <Typography variant="h5" color="text.secondary"
                              sx={{
                                   display: "flex",
                                   alignItems: "center",
                                   fontWeight: 400,
                                   justifyContent: "center",
                                   py: 2,
                                   a: {
                                        display: "flex",
                                        alignItems: "center",
                                        svg: {
                                             fontSize: "30px",
                                             mx: 1,
                                        }
                                   }
                              }}
                         >Or call us now
                              <Link href="tel:+823035501602" color="text.secondary" underline="none"><LocalPhoneRoundedIcon />(+92) 303 5501602</Link>
                         </Typography>
                    </Container>
                    <Box
                         sx={{
                              position: "absolute",
                              bottom: '-20px',
                              left: 0,
                              zIndex: -1,
                         }}
                    >
                         <img src="static/icons/shape-3.svg" alt="..." />
                    </Box>
                    <Box
                         sx={{
                              position: "absolute",
                              bottom: '-30px',
                              right: 0,
                              zIndex: -1,
                         }}
                    >
                         <img src="static/icons/shape-4.svg" alt="..." />
                    </Box>
                    <Box
                         sx={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              zIndex: -1,
                         }}
                    >
                         <img src="static/icons/shape-13.svg" alt="..." />
                    </Box>
                    <Box
                         sx={{
                              position: "absolute",
                              top: "-150px",
                              right: "220px",
                              zIndex: -1,
                         }}
                    >
                         <img src="static/icons/shape-11.svg" alt="..." />
                    </Box>
               </Box>
          </>
     )
}
