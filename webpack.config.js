module.exports = {
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
};