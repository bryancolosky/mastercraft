// 🔌 Vendor
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

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
    ${getStyles};
  }
`

Stylesheet.propTypes = {
  theme: PropTypes.object
}

Stylesheet.defaultProps = {
  theme: Tokens
}

Stylesheet.displayName = 'Stylesheet'

// 🧰 Element
const Skin = ({
  id,
  children,
  skin = SKIN.STYLES
}) => {
  return (
    <Fragment>
      <Stylesheet />
      <ThemeProvider skin={skin} theme={{ main: tokens }}>
        {children}
      </ThemeProvider>
    </Fragment>
  )
}

Skin.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  skin: PropTypes.oneOf(Object.values(SKIN))
}

Skin.defaultProps = {
  id: PropTypes.string,
  children: PropTypes.node,
  skin: PropTypes.object.isRequired
}

Skin.displayName = 'Skin'

export default Skin
