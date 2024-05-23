const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/js/main.js",
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[name][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/assets", to: "assets" },
				{ from: "src/components", to: "components" },
			],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		watchFiles: ["src/**/*"],
		port: 9000,
		open: true,
		hot: true,
	},
	mode: "development",
};
