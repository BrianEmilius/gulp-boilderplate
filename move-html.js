var { src, dest } = require("gulp");
var { reload } = require("gulp-connect");
var { init, write } = require("gulp-sourcemaps");
var minify = require("gulp-htmlmin");
var rename = require("gulp-rename");

function moveHTML() {
	return src("./src/html/**/*.html")
		.pipe(init())
		.pipe(minify({ collapseWhitespace: true }))
		.pipe(rename(function(path) {
			if (path.basename != "index") {
				path.dirname = path.dirname + "/" + path.basename;
				path.basename = "index";
			}
		}))
		.pipe(write("."))
		.pipe(dest("./dist"))
		.pipe(reload());
}

module.exports = moveHTML;
