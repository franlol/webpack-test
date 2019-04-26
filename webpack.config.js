// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/main.js',
    output: {
        // path: path(__dirname,'/build'),
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ]
}