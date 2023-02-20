import PropTypes from "prop-types";
import { paramCase } from "change-case";
import Link from "next/link";
// material
import { Box, Card, Typography, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

//
import Label from "src/components/Label";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

export default function CategoriesCard({ index }) {
  const linkTo = `/product`;

  return (
    <Card sx={{ mb: 2 }}>
      <Box sx={{ pt: "100%", position: "relative" }}>
        <ProductImgStyle
          alt="category"
          src={`/static/mock-images/products/product_${index + 1}.png`}
        />
        <Label
          variant="filled"
          color={("sale" === "sale" && "error") || "info"}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: "absolute",
            textTransform: "uppercase",
          }}
        >
          Sale
        </Label>
      </Box>

      <Stack spacing={0.5} sx={{ p: { lg: 2, md: 2, sm: 1, xs: 1 } }}>
        <Link href={linkTo}>
          <Typography variant="h6" noWrap textAlign="center">
            Title
          </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
