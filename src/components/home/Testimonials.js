import React from "react";
import { Container, Box, Typography, Grid, Stack, Avatar, Radio } from "@mui/material";
import Slider from "react-slick";
import { useTheme, alpha } from "@mui/material/styles";
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const theme = useTheme();
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Radio
            checked={currentIndex === i}
            value={i}
            name={`${i}`}
            inputProps={{ "aria-label": i }}
          />
        </a>
      )
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Box
      sx={{
        py: 12,
        background: {lg:`url(/static/home/shape-9.svg)`, sm:"none"},
        backgroundSize: "contain",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat !important",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box
              sx={{
                [theme.breakpoints.down("sm")]: { textAlign: "center" },
              }}
            >
            <Typography variant="body1" color="primary">CLIENTS TESTIMONIAL</Typography>
            <Typography
              variant="h2"
              color="text.primary"
            >
              What our clients say about our Company.
            </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              sx={{
                ul:{
                  bottom:"-36px !important"
                }
              }}
            >
              <Slider {...settings} >
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <Box key={Math.random()}>
                    <Typography variant="body1" color="text.secondary"
                    sx={{
                      [theme.breakpoints.down("sm")]: { textAlign: "center" },
                    }}
                    >Kamran was very responsive and helped me solve issues with my website functionality. He provided me updates, as well as supporting videos about my project to help solve any problems and make sure I was satisfied with the work he was doing. I would definitely hire again.</Typography>
                    <Stack mt={6} direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/home/client4.jpg"
                        sx={{ width: 86, height: 86 }}
                      />
                      <Box>
                        <Typography variant="h6" color="text.primary">Saathvee Hanbasg</Typography>
                        <Typography variant="body1" color="text.secondary">Fiverr Client</Typography>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
