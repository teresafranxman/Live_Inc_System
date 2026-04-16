import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    hero: {
      main: string;
      display: string;
    }
  }
   
  interface ThemeOptions {
    hero?: {
      main?: string;
      display?: string;
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#673AB7",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
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
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#29b6f6",
      light: "#4fc3f7",
      dark: "#0288d1",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  hero: {
    main: "#1D1B20",
  },
  typography: {
    fontFamily: "Poppins, sans-serif, Arial, Helvetica",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
    h1: {
      fontSize: 70,
      fontWeight: 800,
    },
    h3: {
      fontSize: 28,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
});