import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import { Box, Grid, Stack, Typography, Container, Card } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
import Icon from "src/utils/icon";


export default function Statistics() {
     const theme = useTheme();
     const { themeMode } = useSettings();
     const isLight = themeMode === "light";
     const [focus, setFocus] = React.useState(false);
     const data = [
          {
               icon: "startup",
               value: "+",
               start: 0,
               item: 4,
               heading: "Year In Business",
               color: "#7635DC"

          },
          {
               icon: "team",
               start: 0,
               item: 11,
               heading: "Team Members",
               color: `${theme.palette.secondary.light}`

          },
          {
               icon: "deal",
               value: "+",
               start: 0,
               item: 110,
               heading: "Happy Clients",
               color: `${theme.palette.info.main}`

          },
          {
               icon: "computers",
               value: "+",
               start: 0,
               item: 150,
               heading: "Projects Done",
               color: `${theme.palette.success.main}`

          },
          {
               icon: "worker",
               value: "k+",
               start: 0,
               item: 4,
               heading: "Hours Worked",
               color: `${theme.palette.warning.main}`

          },
          {
               icon: "customer-service",
               value: '/7',
               start: 0,
               item: 24,
               heading: "Support Available",
               color: `${theme.palette.error.main}`

          },
     ]


     return (
          <Box
               sx={{
                    py: 10,
                    background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.26)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
               }}
          >
               <Container>
                    <Grid container spacing={3}>
                         {data.map((v) => (
                              <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                                   <Card
                                        sx={{
                                             p: 2,
                                             borderRadius:2,
                                             display: "flex",
                                             alignItems: "center",

                                        }}
                                   >
                                        <Stack direction="row" spacing={5}>
                                             <Box sx={{
                                                  p: 2,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  background: `${alpha(v.color, 0.16)}`,
                                                  borderRadius: "8px 40px 8px 40px",
                                                  border: ` 1px solid ${v.color}`,
                                                  svg: {
                                                       width: "50px",
                                                       height: "50px",
                                                       fill: `${v.color}`,
                                                  }
                                             }}>
                                                  <Icon path={v.icon} />
                                             </Box>
                                             <Box>
                                                  <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                                                       {({ isVisible }) => (
                                                            <Typography variant="h2" color="text.primary" sx={{ height: 50 }}>
                                                                 {isVisible ? <CountUp end={v.item} /> : null}
                                                                 {v.value}
                                                            </Typography>
                                                       )}
                                                  </VisibilitySensor>
                                                  <Typography variant="h5" sx={{ fontWeight: 500 }} color="text.secondary">{v.heading}</Typography>
                                             </Box>
                                        </Stack>
                                   </Card>
                              </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box>
     )
}
