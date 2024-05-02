import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5D956F",
      contrastText: "#ffffff",
      light: "#1DF0D7",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    background: {
      default: "#151518",
    },
    divider: "rgba(255, 255, 255, 0.15)",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c3d1ae",
      contrastText: "#000000",
      light: "#1ABBA8",
    },
    secondary: {
      main: "#151518",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    divider: "#C3D1AE",
  },
});
