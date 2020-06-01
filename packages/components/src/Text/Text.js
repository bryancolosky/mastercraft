// 🔌 Vendor
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// 🧰 Element
import { Skin } from '../Skin'

// ⚙️ Configs
import {
  INKS,
  ELEMENTS,
  ALIGN,
  WEIGHTS,
  LINE_HEIGHTS,
  SIZES
} from './config'

// 🛠 Utilities
import {
  getInkToken,
  getSizeToken,
  getWeightToken,
  getTextAlignToken,
  getLineHeightToken
} from './utils'

// 🦴 Skeleton
export const TextSkeleton = styled(({ element: Element, children, className, id }) => (
  <Element className={className} id={id}>
    {children}
  </Element>
))`
  font-family: ${({ theme }) => theme.main.fontFamily};
  font-size: ${getSizeToken};
  font-weight: ${getWeightToken};
  color: ${getInkToken};
  text-align: ${getTextAlignToken};
  line-height: ${getLineHeightToken};
`

TextSkeleton.propTypes = {
  children: PropTypes.node
}

TextSkeleton.defaultProps = {
  children: PropTypes.node
}

TextSkeleton.displayName = 'Text Skeleton'

// 🧰 Element
const Text = ({
  id,
  children,
  ink = INKS.PRIMARY,
  size = SIZES.NORMAL,
  align = ALIGN.LEFT,
  weight = WEIGHTS.NORMAL,
  lineHeight = LINE_HEIGHTS.NORMAL,
  element = ELEMENTS.P
}) => {
  return (
    <Skin>
      <TextSkeleton
        id={id}
        ink={ink}
        size={size}
        weight={weight}
        align={align}
        lineHeight={lineHeight}
        element={element}
      >
        {children}
      </TextSkeleton>
    </Skin>
  )
}

Text.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  ink: PropTypes.oneOf(Object.values(INKS)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  weight: PropTypes.oneOf(Object.values(WEIGHTS)),
  align: PropTypes.oneOf(Object.values(ALIGN)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHTS)),
  element: PropTypes.oneOf(Object.values(ELEMENTS))
}

Text.defaultProps = {
  id: PropTypes.string,
  children: PropTypes.node,
  ink: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  weight: PropTypes.object.isRequired,
  align: PropTypes.object.isRequired,
  lineHeight: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired
}

Text.displayName = 'Text'

export default Text
