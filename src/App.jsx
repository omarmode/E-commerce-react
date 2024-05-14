import Header1 from "./Components/header/Header1";
import Header2 from "./Components/header/Header2";
import Header3 from "./Components/header/Header3";
import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/hero/Hero";
import IconHero from "./Components/hero/IconHero";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import AgeCalculator from "./Components/AgeCalculator";
// import { Outlet } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Main />
        </Box>
        {/* <AgeCalculator /> */}
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
