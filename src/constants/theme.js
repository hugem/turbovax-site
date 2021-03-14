import { createMuiTheme } from "@material-ui/core/styles";

export const THEME = createMuiTheme({
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
    listItem: {
      lineHeight: "5rem",
    },
  },
});
