import React from "react";
import MainComponents from "./texts&buttons";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./signup_screen.css";
import BackgroundImage from "../../components/background_image";
import theme1 from "../../components/customised_theme";


function SignUp() {
  return (
    <>
      <ThemeProvider theme={theme1}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          <Grid item xs={12} sm={7} md={5}>
            <MainComponents />
          </Grid>

          <Grid item xs={false} sm={5} md={7}>
            <BackgroundImage />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default SignUp;
