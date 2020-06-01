import Unit from '../Dimensions'

export const fonts = {
  system: 'system-ui, "apple-system", "BlinkMacSystemFont", sans-serif'
}

export function fontFamily (name) {
  if (!fonts[name]) {
    throw new Error(
      `Unable to find font:\`${name}\`. Expected one of: ` +
      `[${Object.keys(fonts).join(', ')}]`
    )
  }
  return `${fonts[name]}`
}

export const fontSizes = {
  small: Unit.px(10),
  medium: Unit.px(16),
  large: Unit.px(24)
}

export function fontSize (name) {
  if (!fontSizes[name]) {
    throw new Error(
      `Unable to find size:\`${name}\`. Expected one of: ` +
      `[${Object.keys(fontSizes).join(', ')}]`
    )
  }
  return `${fontSizes[name]}`
}

export const fontWeights = {
  normal: 400,
  bold: 700
}

export function fontWeight (name) {
  if (!fontWeights[name]) {
    throw new Error(
      `Unable to find size:\`${name}\`. Expected one of: ` +
      `[${Object.keys(fontWeights).join(', ')}]`
    )
  }
  return `${fontWeights[name]}`
}

export const textAligns = {
  left: 'left',
  right: 'right',
  center: 'center'
}

export function textAlign (name) {
  if (!textAligns[name]) {
    throw new Error(
      `Unable to alignment:\`${name}\`. Expected one of: ` +
      `[${Object.keys(textAligns).join(', ')}]`
    )
  }
  return `${textAligns[name]}`
}

export const lineHeights = {
  normal: 1.7,
  title: 1.1
}

export function lineHeight (name) {
  if (!lineHeights[name]) {
    throw new Error(
      `Unable to line heights:\`${name}\`. Expected one of: ` +
      `[${Object.keys(lineHeights).join(', ')}]`
    )
  }
  return `${lineHeights[name]}`
}
