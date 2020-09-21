var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js',
		test: './src/test.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './dist')
	},
	devtool: 'source-map',
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				/* options: {
					presets: ['@babel/preset-env']
				} */
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', "less-loader"]
			},
			{
				test: /\.(jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images',
						limit: 20480
					}
				}]
			}
			/* {
				test: /\.(jpeg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images'
					}
				}]
			} */
		]
	},
	// module: {
	// 	rules: [{
	// 		test: /\.(css|less)$/,
	// 		use: ['style-loader', 'css-loader',
	// 			{
	// 				loader: 'postcss-loader',
	// 				options: {
	// 					postcssOptions: {
	// 						plugins: [
	// 							require('autoprefixer')
	// 						],
	// 					},
	// 				},
	// 			},
	// 			"less-loader"
	// 		]
	// 	}]
	// }
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		hotOnly: true
	}
}