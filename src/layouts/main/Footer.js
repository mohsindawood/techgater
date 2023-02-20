import React from "react";
import { Grid, Box, Typography, Paper, InputBase, Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Icon from "src/utils/icon";
import MainFooter from "./MainFooter";
import FooterIcons from "./FooterIcons";
// formik
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Enter your email").email("Enter a valid email"),
})

export default function Footer() {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/')
    }
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <>
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          "::before": {
            content: `""`,
            background: ` url(/static/home/shape-2.png)`,
            position: "absolute",
            width: "250px",
            height: "250px",
            bottom: 0,
            zIndex: "-1",
            left: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: " left bottom",
            backgroundSize: "100%",
            opacity: 0.5,
          },
          "::after": {
            content: `""`,
            background: ` url(/static/home/shape-1.png)`,
            position: "absolute",
            width: "200px",
            height: "370px",
            top: { lg: "35%", md: "35%", xs: "40%" },
            zIndex: "-1",
            right: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: " center right",
            backgroundSize: "80%",
            opacity: 0.5,
          },
        }}
      >
        <Box
          sx={{
            py: 8,
            mb: { lg: 0, md: 0, sm: 0, xs: "-1.5px" },
            background: `linear-gradient(to bottom, ${alpha(
              theme.palette.primary.main,
              0.16
            )} 0%,${themeMode === "light"
              ? "rgba(240, 214, 255, 0.46)"
              : "rgba(0, 0, 0, 0.46)"
              } 100%)`,
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography variant="h3" color="text.primary">
                  Get The Latest News Daily!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  News letter dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Enter your email
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <FormikProvider value={formik}>
                  <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Paper
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Email Your Address"
                      inputProps={{ "aria-label": "email your address" }}
                      type='email'
                      {...getFieldProps("email")}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      endIcon={<ArrowForwardIosIcon />}
                      sx={{
                        svg: {
                          fontSize: "12px !important",
                          fill: `${theme.palette.primary.contrastText} `,
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </Paper>
                </Form>
              </FormikProvider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          svg: {
            fill: `${themeMode === "light"
              ? "rgba(240, 214, 255, 0.46)"
              : "rgba(0, 0, 0, 0.46)"
              }`,
          },
        }}
      >
        <Icon path="footer" />
      </Box>
      <MainFooter />
      <FooterIcons />
    </Box>
    </>
  );
}
