import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    fontFamily: ["Varela Round", "roboto"].join(",")
  },
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
