var path = require('path');
var {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './dist'),
		library: 'guobg',
		libraryTarget: 'umd'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		//new CleanWebpackPlugin()
	]
}