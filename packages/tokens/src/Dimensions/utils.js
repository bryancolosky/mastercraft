export const baseValue = 16

export function rem (value) {
  return `${value / baseValue}rem`
}

export function em (value) {
  return `${value / baseValue}em`
}

export function px (value) {
  return `${value}px`
}
