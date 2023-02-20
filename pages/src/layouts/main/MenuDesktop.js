import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import arrowIosUpwardFill from "@iconify/icons-eva/arrow-ios-upward-fill";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";
// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
} from "@mui/material";

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(["subheader", "item"]),
};

function IconBullet({ type = "item" }) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

function MenuDesktopItem({
  item,
  pathname,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}) {
  const { title, path, children } = item;
  const isActive = pathname === path;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ...(isHome && { color: "common.primary" }),
            ...(isOffset && { color: "text.primary" }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 66, left: 0 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              py: 1,
              right: 16,
              margin: "auto",
              maxWidth: 180,
              borderRadius: 1,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map((list) => {
              const { subheader, items } = list;

              return (
                <Grid
                key={Math.random()}
                  item
                  lg={12}
                  xs={12}
                  md={12}
                >
                  <List disablePadding>
                    {items.map((item) => (
                      <NextLink  key={Math.random()} href={item.path}>
                        <ListItemStyle
                          sx={{
                            mt:0,
                            ...(item.path === pathname && {
                              typography: "subtitle2",
                              color: "common.primary",
                            }),
                          }}
                        >
                          {item.title === "Dashboard" ? (
                            <CardActionArea
                              sx={{
                                py: 5,
                                px: 10,
                                borderRadius: 2,
                                color: "primary.main",
                                bgcolor: "background.neutral",
                              }}
                            >
                              <Box
                                component={motion.img}
                                whileTap="tap"
                                whileHover="hover"
                                variants={{
                                  hover: { scale: 1.02 },
                                  tap: { scale: 0.98 },
                                }}
                                src="/static/illustrations/illustration_dashboard.png"
                              />
                            </CardActionArea>
                          ) : (
                            <>

                              <ListSubheader
                                disableSticky
                                disableGutters
                                sx={{
                                  display: "flex",
                                  py:1,
                                  alignItems: "center",
                                  color: "text.primary",
                                  typography: "overline",
                                  textTransform:"capitalize",
                                  cursor:"pointer",
                                }}
                              >
                                 {item.title}
                              </ListSubheader>
                            </>
                          )}
                        </ListItemStyle>
                      </NextLink>
                    ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  }

  return (
    <NextLink  key={Math.random()} href={path} passHref>
      <LinkStyle
        sx={{
          ...(isHome && { color: "text.primary" }),
          ...(isOffset && { color: "text.primary" }),
          ...(isActive && { color: "primary.main" }),
          textDecoration: "none",
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}

MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={Math.random()}
          item={link}
          pathname={pathname}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}
