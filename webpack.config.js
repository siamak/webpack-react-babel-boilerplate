/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	OpenBrowserPlugin = require('open-browser-webpack-plugin');

var configServe = {
	port: 9100,
};


module.exports = {
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		progress: true,
		port: configServe.port,
	},
	// entry: path.resolve(__dirname, './src/app.jsx'),

	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:' + configServe.port,
		path.resolve(__dirname, './src/app.jsx'),
	],
	output: {
		path: __dirname,
		filename: './dist/bundle.js',
	},
	module: {
		loaders: [
			{
				// JSX files :
				test: /\.js[x]?$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
			},
			{
				// CSS files :
				test: /\.css?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				// SCSS files :
				test: /\.scss?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'style-loader!css-loader!sass!postcss-loader',
			},
		],
	},
	postcss: [
		autoprefixer({ browsers: ['last 3 versions'] }),
	],

	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:' + configServe.port }),
	],

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	stats: {
		// Nice colored output
		colors: true,
	},

	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
