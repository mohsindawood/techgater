// materials
import {
  Box,
  Grid,
  Link as RouterLink,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "src/utils/link";
//
import { useTheme, alpha } from "@mui/material/styles";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import AddLocationIcon from "@mui/icons-material/AddLocation";
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const contactData = [
  {
    icon: <EmailRoundedIcon />,
    name: "Email",
    paragraph: "info@techgater.com",
    href: "mailto:info@businessname.com",
  },
  {
    icon: <CallRoundedIcon />,
    name: "Phone",
    paragraph: "+92 303 5501602",
    href: "tel:+923035501602",
  },
  {
    icon: <AddLocationIcon />,
    name: "Address",
    paragraph: "Defence Chowk Walton Raod Lahore Cant, Pakistan",
    href: "tel:+923035501602",
  },
];

const companyData = [
  {
    href: "/about",
    name: "About Us",
  },
  {
    href: "/services",
    name: "Services",
  },
  {
    href: "/blogs/material-ui-week-day-picker",
    name: "Blog",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
];

export default function MainFooter() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ my: { lg: 8, md: 6, xs: 1 } }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Typography variant="h4" color="text.primary">
                Contact Us
              </Typography>
              {contactData.map((v) => (
                <List key={Math.random()}>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      svg: {
                        fill: `${theme.palette.text.secondary}!important`,
                        mr: 1,
                      },
                    }}
                  >
                    {v.icon}
                    <ListItemText>
                      <Typography variant="h6" color="text.secondary">
                        {v.name}
                      </Typography>
                      <RouterLink
                        component={Link}
                        href={v.href}
                        color="text.secondary"
                      >
                        {v.paragraph}
                      </RouterLink>
                    </ListItemText>
                  </ListItem>
                </List>
              ))}
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}>
                <Typography variant="h4" color="text.primary">
                  Company
                </Typography>
                {companyData.map((v) => (
                  <List key={Math.random()}>
                    <ListItem>
                      <ListItemText>
                        <RouterLink
                          component={Link}
                          href={v.href}
                          color="text.secondary"
                        >
                          {v.name}
                        </RouterLink>
                      </ListItemText>
                    </ListItem>
                  </List>
                ))}
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}>
                <Typography variant="h4" color="text.primary">
                  Support
                </Typography>
                <List>
                  <ListItem>
                    <RouterLink
                      component={Link}
                      href="/get-quote"
                      color="text.secondary"
                    >
                      Contact
                    </RouterLink>
                  </ListItem>
                  <ListItem>
                    {/* <RouterLink
                      component={Link}
                      href="https://techgater.com/policy"
                      color="text.secondary"
                    >
                      Privacy Policy
                    </RouterLink> */}
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
