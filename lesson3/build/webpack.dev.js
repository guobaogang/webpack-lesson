const webpack = require('webpack');
const common = require('./webpack.comm');
const {
	merge
} = require('webpack-merge');

const devConf = {
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true,
	},
	devServer: {
		hot: true,
		hotOnly: true,
		open: true,
		port: 9999
	}
}

module.exports = merge(common, devConf);