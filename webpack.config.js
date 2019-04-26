// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/main.js',
    output: {
        // path: path(__dirname,'/build'),
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    // https://github.com/jantimon/html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],

    // https://github.com/webpack-contrib/style-loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

    devServer: {
        port: 8080,
    }
}