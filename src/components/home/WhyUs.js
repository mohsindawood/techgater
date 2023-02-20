import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { alpha } from "@mui/material/styles";
import {
  varFadeInRight,
  MotionInView,
  varFadeInLeft,
  varFadeInUp,
  varFadeInDown,
} from "src/components/animate";
const data = [
  {
    img: <LocalShippingIcon />,
    name: "Flat rate shipping",
    details: "PKR 110 On All Orders",
  },
  {
    img: <PermPhoneMsgIcon />,
    name: "support 24/7",
    details: "Contact us 24 Hours 7 Days A Week",
  },
  {
    img: <AddLocationIcon />,
    name: "Track your order",
    details: "Track Your Order For Quick Order",
  },
];
export default function WhyUs() {
  return (
    <Box my={5}>
      <Container>
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{
              textAlign: "center",
              span: {
                color: "primary.main",
              },
              textAlign: "center",
              my: { lg: 8, md: 8, sm: 4, xs: 4 },
            }}
          >
            Why Us <span>!</span>
          </Typography>
        </MotionInView>
        <Grid container spacing={3} justifyContent="center">
          {data.map((v, i) => (
            <Grid key={Math.random()} item lg={3} md={3} sm={6} xs={12}>
              <MotionInView
                variants={
                  i === 0
                    ? varFadeInLeft
                    : i === 1
                    ? varFadeInUp
                    : varFadeInRight
                }
              >
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        mx: "auto",
                        mb: 2,
                        color: "primary.main",
                        bgcolor: (theme) =>
                          alpha(theme.palette.primary.main, 0.16),
                      }}
                    >
                      {v.img}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.primary",
                        textTransform: "capitalize",
                      }}
                      component="div"
                    >
                      {v.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                      noWrap
                    >
                      {v.details}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
