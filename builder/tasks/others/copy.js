const files 	= buildify.files;
const { copy }  = buildify.functions.others;

const copyBuild = () => {
    return copy(files.copy);
}

copyBuild.displayName = "copy:build";

module.exports = copyBuild;