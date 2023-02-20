import { Icon } from "@iconify/react";
import moonFill from "@iconify/icons-eva/moon-fill";
import sunFill from "@iconify/icons-eva/sun-fill";
// material
import {
  Box,
  Grid,
  Radio,
  Paper,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
  Button,
} from "@mui/material";
// hooks
import useSettings from "../../hooks/useSettings";

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onChangeMode } = useSettings();

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
      <Grid container spacing={1.5} dir="ltr">
        {["light", "dark"].map((mode, index) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                width: 1,
                zIndex: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <CardActionArea sx={{ color: "primary.main" }}>
                <Button
                  size="large"
                  fullWidth
                  variant="outlined"
                  color={mode === "light" ? "warning" : "info"}
                  disabled={themeMode === mode}
                  sx={{
                    display: "block",
                    height: 94,
                    "& .MuiButton-startIcon": {
                      mx: 0,
                    },
                  }}
                  startIcon={
                    <Icon
                      icon={index === 0 ? sunFill : moonFill}
                      width={24}
                      height={24}
                    />
                  }
                >
                  {mode}
                </Button>

                <FormControlLabel
                  label=""
                  value={mode}
                  control={<Radio sx={{ display: "none" }} />}
                  sx={{
                    top: 0,
                    margin: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
