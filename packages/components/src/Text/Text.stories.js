// 🔌 Vendor
import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'

// ⚙️ Configs
import {
  INKS,
  ELEMENTS,
  ALIGN,
  WEIGHTS,
  LINE_HEIGHTS,
  SIZES
} from './config'

// 🧰 Element
import { Text } from './index'

// 📖 Storybook
export default {
  title: 'Typography',
  component: Text
}

// 📖 Story
export const NormalText = () => {
  const id = text('ID', Text.displayName)
  const loremIpsum = text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  const ink = select('Ink', Object.values(INKS), INKS.PRIMARY)
  const size = select('Size', Object.values(SIZES), SIZES.NORMAL)
  const weight = select('Weight', Object.values(WEIGHTS), WEIGHTS.NORMAL)
  const align = select('Alignment', Object.values(ALIGN), ALIGN.LEFT)
  const lineHeight = select('Line Height', Object.values(LINE_HEIGHTS), LINE_HEIGHTS.NORMAL)
  const element = select('Element', Object.values(ELEMENTS), ELEMENTS.P)
  return (
    <Text
      id={id}
      ink={ink}
      size={size}
      weight={weight}
      align={align}
      lineHeight={lineHeight}
      element={element}
    >
      {loremIpsum}
    </Text>
  )
}
