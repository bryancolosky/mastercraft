import COLORS, {
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/Colors";

export { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP };

export const getColors = () => {
  return {
    COLORS,
  };
};

export const foundations = getColors();
