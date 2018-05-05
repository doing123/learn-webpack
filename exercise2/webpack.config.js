const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: ['./src/index.js', './src/main.js'],
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'js/bundle.js'
        // filename: 'js/[name]-[hash].js'
        filename: 'js/[name]-[chunkHash].js', // 只打包有改动的文件
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: 'head', // false
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};