const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/src/components/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public/js')
  },
  module: {
      rules: [
          {
              test: /\.s?[ac]ss$/,
              use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  "file-loader"
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                  "file-loader"
              ]
          }
      ]
  },
  plugins: [new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: '../css/[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  })
]
};