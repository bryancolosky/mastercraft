// 🔌 Vendor
import React from 'react'
import { select } from '@storybook/addon-knobs'

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
  const skin = select('Skin', Object.values(SKIN), SKIN.STYLES)
  return (
    <Skin skin={skin} />
  )
}
