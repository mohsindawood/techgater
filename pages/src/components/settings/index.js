import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import closeFill from "@iconify/icons-eva/close-fill";
import { useTheme } from "@mui/material/styles";
// material
import {
  Box,
  Backdrop,
  Paper,
  Tooltip,
  Divider,
  Typography,
  Stack,
  Fab,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
//
import Scrollbar from "../Scrollbar";
import { MIconButton } from "../@material-extend";
import SettingMode from "./SettingMode";
import SettingColor from "./SettingColor";
import SettingFullscreen from "./SettingFullscreen";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 300;

export default function Settings({setIsOpen}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
   setIsOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
   setIsOpen(false);
  };


  return (
    <>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      />
      <Tooltip title="Settings">
        <Fab
          onClick={handleToggle}
          color="primary"
          size="small"
          aria-label="language"
          sx={{
            ml: { lg: 2, md: 2 },
          }}
        >
          <SettingsIcon />
        </Fab>
      </Tooltip>

      <Box
        sx={{
          top: 12,
          bottom: 12,
          right: 0,
          position: "fixed",
          zIndex: 2001,
          ...(open && { right: 12 }),
        }}
      >
        <Paper
          sx={{
            height: 1,
            width: "0px",
            overflow: "hidden",
            boxShadow: (theme) => theme.customShadows.z24,
            transition: (theme) => theme.transitions.create("width"),
            ...(open && { width: DRAWER_WIDTH }),
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 2, pr: 1, pl: 2.5 }}
          >
            <Typography variant="subtitle1">Settings</Typography>
            <MIconButton onClick={handleClose}>
              <Icon icon={closeFill} width={20} height={20} />
            </MIconButton>
          </Stack>
          <Divider />

          <Scrollbar sx={{ height: 1 }}>
            <Stack spacing={4} sx={{ pt: 3, px: 3, pb: 15 }}>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2">Mode</Typography>
                <SettingMode />
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="subtitle2">Color</Typography>
                <SettingColor />
              </Stack>

              {/* <Stack spacing={1.5}>
                <Typography variant="subtitle2">Stretch</Typography>
                <SettingStretch />
              </Stack> */}

              <SettingFullscreen />
            </Stack>
          </Scrollbar>
        </Paper>
      </Box>
    </>
  );
}
