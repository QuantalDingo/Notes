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
		port: 8090,
		overlay: {
			errors: true,
			warnings: true,
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /public/],
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				exclude: [/node_modules/, /public/],
				use:
					{
						loader: "html-loader"
					}

			},
			{
				test: /\.jsx$/,
				exclude: [/node_modules/, /public/],
				use: {
					loader: "jsx-loader"
				}
			},
			{
				test: /\.jsx$/,
				exclude: [/node_modules/, /public/],
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/, /public/],
				use: {
					loader: "style-loader!css-loader!autoprefixer-loader"
				}
			},
			{
				test: /\.json$/,
				exclude: [/node_modules/, /public/],
				use: {
					loader: "json-loader"
				}
			}
		]
	}
};