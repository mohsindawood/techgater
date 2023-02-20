import PropTypes from "prop-types";

// material
import { useTheme, styled } from "@mui/material/styles";
import { Fab, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 20,
  height: 20,
};

const RootStyle = styled(Box)(({ theme }) => ({
  button: {
    margin: "0 4px",
  },
  padding: "8px 6px",
}));

// ----------------------------------------------------------------------

CarouselControlsArrowsIndex.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number,
  arrowLine: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default function CarouselControlsArrowsIndex({
  arrowLine,
  index,
  total,
  onNext,
  onPrevious,
  ...other
}) {
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";

  return (
    <RootStyle {...other}>
      <Fab size="small" onClick={onPrevious}>
        {isRTL ? <ArrowForwardIcon /> : <ArrowBackIcon />}
      </Fab>
      <Fab size="small" onClick={onNext}>
        {isRTL ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </Fab>
    </RootStyle>
  );
}
