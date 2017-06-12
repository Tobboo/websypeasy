var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var reload = browserSync.reload;

gulp.task('sass', function () {
  return sass('src/scss/main.scss', {sourcemap: true})
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('/maps', {
      includeContent: false,
      sourceRoot: 'src/scss'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('assets', function () {
  return gulp.src('src/img/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function () {
  return gulp.src('src/fonts/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('jade', function () {
  return gulp.src(['src/templates/**/*.jade', '!src/templates/includes/*'])
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('jade-watch', ['jade'], reload);

gulp.task ('watch', function(){
  return watch('src/scss/**/*.scss', ['sass']);
  return watch('src/js/**/*.js', ['js']).on('change', reload);
  return watch('src/templates/**/*.jade', ['jade-watch']);
  return watch('src/img/*', ['assets']).on('change', reload);
  return watch('src/fonts/*', ['fonts']).on('change', reload);
});


//  Main dev task
gulp.task('serve', ['sass', 'js', 'jade', 'assets', 'fonts'], function () {
  browserSync({
    server: {
      baseDir: 'dist',
    }
  });

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']).on('change', reload);
  gulp.watch('src/templates/**/*.jade', ['jade-watch']);
  gulp.watch('src/img/*', ['assets']).on('change', reload);


});
