/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	uglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;


module.exports = {
	entry: [
		path.resolve(__dirname, 'src/app.jsx'),
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

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	],


	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
