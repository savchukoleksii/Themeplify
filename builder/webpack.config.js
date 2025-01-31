const { entries, themePath } = buildify.helpers;
const fs			= require("fs");
const files 		= buildify.files;

const webpackConfig = {
	name: "javascript",
	mode: "development",
	entry: () => entries("src/scripts/**.js"),
	node: {
		global: true,
	},
	output: {
		path: themePath("./dist/assets"),
		publicPath: "/assets/",
		filename: `${files.filePrefix || ''}[name].build.js`
	},
	resolve: {
		extensions: ['.js', '.mjs']
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									"useBuiltIns": "usage", // alternative mode: "entry"
									"corejs": 3, // default would be 2
									"targets": "> 0.25%, not dead"
									// set your own target environment here (see Browserslist)
								}
							]
						]
					}
				}
			}
		]
	},
	performance: {
		maxEntrypointSize: 5120000,
		maxAssetSize: 5120000
	},
	watchOptions: {
		aggregateTimeout: 600,
		poll: 1000,
	},
	plugins: []
};

let config 			= webpackConfig;
const configPath 	= themePath("./builder.config.js");
if(fs.existsSync(configPath)){
	const customConfig = require(configPath);

	if(Object.keys(customConfig).includes("webpack") && typeof customConfig["webpack"] === "function") {
		config = customConfig["webpack"](config);
	}
}

module.exports = config;
