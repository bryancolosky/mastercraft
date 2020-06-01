const babel = {
  presets: [
    "@babel/react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-styled-components"
  ],
  babelrc: true
}

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.js?$/,
      use: [{
        options: babel,
        loader: "babel-loader"
      }],
      exclude: /node_modules/
    }
  )
  return config
}
