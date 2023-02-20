import React from 'react'
import { Divider, Container, Grid, Link,Box, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useTheme } from "@mui/material/styles";
const icons = [
     {
          href: "https://facebook.com/techgater",
          icon: <FacebookRoundedIcon fontSize="large" />
     },
     {
          href: "https://www.twitter.com/techgter",
          icon: <TwitterIcon fontSize="large" />
     },
     {
          href: "https://www.instagram.com/techgater",
          icon: <InstagramIcon fontSize="large" />
     },
     {
          href: "https://www.linkedin.com/company/techgater-web-solutions",
          icon: <LinkedInIcon fontSize="large" />
     },
     {
          href: "https://www.youtube.com/channel/UCBvrN6VxtnKNR7oQaYCt2eA",
          icon: <YouTubeIcon fontSize="large" />
     },
     {
          href: "https://www.pinterest.com/techgater/",
          icon: <PinterestIcon fontSize="large" />
     },
]
export default function FooterIcons() {
     const theme = useTheme();
     return (
          <>
               <Divider />
               <Container>
                    <Box sx={{mt:6,[theme.breakpoints.down("sm")]: { display: "none"}}}>
                    <Grid container justifyContent="center" textAlign="center" spacing={4}>
                         {icons.map((v) => (
                              <Grid  key={Math.random()} item lg={1} md={1} sm={1} xs={4}>
                              <Link href={v.href} underline="none" color="text.secondary" target="_blank"
                                   sx={{
                                        transition: "all 0.4s",
                                        svg: {
                                             fill: `${theme.palette.text.secondary}!important`,
                                             ":hover":{
                                                  fill: `${theme.palette.primary.main}!important`
                                             },
                                        }
                                   }}
                              >
                                   {v.icon}
                              </Link>
                              </Grid>
                         ))}
                    </Grid>
                    </Box>
                    <Typography variant="body1" textAlign="center" color="text.secondary" sx={{py:4}}>Copyright © 2022 Techgater. All rights reserved.</Typography>
               </Container>
          </>
     )
}
