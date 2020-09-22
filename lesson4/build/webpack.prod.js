const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const common = require('./webpack.comm');
const {
	merge
} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConf = {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new OptimizeCssAssetsPlugin()
	]
}

module.exports = merge(common, prodConf);