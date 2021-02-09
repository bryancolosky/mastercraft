import React from "react";

import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "../ThemeContext";

function Root({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Root;
