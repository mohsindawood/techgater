import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// next
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
// hooks
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

const data = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/services",
    name: "Web Services",
  },
  {
    link: "/technology",
    name: "Technology",
  },
  {
    link: "/portfolio",
    name: "Portfolio",
  },
  {
    link: "/pricing",
    name: "Pricing",
  },
  {
    link: "/team",
    name: "Our Team",
  },
];
export default function TemporaryDrawer() {
  const theme = useTheme();
  const router = useRouter();
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 280,
        m: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ py: 0 }} key={Math.random()}>
        {data.map((v) => (
          <div key={Math.random()}>
            <ListItem
              onClick={() => router.push(v.link)}
              button
              sx={{
                fontWeight: 500,
                py: 2,
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
            >
              {v.name}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{ my: 3 }}
        fullWidth
        onClick={() => router.push("/get-quote")}
        color="primary"
      >
        Get a Quate
      </Button>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton color="primary" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                p: 1,
                button: {
                  float: "right",
                },
              }}
            >
              <IconButton onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
