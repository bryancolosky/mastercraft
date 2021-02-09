/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import { Root } from "@studiocraft/components"

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>
}
