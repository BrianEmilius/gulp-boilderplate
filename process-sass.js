var { src, dest } = require("gulp");
var { init, write } = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var { reload } = require("gulp-connect");
var sass = require("gulp-sass");

function processSass() {
	return src("./src/sass/**/*.scss")
		.pipe(init())
		.pipe(sass())
		.pipe(cleancss({ compatibility: "ie9" }))
		.pipe(write("."))
		.pipe(dest("./dist/assets/css"))
		.pipe(reload());
}

module.exports = processSass;
