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