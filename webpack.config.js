const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'build/bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
};