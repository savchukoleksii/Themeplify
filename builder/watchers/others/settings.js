const { gulp } 		= buildify.packages;
const { watch } 	= buildify.helpers;

const buildSettings = require("../../tasks/others/settings");

const settingsWatch = () =>  {
    return gulp.watch(`./src/config/settings_schema.json`, buildSettings);
};

settingsWatch.displayName = "settings:watch";

module.exports = settingsWatch;
