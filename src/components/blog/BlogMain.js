import React from "react";
import Highlighter from "../Highlighter";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Card,
  Button,
  Snackbar,
  Alert,
  Tooltip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function BlogDescription({
  code,
  Component,
  heading,
  decription,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(code);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <Box sx={{ pt: 4 }}>
          <Typography variant="h4" color="text.primary">
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {decription}
          </Typography>
        </Box>
        <Card
          sx={{
            borderRadius: 4,
            p: 4,
          }}
        >
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="text.primary" pb={2}>
                Preview
              </Typography>
              <Card sx={{ p: 2, mb: 4 }}>
                <Component />
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box textAlign="right">
                <Tooltip title="Copy">
                  <IconButton
                    onClick={handleClick}
                    variant="contained"
                    sx={{ mb: 1, ml: "auto" }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Paper
                sx={{
                  position: "relative",
                  overflow: "auto",
                  height: "500px",
                  pre: {
                    fontSize: "14px",
                    // background: `${theme.palette.background.paper} !important`,
                  },
                }}
              >
                <Highlighter code={code} />
              </Paper>
            </Grid>
          </Grid>
        </Card>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          color="success"
          action={action}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Code copied to clipboard!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
