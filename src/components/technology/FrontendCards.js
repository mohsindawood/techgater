import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
const data = [
  {
    img: "/static/home/html5.png",
    name: "HTML5",
    paragraph:
      "HTML5 is a core technology markup language of Internet used for structuring & presenting content for the World Wide Web. HTML5 is a revision of Hypertext Markup Language.",
  },
  {
    img: "/static/home/css3.png",
    name: "Css3",
    paragraph:
      "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices.",
  },
  {
    img: "/static/home/javascript.png",
    name: "javascript",
    paragraph:
      "Javascript is a technique for creating fast and dynamic web pages. javascript allows web pages to be updated asynchronously by exchanging small amounts of data.",
  },
  {
    img: "/static/home/bootstrap.png",
    name: "Bootstrap version 4x",
    paragraph:
      "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. Bootstrap is completely free to download and use!",
  },
  {
    img: "/static/home/jquery.png",
    name: "JQuery version 3.4.1",
    paragraph:
      "jQuery is a fast, small, and feature-rich JavaScript library. event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.",
  },
  {
    img: "/static/home/Font_Awesome.png",
    name: "Font Awesome",
    paragraph:
      "Font Awesome is a full suite of pictographic icons for easy scalable vector graphics on websites, created and maintained by Dave Gandy. Stay up to date with the latest release.",
  },
  {
    img: "/static/home/Sass.png",
    name: "SASS",
    paragraph:
      "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
  },
  {
    img: "/static/home/tailwind.png",
    name: "Tailwind",
    paragraph:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    img: "/static/home/apex-charts.png",
    name: "Apex Charts",
    paragraph:
      "ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages.",
  },
  {
    img: "/static/home/chart.png",
    name: "Charts JS",
    paragraph:
      "Charts JS is simple yet flexible JavaScript charting for designers & developers.It's easy to get started with Chart.js. All that's required is the script included in your page",
  },
];

export default function FrontendCards() {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return (
    <>
      <Box
        sx={{
          py: { lg: 8, md: 6, xs: 2 },
          background: `url(/static/home/bg-line.svg)`,
          backgroundSize: "50px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          zIndex: 0,
          "::before": {
            content: `''`,
            background: `linear-gradient(to bottom, ${alpha(
              theme.palette.primary.main,
              0.16
            )} 0%,${
              themeMode === "light"
                ? "rgba(240, 214, 255, 0.46)"
                : "rgba(0, 0, 0, 0.46)"
            } 100%)`,
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            opacity: 1.5,
            right: 0,
            left: 0,
            zIndex: -1,
          },
        }}
      >
        <Container>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              mt: { md: 4, xs: 2 },
              fontWeight: 400,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            technologies
          </Typography>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ textAlign: "center", mb: { md: 5, xs: 2 } }}
          >
            Front End
          </Typography>
          <Grid container spacing={3}>
            {data.map((v) => (
              <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                <Paper
                  sx={{
                    height: "390px",
                    textAlign: "center",
                    p: "50px 20px",
                    border: `1px solid ${theme.palette.background.default}`,
                  }}
                >
                  <Box
                    sx={{
                      px: 10,
                      img: {
                        width: "100%",
                        height: "100px",
                        mx: "auto",
                        objectFit: "contain",
                      },
                    }}
                  >
                    <img src={v.img} alt="..." />
                  </Box>
                  <Typography my={2} variant="h4" color="text.primary">
                    {v.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {v.paragraph}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
