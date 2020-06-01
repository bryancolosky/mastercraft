// ⚙️ Configs
import {
  INKS,
  ALIGN,
  WEIGHTS,
  LINE_HEIGHTS,
  SIZES
} from './config'

// 🛠 Utilities
export const getInkToken = ({ theme, ink }) => {
  const inkTokens = {
    [INKS.PRIMARY]: theme.main.colorTextPrimary,
    [INKS.SECONDARY]: theme.main.colorTextSecondary,
    [INKS.WHITE]: theme.main.colorTextWhite
  }
  return inkTokens[ink]
}

export const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.main.fontSizeSmall,
    [SIZES.NORMAL]: theme.main.fontSizeNormal,
    [SIZES.LARGE]: theme.main.fontSizeLarge
  }
  return sizeTokens[size]
}

export const getWeightToken = ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHTS.BOLD]: theme.main.fontWeightBold,
    [WEIGHTS.NORMAL]: theme.main.fontWeightNormal
  }
  return weightTokens[weight]
}

export const getTextAlignToken = ({ theme, align }) => {
  const alignTokens = {
    [ALIGN.LEFT]: theme.main.fontAlignLeft,
    [ALIGN.CENTER]: theme.main.fontAlignCenter,
    [ALIGN.RIGHT]: theme.main.fontAlignRight
  }
  return alignTokens[align]
}

export const getLineHeightToken = ({ theme, lineHeight }) => {
  const lineHeightTokens = {
    [LINE_HEIGHTS.NORMAL]: theme.main.lineHeightNormal,
    [LINE_HEIGHTS.TITLE]: theme.main.lineHeightTitle
  }
  return lineHeightTokens[lineHeight]
}
