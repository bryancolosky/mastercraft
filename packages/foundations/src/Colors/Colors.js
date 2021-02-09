export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";

export const COLORS = () => {
  return {
    text: {
      light: "hsl(0deg, 0%, 10%)",
      dark: "hsl(0deg, 0%, 100%)",
    },
    background: {
      light: "hsl(0deg, 0%, 100%)",
      dark: "hsl(250deg, 70%, 7%)",
    },
    primary: {
      light: "hsl(340deg, 100%, 40%)",
      dark: "hsl(50deg, 100%, 50%)",
    },
    secondary: {
      light: "hsl(250deg, 100%, 50%)",
      dark: "hsl(190deg, 100%, 40%)",
    },
    gray300: {
      light: "hsl(0deg, 0%, 70%)",
      dark: "hsl(0deg, 0%, 30%)",
    },
    gray500: {
      light: "hsl(0deg, 0%, 50%)",
      dark: "hsl(0deg, 0%, 50%)",
    },
    gray700: {
      light: "hsl(0deg, 0%, 30%)",
      dark: "hsl(0deg, 0%, 70%)",
    },
  };
};

export default COLORS;
