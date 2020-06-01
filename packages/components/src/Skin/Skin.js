// 🔌 Vendor
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

// ⚙️ Configs
import {
  SKIN
} from './config'

// 🛠 Utilities
import {
  getStyles
} from './utils'

// 🖍  Tokens
import tokens from '../../../../packages/tokens/src'

export const Tokens = {
  main: tokens
}

// 🦴 Skeleton
export const Stylesheet = createGlobalStyle`
  :root {
    --color-text-primary: ${({ theme }) => theme.main.colorTextPrimary};
  }
`

Stylesheet.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node
}

Stylesheet.defaultProps = {
  theme: Tokens
}

Stylesheet.displayName = 'Stylesheet'

// 🧰 Element
const Skin = ({
  children
}) => {
  return (
    <Fragment>
      <Stylesheet />
      <ThemeProvider theme={{ main: tokens }}>
        {children}
      </ThemeProvider>
    </Fragment>
  )
}

Skin.propTypes = {
  children: PropTypes.node
}

Skin.defaultProps = {
  children: PropTypes.node
}

Skin.displayName = 'Skin'

export default Skin
