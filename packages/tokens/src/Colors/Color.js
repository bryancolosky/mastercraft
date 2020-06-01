export const colors = {
  black: 'black',
  gray: 'gray',
  white: 'white'
}

export function color (name) {
  if (!colors[name]) {
    throw new Error(
      `Unable to find color:\`${name}\`. Expected one of: ` +
      `[${Object.keys(colors).join(', ')}]`
    )
  }
  return `${colors[name]}`
}
