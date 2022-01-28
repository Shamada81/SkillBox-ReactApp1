const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;


module.exports = {
	target: "node",
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, '../src/server/server.js'),
	output: {
		path: path.resolve(__dirname, '../dist/server'),
		filename: 'server.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	externals: [nodeExternals()],
	module: {
		rules: [{
				test: /\.[jt]sx?$/,
				use: ['ts-loader']
			},
			{
				test: /\.css$/,
				// test: /\.less$/,
				use: [{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]___[hash:base64:5]',
								exportOnlyLocals: true,
							},
						}
					},
					// 'less-loader'
				],
				exclude: [GLOBAL_CSS_REGEXP]
			},
			{
				test: GLOBAL_CSS_REGEXP,
				use: ['css-loader']
			}
		]
	},
	optimization: {
		minimize: false,
	}
}