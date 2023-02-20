import React from 'react'
import { Box, Container, Grid, Typography, TextField, Checkbox, Button, Card, Link, Stack } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
// hooks
import useSettings from "src/hooks/useSettings";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LockIcon from '@mui/icons-material/Lock';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const inputData = [
     {
          name: "Name",
          type: "text",
     },
     {
          name: "Email Address",
          type: "text",
     },
     {
          name: "Contact Number",
          type: "number",
     },
     {
          name: "Subject",
          type: "text",
     },
]

export default function Contact() {
     const theme = useTheme();
     const { themeMode, } = useSettings();
     const isLight = themeMode === "light";
     return (
          <Box
               sx={{
                    py: 8,
                    background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.16)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
               }}
          >
               <Container>
                    <Grid container alignItems="center" spacing={3}>
                         <Grid item lg={7} md={7} sm={6} xs={12}>
                              <Typography variant="body1" color="primary">
                                   CONTACT NOW
                              </Typography>
                              <Typography variant="h2" color="text.primary">Have Question? Write a Message</Typography>
                              <Grid container spacing={3}>
                                   {inputData.map((v) => (
                                        <Grid key={Math.random()} item lg={6} md={6} sm={6} xs={12}>
                                             <TextField id="filled-basic" type={v.type} placeholder={v.name} fullWidth variant="filled" sx={{ input: { py: 2 } }} />
                                        </Grid>
                                   ))}
                              </Grid>
                              <TextField id="filled-basic" multiline rows={4} placeholder="Message" fullWidth variant="filled" sx={{ mt: 3, }} />
                              <Box sx={{ display: "flex", alignItems: "center" }}>
                                   <Checkbox {...label} defaultChecked />
                                   <Typography variant="body2" color="text.secondary">I agree to the Terms & Conditions of Business Name.</Typography>
                              </Box>
                              <Button variant="contained" color="primary" size='large' fullWidth endIcon={<ArrowForwardIosIcon size="small" />} sx={{ my: 1, svg: { fontSize: "12px !important" } }}>
                                   submit
                              </Button>
                              <Typography variant="body2" color="text.secondary"
                                   sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        svg: {
                                             mr: 1,
                                             fontSize: "14px"
                                        }
                                   }}
                              ><LockIcon />We hate spam, and we respect your privacy.</Typography>
                         </Grid>
                         <Grid item lg={5} md={5} sm={6} xs={12}>
                              <Card sx={{ p: 3, borderRadius: 2, mt: 4, background: `${alpha(theme.palette.warning.main, 0.16)}`, border: ` 1px solid ${theme.palette.warning.main}` }}>
                                   <Stack spacing={1}>
                                        <Typography variant="h5" color="text.primary" sx={{ display: "flex", alignItems: "center" }}><WhatsAppIcon />Whatsapp:</Typography>
                                        <Link href="https://wa.me/923006634785" underline="none" target="_blank" variant='h5' fontWeight={500} color="text.primary">(+92) 300 6634785</Link>
                                        <Link href="https://wa.me/923035501602" underline="none" target="_blank" variant='h5' fontWeight={500} color="text.primary">(+92) 303 5501602</Link>
                                   </Stack>
                              </Card>
                              <Card sx={{ p: 3, borderRadius: 2, my: 3, background: `${alpha(theme.palette.error.main, 0.16)}`, border: ` 1px solid ${theme.palette.error.main}` }}>
                                   <Stack spacing={1}>
                                        <Typography variant="h5" color="text.primary" sx={{ display: "flex", alignItems: "center" }}><EmailRoundedIcon />Email:</Typography>
                                        <Link href="mailto:info@techgater.com" underline="none" target="_blank" variant='h5' fontWeight={500} color="text.primary">info@techgater.com</Link>
                                   </Stack>
                              </Card>
                              <Card sx={{ p: 3, borderRadius: 2, my: 3, background: `${alpha(theme.palette.info.main, 0.16)}`, border: ` 1px solid ${theme.palette.info.main}` }}>
                                   <Stack spacing={1}>
                                        <Typography variant="h5" color="text.primary" sx={{ display: "flex", alignItems: "center" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59z" fill="currentColor" /></svg>
                                             Skype:</Typography>
                                        <Typography variant="body1" color="text.primary">We Are Online: Monday – Friday, 9 am to 5 pm</Typography>
                                        <Link href="skype:live:kamranansari5580_1?chat" underline="none" target="_blank" variant='h5' fontWeight={500} color="text.primary">Kamran Haider</Link>
                                   </Stack>
                              </Card>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}
