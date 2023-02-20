import React from 'react'
import { Box, Container, Grid, Typography, TextField, Checkbox, Button } from '@mui/material'
import { useTheme, alpha } from "@mui/material/styles";
// hooks
import useSettings from "src/hooks/useSettings";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LockIcon from '@mui/icons-material/Lock';
// formik
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const validationSchema = Yup.object().shape({
     name: Yup.string().required("Enter your name"),
     phone: Yup.number().required("Enter your number"),
     subject: Yup.string().required("Enter your subject"),
     message: Yup.string().required("Enter your subject"),
     email: Yup.string().required("Enter your email").email("Enter a valid email"),
})

export default function Contact() {
     const theme = useTheme();
     const { themeMode, } = useSettings();
     const isLight = themeMode === "light";
     const formik = useFormik({
          initialValues: {
               name: '',
               phone: '',
               email: '',
               subject: '',
               message: ''
          },
          validationSchema,
          onSubmit: (values) => {
               console.log(values);
               navigate('/')
          }
     });
     const { errors, touched, handleSubmit, getFieldProps } = formik;
     return (
          <Box
               sx={{
                    py: 8,
                    background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.16)} 0%,${themeMode === "light" ? "rgba(240, 214, 255, 0.46)" : "rgba(0, 0, 0, 0.46)"} 100%)`,
               }}
          >
               <Container>
                    <Grid container spacing={3}>
                         <Grid item lg={6} md={6} sm={6} xs={12}>
                              <Box
                                   sx={{
                                        [theme.breakpoints.down("sm")]: { textAlign: "center", my: 2 },
                                   }}
                              >
                                   <Typography variant="body1" color="primary">
                                        CONTACT NOW
                                   </Typography>
                                   <Typography variant="h2" color="text.primary">Have Question? Write a Message</Typography>
                              </Box>
                              <FormikProvider value={formik}>
                                   <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                             <Grid item lg={6} md={6} sm={6} xs={12}>
                                                  <TextField
                                                       placeholder="name"
                                                       fullWidth
                                                       type='text'
                                                       variant="filled"
                                                       {...getFieldProps("name")}
                                                       error={Boolean(touched.name && errors.name)}
                                                       helperText={touched.name && errors.name}
                                                       sx={{ input: { py: 2 } }} />
                                             </Grid>
                                             <Grid item lg={6} md={6} sm={6} xs={12}>
                                                  <TextField
                                                       placeholder="Email Address"
                                                       fullWidth
                                                       type='email'
                                                       variant="filled"
                                                       {...getFieldProps("email")}
                                                       error={Boolean(touched.email && errors.email)}
                                                       helperText={touched.email && errors.email}
                                                       sx={{ input: { py: 2 } }} />
                                             </Grid>
                                             <Grid item lg={6} md={6} sm={6} xs={12}>
                                                  <TextField
                                                       placeholder="Contact Number"
                                                       fullWidth
                                                       type='tel'
                                                       variant="filled"
                                                       {...getFieldProps("phone")}
                                                       error={Boolean(touched.phone && errors.phone)}
                                                       helperText={touched.phone && errors.phone}
                                                       sx={{ input: { py: 2 } }} />
                                             </Grid>
                                             <Grid item lg={6} md={6} sm={6} xs={12}>
                                                  <TextField
                                                       placeholder="Subject"
                                                       fullWidth
                                                       type='text'
                                                       variant="filled"
                                                       {...getFieldProps("subject")}
                                                       error={Boolean(touched.subject && errors.subject)}
                                                       helperText={touched.subject && errors.subject}
                                                       sx={{ input: { py: 2 } }} />
                                             </Grid>
                                             <Grid item lg={12} md={12} sm={12} xs={12}>
                                                  <TextField multiline rows={4}
                                                       placeholder="Message"
                                                       fullWidth
                                                       type='text'
                                                       variant="filled"
                                                       {...getFieldProps("message")}
                                                       error={Boolean(touched.message && errors.message)}
                                                       helperText={touched.message && errors.message}
                                                  />
                                                  <Box sx={{ display: "flex", alignItems: "center" }}>
                                                       <Checkbox {...label} defaultChecked />
                                                       <Typography variant="body2" color="text.secondary">I agree to the Terms & Conditions of Business Name.</Typography>
                                                  </Box>
                                                  <Button variant="contained" type='submit' color="primary" size='large' fullWidth endIcon={<ArrowForwardIosIcon size="small" />} sx={{ my: 1, svg: { fontSize: "12px !important" } }}>
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
                                        </Grid>
                                   </Form>
                              </FormikProvider>
                         </Grid>
                         <Grid item lg={6} md={6} sm={6} xs={12}>
                              <Box sx={{
                                   [theme.breakpoints.down("sm")]: { display: "none" },
                              }}>
                                   <img src="/static/home/hellopic.png" alt="hellopic" />
                              </Box>
                         </Grid>
                    </Grid>
               </Container>
          </Box>
     )
}
