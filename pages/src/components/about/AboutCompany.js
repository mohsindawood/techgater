import React from "react";
import Link from "src/utils/link";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link as RouterLink,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import useSettings from "src/hooks/useSettings";
import CircleIcon from "@mui/icons-material/Circle";

export default function AboutCompany() {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  return (
    <Box
      sx={{
        background: `url(/static/home/3.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: " center center",
        padding: "150px 0px 90px 0px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        zIndex: 0,
        "::before": {
          content: `''`,
          background: `linear-gradient(to left, ${alpha(
            theme.palette.primary.main,
            0.7
          )} 0%,${
            themeMode === "light"
              ? "rgba(240, 214, 255, 0.7)"
              : "rgba(0, 0, 0, 0.7)"
          } 100%)`,
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          opacity: 0.85,
          right: 0,
          left: 0,
          zIndex: -1,
        },
        "::after": {
          content: `''`,
          background: `url("/static/banner-shap-2.png")`,
          position: "absolute",
          backgroundPosition: "center right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          right: 0,
          top: 0,
          zIndex: -1,
        },
      }}
    >
      <Breadcrumbs
        separator={<CircleIcon />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          justifyContent: "center",
          svg: { fontSize: "8px", fill: theme.palette.text.primary },
        }}
      >
        <RouterLink
          component={Link}
          underline="none"
          color="text.primary"
          href="/"
        >
          Home
        </RouterLink>
        <RouterLink
          component={Link}
          underline="none"
          color="text.primary"
          href="/about"
        >
          About Us
        </RouterLink>
      </Breadcrumbs>
      <Typography variant="h3" color="text.primary">
        About Company
      </Typography>
    </Box>
  );
}
