import React, { useState, useRef, useEffect } from "react";
// material
import { useTheme, alpha } from "@mui/material/styles";
import {
  Container,
  Paper,
  Button,
  Box,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";
// hooks
import { useRouter } from "next/router";
import useSettings from "src/hooks/useSettings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// utils

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};

export default function CarouselAnimation() {
  const theme = useTheme();
  const { push } = useRouter();
  const { themeMode } = useSettings();
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <Paper
      sx={{
        py: 8,
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(to bottom, ${alpha(
          theme.palette.primary.main,
          0.16
        )} 0%,${
          themeMode === "light"
            ? "rgba(240, 214, 255, 0.46)"
            : "rgba(0, 0, 0, 0.46)"
        } 100%)`,
        zIndex: 0,
        "::before": {
          content: '""',
          background: 'url("/static/banner-shap-2.png")',
          position: "absolute",
          height: "100vh",
          right: 0,
          left: 0,
          top: 0,
          width: "100%",
          backgroundPosition: " left 0",
          backgroundSize: "contain",
          zIndex: -1,
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Grid item lg={6} md={6}>
            <Box
              sx={{
                [theme.breakpoints.down("md")]: { textAlign: "center", mt: 3 },
              }}
            >
              <Typography variant="h1" color="text.primary">
                Creative Web Development Company
              </Typography>
              <Typography
                sx={{ my: 3 }}
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Techgater is Sargodha, Pakistan based software company. our aim is
                to provide best solution for every business and individual to
                empower the online world.
              </Typography>
              <Box>
                <Button
                  size="large"
                  onClick={() => push("/portfolio")}
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon size="small" />}
                  sx={{ svg: { fontSize: "15px !important" } }}
                >
                  View showcase
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            {
              <Box
                sx={{
                  height: 0,
                  width: "100%",
                  pb: "100%",
                }}
              >
                <img
                  src="/static/home/web.png"
                  alt="web-png"
                  ref={ref}
                  onLoad={onLoad}
                />
              </Box>
            }
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
