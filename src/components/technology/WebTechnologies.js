import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
const data = [
  {
    img: "/static/home/react.png",
    name: "React JS",
    paragraph:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  },
  {
    img: "/static/home/next-js.png",
    name: "Next JS",
    paragraph:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid /static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
  },
  {
    img: "/static/home/redux.png",
    name: "Redux",
    paragraph:
      "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
  },
  {
    img: "/static/home/react-query.png",
    name: "React Query",
    paragraph:
      "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API.",
  },
  {
    img: "/static/home/javascript.png",
    name: "javascript",
    paragraph:
      "Javascript is a technique for creating fast and dynamic web pages. javascript allows web pages to be updated asynchronously by exchanging small amounts of data.",
  },
  {
    img: "/static/home/apex-charts.png",
    name: "Apex Charts",
    paragraph:
      "ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages.",
  },
  {
    img: "/static/home/material-ui.png",
    name: "Matrial-Ui",
    paragraph:
      "React components for faster and easier web development. Build your own design system, or start with Material Design.",
  },
  {
    img: "/static/home/react-bootstrap.png",
    name: "React Bootstrap",
    paragraph:
      "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built without unneeded dependencies like jQuery.",
  },
  {
    img: "/static/home/mongodb.png",
    name: "MongoDB",
    paragraph:
      "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built without unneeded dependencies like jQuery.",
  },
  {
    img: "/static/home/mongoose.png",
    name: "Mongoose",
    paragraph:
      "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built without unneeded dependencies like jQuery.",
  },
];

export default function WebTechnologies() {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return (
    <>
      <Box
        sx={{
          py: { lg: 8, md: 6, xs: 2 },
          position: "relative",
          overflow: "hidden",
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
            Web Applications
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
