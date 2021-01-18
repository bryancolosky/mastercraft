import React from "react"

import { ThemeProvider } from "@studiocraft/components"
import GlobalStyles from "./GlobalStyles"

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
