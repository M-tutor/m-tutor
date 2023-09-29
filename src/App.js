import React from "react";
import MainComponents from "./components/Texts&Buttons";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme1 = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2CD7F8",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff"
    },
    background: {
      paper: "#000000",
      default: "#070510"
    }
  },
  shape: {
    borderRadius: 4
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme1}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          <Grid item xs={12} sm={7} md={4}>
            <MainComponents />
          </Grid>

          <Grid
            item
            xs={false}
            sm={5}
            md={8}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random/900×700/?teaching)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
