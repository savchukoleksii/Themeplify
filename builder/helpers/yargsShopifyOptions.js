module.exports = function yargsShopifyOptions(yargs) {
    return yargs
        .option("config", {
            describe: "Path to config.yml",
            default: "config.yml",
            alias: "c"
        })
		.option("password", {
			describe: "Will run this command without dev server",
			type: 'string',
			alias: "s",
		})
		.option("store", {
			describe: "Will run this command without dev server",
			type: 'string',
			alias: "s",
		})
		.option("themeid", {
			describe: "Will run this command without dev server",
			type: 'number',
			alias: "t",
		})
        .option("dir", {
            describe: "Directory that command will take effect.",
            alias: "d",
            default: `./dist`
        })
        .option("env", {
            describe: "Environment from config file",
            default: "development",
            alias: "e"
        })
        .option("allenvs", {
            describe: "Will run this command for each environment in your config file",
            default: false,
			type: "boolean",
            alias: "a"
        })
		.option("noignore", {
			describe: "Will disable config ignores so that all files can be changed",
			type: "boolean",
			default: false,
		})
        .option("help", {
            describe: "Show command help",
            default: false,
        });
};
