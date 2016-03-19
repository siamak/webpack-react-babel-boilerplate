var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/demo-react.jsx',
	output: {
		path: __dirname,
		filename: './dist/bundle-react.js',
	},
	module: {
		loaders: [
			{
				// JSX files :
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
			},
			{
				// CSS files :
				test: /\.css?$/,
				loader: 'style-loader!css-loader!postcss-loader',
			},
		],
	},
	postcss: [
		autoprefixer({ browsers: ['last 5 versions'] }),
	],

	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	stats: {
		// Nice colored output
		colors: true,
	},

	devServer: {
		hot: true,
		inline: true,
		port: 9100,
	},

	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
