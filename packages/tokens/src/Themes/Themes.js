import { color } from '../Colors'
import { fontFamily, fontSize, fontWeight, textAlign, lineHeight } from '../Typography'

const palette = {
  ink: {
    primary: color('black'),
    secondary: color('gray'),
    white: color('white')
  }
}

const base = {
  fontFamily: fontFamily('system'),
  textSizeSmall: fontSize('small'),
  textSizeNormal: fontSize('medium'),
  textSizeLarge: fontSize('large'),
  textWeightNormal: fontWeight('normal'),
  textWeightBold: fontWeight('bold'),
  textAlignCenter: textAlign('center'),
  textAlignLeft: textAlign('left'),
  textAlignRight: textAlign('right'),
  leadingNormal: lineHeight('normal')
}

export const mode = { palette, base }
