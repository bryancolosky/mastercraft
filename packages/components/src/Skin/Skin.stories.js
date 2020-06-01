// 🔌 Vendor
import React from 'react'
import { text } from '@storybook/addon-knobs'

// ⚙️ Configs
import {
  SKIN
} from './config'

// 🧰 Element
import { Skin } from './index'

// 📖 Storybook
export default {
  title: 'Skin',
  component: Skin
}

export const Skins = () => {
  const loremIpsum = text('Stylesheet')
  return (
    <Skin />
  )
}
