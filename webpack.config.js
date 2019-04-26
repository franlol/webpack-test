// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './scripts/main.js',
    output: {
        // path: path(__dirname,'/build'),
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    // https://github.com/jantimon/html-webpack-plugin
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './bundle.css',
        }),
    ],

    // https://github.com/webpack-contrib/style-loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // importLoaders: 1,
                            minimize: true
                        }
                    },
                    // { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    },

    devServer: {
        port: 8080,
    }
}