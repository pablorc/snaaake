var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var scsslint = require('gulp-scss-lint');
var autoprefixer = require('gulp-autoprefixer');

var basefile = "./www";
var sass_files = basefile + "/sass/**/*.{sass,scss}";
var template_files = basefile + '/templates/**/*.hbs';

var build_dir = "./build";
var css_dir = build_dir + "/css";
var js_dir = build_dir + "/js";


gulp.task('styles', function () {
  gulp.src(sass_files)
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(css_dir));
});

gulp.task('templates', function(){
  gulp.src(template_files)
  .pipe(handlebars())
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'App.templates',
    noRedeclare: true, // Avoid duplicate declarations
  }))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest(js_dir));
});


gulp.task('watch', function() {
  gulp.watch( sass_files, ["styles"]);
  gulp.watch( template_files, ["templates"]);
});

gulp.task('scss-lint', function() {
  gulp.src(sass_files)
  .pipe(scsslint({
    'config': '.scss-lint.yml'
  }));
});

gulp.task('default', ['styles', 'templates', 'watch']);
