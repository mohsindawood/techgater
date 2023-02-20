import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

const dataCreativeWork = [
  {
    img: "/static/home/naveed-ahmed-founder-techgater.png",
    link: "#",
    name: "Naveed Ahmed",
    paragraph: "Founder of Techgater",
  },
  {
    img: "/static/home/kamran-haider-ceo-techgater.png",
    link: "#",
    name: "Kamran Haider",
    paragraph: "CEO & Mern Stack Developer",
  },
 
  {
    img: "/static/home/mohsin-dawood.png",
    link: "#",
    name: "Mohsin Dawood",
    paragraph: "Web App Developer",
  },
  {
    img: "/static/home/husnain.jpg",
    link: "#",
    name: "Husnain Akhtar",
    paragraph: "Nodejs Developer",
  },
  {
    img: "/static/home/qadir.jpg",
    link: "#",
    name: "Abdul Qadir",
    paragraph: "Reactjs Developer",
  },
  {
    img: "/static/home/sanaver.jpg",
    link: "#",
    name: "Sanaver Shahzad",
    paragraph: "Reactjs Developer",
  },
  {
    img: "/static/home/asim.jpg",
    link: "#",
    name: "Asim Ameer",
    paragraph: "Reactjs Developer",
  },
  {
    img: "/static/home/abbas.jpg",
    link: "#",
    name: "Ghulam Abbas",
    paragraph: "Front-end Developer",
  },
  {
    img: "/static/home/amir.jpg",
    link: "#",
    name: "Amir Sultan",
    paragraph: "Front-end Developer",
  },
  {
    img: "/static/home/afzaal.jpg",
    link: "#",
    name: "Muhammad Afzaal",
    paragraph: "Graphic Designer ",
  },
  {
    img: "/static/home/asim-shahzad.png",
    link: "#",
    name: "Asim Shahzad",
    paragraph: "Front-end Developer",
  },
];
export default function OurTeam() {
  return (
    <Box
      sx={{
        my: { lg: 8, md: 6, xs: 2 },
      }}
    >
      <Container>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            mt: 4,
            fontWeight: 400,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          WE ARE AWESOME
        </Typography>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ mb: { md: 5, xs: 2 }, textAlign: "center" }}
        >
          Our Team Members
        </Typography>
        <Grid container justifyContent="center" spacing={3}>
          {dataCreativeWork.map((v) => (
            <Grid key={Math.random()} item lg={3} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  my: { md: 2, xs: 1 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    img: {
                      objectFit: "cover",
                      transition: `all 0.8s`,
                      ":hover": {
                        transform: `scale(1.1)`,
                      },
                    },
                  }}
                >
                  <Link href={v.link} target="_blank">
                    <img
                      src={v.img}
                      alt={v.name + "techgater " + v.paragraph}
                      width="100%"
                      height="270px"
                    />
                  </Link>
                </Box>
                <Typography variant="h4" color="text.primary" sx={{ my: 2 }}>
                  {v.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ my: 2 }}
                >
                  {v.paragraph}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
