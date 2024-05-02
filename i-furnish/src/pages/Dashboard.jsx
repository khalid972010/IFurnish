import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Chart from "../components/Chart";
import Deposits from "../components/Deposits";
import Orders from "../components/Orders";
import Products from "../components/Products";
import Customers from "../components/Customers";
import { Box } from "@mui/material";
import { blueGrey, grey, teal } from "@mui/material/colors";

function LogoutButton() {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="logout"
      onClick={handleLogout}>
      <ExitToAppIcon />
    </IconButton>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link to="/">iFurnish</Link> 2024.
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "#24d278",
}));

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: teal,
    secondary: blueGrey,
    background: {
      default: grey[100],
    },
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px",
          }}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}>
            IFurnish - Admin
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
        <Grid container spacing={3} style={{ fontFamily: "Poppins" }}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
          {/* Products */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Products />
            </Paper>
          </Grid>
          {/* Customers */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Customers />
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ pt: 4 }}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
