import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9a9a9a",
      main: "#1e1e1e",
      dark: "#1e1e1e",
    },
    secondary: {
      light: "#d9ff9b",
      main: "#93ee00",
      dark: "#548900",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
