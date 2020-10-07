const Dotenv = require('dotenv-webpack');

module.exports = (env, args) => {
  const dotenvFile = args.mode ? '.env.'+args.mode : '.env.production'

  console.info('[DOTENV] Using: '+dotenvFile)
  return {
    entry: {
      "bundle": __dirname + "/index.js",
    },
    devtool: "source-map",
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      library: 'Swap',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['@babel/preset-env']
              }
          }
      ]
    },
    plugins: [
      new Dotenv({
        expand: true,
        path: dotenvFile,
      })
    ]
  };
}
