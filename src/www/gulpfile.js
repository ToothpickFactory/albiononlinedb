const package_json    = require('../../package.json');
const gulp            = require('gulp');
const gutil           = require('gulp-util');
const concat          = require('gulp-concat');
const sass            = require('gulp-sass');
const inject          = require('gulp-inject');
const autoprefixer    = require('gulp-autoprefixer');
const cleanCSS				= require('gulp-clean-css');
const minify					= require('gulp-minify');
const rename          = require('gulp-rename');
const webserver       = require('gulp-webserver');
const gulpNgConfig    = require('gulp-ng-config');
const embedTemplates	= require('gulp-angular-embed-templates');
const babel						= require("gulp-babel");
const plumber					= require("gulp-plumber");
const sourcemaps			= require('gulp-sourcemaps');
const rev							= require('gulp-rev');
const runSequence			= require('run-sequence');
const NODE_ENV				= process.env.NODE_ENV || "default";


const paths = {
	ngConfig: [`../../config/${NODE_ENV}.json`],
  sassMain: ['./src/app.scss'],
  sass: ['./src/**/*.scss'],
  js: ['./src/**/*.js'],
	index: './src/index.html',
  component: ['./src/**/*.js', './src/**/*.html'],
	vendorsJS: package_json["client-vendor-js"],
	vendorsCSS: package_json["client-vendor-css"]
};


gulp.task('default', (cb) => runSequence(['sass', 'ngConfig', 'component', 'vendor'], 'index', cb));

gulp.task('index', function () {
  let target = gulp.src(paths.index);
  let sources = gulp.src(['./dist/js/*.js', './dist/css/*.css'], {read: false});
  return target.pipe(inject(sources, {ignorePath: "/dist/"}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('vendor', function(){
	gulp.src(paths.vendorsJS)
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('./dist/js'));

	gulp.src(paths.vendorsCSS)
		.pipe(concat('vendors.css'))
		.pipe(gulp.dest('./dist/css'))
});

gulp.task('ngConfig', function() {
	gulp.src(paths.ngConfig)
		.pipe(gulpNgConfig('albion-server.config', {
			environment: 'www'
		}))
		.pipe(rename('_config.js'))
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('component', function() {
  return gulp.src(paths.js)
		.pipe(sourcemaps.init())
    .pipe(embedTemplates({
      sourceType:'js',
      minimize: {
        empty: true,
        spare: true,
        quotes: true,
        dom: {
          lowerCaseAttributeNames: false,
          lowerCaseTags: false
        }
      }
    }))
    .pipe(plumber())
    .pipe(babel({presets: ['es2015']}))
    .pipe(concat(`${package_json.name}.js`))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function(done) {
  gulp.src(paths.sassMain)
		.pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
		.pipe(cleanCSS({compatibility: '*'}))
    .pipe(rename(`${package_json.name}.css`))
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
	gulp.watch(paths.index, ['index']);
	gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.component, ['component']);
	gulp.watch(paths.ngConfig, ['ngConfig']);
});

gulp.task('serve', ['watch'], function() {
  return gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
