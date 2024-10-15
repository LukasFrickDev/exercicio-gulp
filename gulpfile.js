const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')


function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

function compressaoImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compressaoJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

// exports.sass = compilaSass;
// exports.image = compressaoImagem;
// exports.javascript = compressaoJavaScript;

exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false},gulp.series(compilaSass));
    gulp.watch('./source/images/*',{ignoreInitial: false},gulp.series(compressaoImagem));
    gulp.watch('./source/scripts/*js',{ignoreInitial: false},gulp.series(compressaoJavaScript));
}
