import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          mycolor: {
            main: "#F6F9F0",
          },
          bg: {
            main: "#E4E4E4",
          },
          text: {
            primary: "rgba(0,0,0,0.87)",
          },
          neutral: {
            main: "#64748B",
          },
          omar: {
            omar: "#90CAF9",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          mycolor: {
            main: "#252b32",
          },
          neutral: {
            main: "#64748B",
          },
          bg: {
            main: "#1d2021",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          omar: {
            omar: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
