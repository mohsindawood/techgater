import React from "react";

// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// material
import { styled, alpha } from "@mui/material/styles";
import { Box, AppBar, Toolbar, Container, NoSsr, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import { MHidden } from "../../components/@material-extend";
//
import MenuDesktop from "./MenuDesktop";
import navConfig from "./MenuConfig";
import Settings from "../../components/settings";
// ----------------------------------------------------------------------

const APP_BAR_DESKTOP = 64;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_DESKTOP,
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const theme = useTheme();
  const isOffset = useOffSetTop(100);
  const { pathname, push } = useRouter();
  const isHome = pathname === "/";
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar
      sx={{
        backdropFilter: open ? "none" : "blur(20px)",
        bgcolor: alpha(theme.palette.background.paper, 0.72),
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NextLink href="/">
            <Logo />
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />
          </MHidden>
          <MHidden width="mdDown">
            <Button
              variant="contained"
              onClick={() => push("/get-quote")}
              color="primary"
            >
              Get a Quate
            </Button>
            <NoSsr>
              <Settings setIsOpen={(v) => setOpen(v)} />
            </NoSsr>
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
