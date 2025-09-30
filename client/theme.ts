import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565c0",
      light: "#5e92f3",
      dark: "#003c8f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ef6c00",
      light: "#ff9d3f",
      dark: "#b53d00",
      contrastText: "#fff",
    },
    background: {
      default: "#f7f9fc",
      paper: "#ffffff",
    },
    success: { main: "#2e7d32" },
    warning: { main: "#ed6c02" },
    error: { main: "#d32f2f" },
    info: { main: "#0288d1" },
    divider: "#e2e8f0",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Inter',
      'system-ui',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(90deg, #0d47a1, #1565c0)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
      defaultProps: {
        elevation: 0,
        variant: "outlined",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
