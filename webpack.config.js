const path = require('path');

module.exports = {
	mode: 'production',
	context: __dirname,
	entry: './frontend/lootsy.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env', '@babel/react' ]
					}
				}
			}
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '*' ]
	}
};
