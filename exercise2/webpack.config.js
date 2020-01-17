const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  // entry: ['./src/index.js', './src/main.js'],
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: 'js/bundle.js'
    // filename: 'js/[name]-[hash].js'
    filename: 'js/[name]-[chunkHash].js', // 只打包有改动的文件
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
    //   filename: 'index-[hash].html',
      template: 'index.html',
      inject: 'head', // false
      title: 'this is index.html',
      date: new Date(),
      /*minify: {
                removeComments: true,
                collapseWhitespace: true
            },*/
      chunks: ['index']
    }),
    new htmlWebpackPlugin({
    //   filename: 'main-[hash].html',
      filename: 'main.html',
      template: 'index.html',
      inject: 'head', // false
      title: 'this is main.html',
      date: new Date(),
      /*minify: {
                removeComments: true,
                collapseWhitespace: true
            },*/
      chunks: ['main']
    })
  ]
};
