const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		'home/index': './src/home/index.js',
		'detail/index': './src/detail/index.js'
	},
	output: {
		filename: '[name]_[hash:8].js',
		chunkFilename: 'vendors[chunkhash:8].js',
		path: path.join(__dirname, '../dist')
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
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader', 'postcss-loader',
					/* {
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer')
								],
							},
						},
					}, */
					"less-loader"
				]
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HTMLWebpackPlugin({
			filename: 'home/index.html',
			template: './index.html',
			chunks: ['home/index']
		}),
		new HTMLWebpackPlugin({
			filename: 'detail/index.html',
			template: './index.html',
			chunks: ['detail/index']
		})
	]
}