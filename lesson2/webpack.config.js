var path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.join(__dirname, './dist')
	},
	module: {
		rules: [{
			test: /\.(css|less)$/,
			use: ['style-loader', 'css-loader', "less-loader"]
		}, {
			test: /\.jpeg$/,
			use: [{
				loader: 'file-loader'
			}]
		}]
	}
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
}