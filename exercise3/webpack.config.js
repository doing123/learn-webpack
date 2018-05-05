const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js' // 只打包有改动的文件
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules'),
                include: path.resolve(__dirname, './src'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader!importLoaders=1!postcss-loader',
                // loader: ['style-loader', 'css-loader', 'postcss-loader'],
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')({browsers: ['last 5 version']})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/, // sass: scss
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')({browsers: ['last 5 version']})
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            /*{
                test: /\.(png|jpg|gif|avg)$/i,
                loader: 'file-loader',
                query: {
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            },*/
            /*{
                test: /\.(png|jpg|gif|avg)$/i,
                loader: 'url-loader',
                query: {
                    limit: 2000000,
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            },*/
            {
                test: /\.(png|jpg|gif|avg)$/i,
                loaders: ['url-loader?limit=20000000&name=assets/[name]-[hash:5].[ext]',
                'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body' // false
        })
    ]
};