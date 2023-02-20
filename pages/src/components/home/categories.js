import React from "react";
import Typography from "@mui/material/Typography";
import CategoriesCard from "./categoriesCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
} from "src/components/animate";

export default function Categories() {
  return (
    <div>
      <MotionInView variants={varFadeInDown}>
        <Typography
          my={8}
          variant="h2"
          color="text.primary"
          sx={{ textAlign: "center", my: { lg: 8, md: 8, sm: 4, xs: 4 } }}
        >
          Categories
        </Typography>
      </MotionInView>
      <Container>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => (
            <Grid item lg={3} md={3} sm={4} xs={6} key={Math.random()}>
              <MotionInView variants={i > 3 ? varFadeInUp : varFadeInDown}>
                <CategoriesCard index={i} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
