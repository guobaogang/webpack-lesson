const path = require('path');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BuildInfoPlugin = require('./build-info-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './dist')
	},
	resolveLoader: {
		modules: ['node_modules', './myLoaders'],
		extensions: ['.js', '.json'],
		mainFields: ['loader', 'main']
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'removeDebuggerLoader',
				options: {
					showLog: true
				}
			}, {
				loader: 'replaceLoader',
				options: {
					name: 'guobg'
				}
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new BuildInfoPlugin({
			name: 'guobg'
		})
	]
}