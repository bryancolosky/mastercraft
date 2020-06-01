import { mode } from '../Themes'

export const getTokens = () => {
  const theme = mode

  return {
    // ==========
    // 🖋 Typographic Tokens
    // ==========
    fontFamily: theme.base.fontFamily,
    // Size
    fontSizeSmall: theme.base.textSizeSmall,
    fontSizeNormal: theme.base.textSizeNormal,
    fontSizeLarge: theme.base.textSizeLarge,
    // Weight
    fontWeightNormal: theme.base.textWeightNormal,
    fontWeightBold: theme.base.textWeightBold,
    // Align
    fontAlignLeft: theme.base.textAlignLeft,
    fontAlignRight: theme.base.textAlignRight,
    fontAlignCenter: theme.base.textAlignCenter,
    // Line Heights
    lineHeightNormal: theme.base.leadingNormal,
    lineHeightTitle: theme.base.leadingTight,
    // ==========
    // 🎨 Color Tokens
    // ==========
    colorTextPrimary: theme.palette.ink.primary,
    colorTextSecondary: theme.palette.ink.secondary,
    colorTextWhite: theme.palette.ink.white
  }
}

export const tokens = getTokens()
