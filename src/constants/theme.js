import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 880,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    body1: {
      fontWeight: 300,
      lineHeight: 1.6,
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      fontFamily: "'Merriweather', serif",
      letterSpacing: ".025rem",
      textRendering: "optimizeLegibility",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
      fontFamily: "'Merriweather', serif",
      letterSpacing: ".02rem",
      textRendering: "optimizeLegibility",
    },
  },
});

export const THEME = responsiveFontSizes(theme);
