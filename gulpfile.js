const gulp = require("gulp");
const babel = require("gulp-babel");
const runSequence = require("run-sequence");
const del = require("del");
const concat = require("gulp-concat");
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const plumber = require('gulp-plumber');

gulp.task("clean", () => {
  return del(["www/**/*"], { force: true });
});

gulp.task("copy", () => {
  return gulp.src(["src/**/*.html"]).pipe(gulp.dest("www"));
});

gulp.task("copyVendor", () => {
  return gulp
    .src(["node_modules/babel-polyfill/dist/polyfill.min.js"])
    .pipe(gulp.dest("www/vendor"));
});

gulp.task("compile", () => {
  return gulp
    .src("src/*.js")
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(concat("all.js"))
    .pipe(plumber.stop())
    .pipe(gulp.dest("www"))
  });

gulp.task("cleanIndex", () => {
  return del(["www/index*"], { force: true });
});

gulp.task("copyIndex", () => {
  return gulp
    .src(["src/index-prod.html"])
    .pipe(rename('index.html'))
    .pipe(gulp.dest("www"));
});

gulp.task('compress', () => {
  return gulp.src('www/all.js')
  .pipe(plumber())
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('www'))
});

gulp.task("default", () => {
  runSequence(
    "clean", 
    [
      "copy",
      "copyVendor", 
      "compile",
    ],
    "cleanIndex",
    "copyIndex",
    'compress',
  );
});
