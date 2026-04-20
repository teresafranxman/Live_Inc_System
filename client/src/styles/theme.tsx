import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: deepPurple["A200"],
    },
    text: {
      primary: "#4A4459",
      secondary: "#625B71",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#4A4459",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "#4A4459",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#4A4459",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif, Arial, Helvetica",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
    h1: {
      fontSize: 68,
      fontWeight: 600,
    },
    h2: {
      fontSize: 36,
      fontWeight: 500,
    },
    h3: {
      fontSize: 28,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      color: "#625B71",
    },
    body2: {
      fontSize: 12,
    },
  },
});