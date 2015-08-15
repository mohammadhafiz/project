// Imports
var gulp = require('gulp');
var path = require('path');

// Plugin imports
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// Settings
var settings = {
    file: {
        stylesheets: 'app.min.css',
        vendor: {
            javascripts: 'vendor.min.js',
            stylesheets: 'vendor.min.css',
        },
    },
    folder: {
        root: process.cwd(),
        vendor: {
            root: path.join(process.cwd(), 'vendor'),
            fonts: path.join(process.cwd(), 'vendor', 'fonts'),
        },
    },
    stylesheets: [
        'stylesheets/material-design-icons.css',
    ],
    vendor: {
        fonts: [
            'bower_components/material-design-icons/iconfont/MaterialIcons-*',
            'bower_components/roboto-fontface/fonts/*',
        ],
        javascripts: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-message-format/angular-message-format.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-translate/angular-translate.js',
        ],
        stylesheets: [
            'bower_components/roboto-fontface/css/roboto-fontface.css',
            'bower_components/angular-material/angular-material.css',
        ],
    },
};

// Tasks
gulp.task('build', ['stylesheets']);

gulp.task('default', ['build', 'vendor']);

gulp.task('stylesheets', function()
{
    return gulp.src(settings.stylesheets)
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.stylesheets))
        .pipe(minifyCss())
        .pipe(sourcemaps.write(settings.folder.root))
        .pipe(gulp.dest(settings.folder.root));
});

gulp.task('vendor', ['vendor:fonts', 'vendor:javascripts', 'vendor:stylesheets']);

gulp.task('vendor:fonts', function()
{
    return gulp.src(settings.vendor.fonts)
        .pipe(gulp.dest(settings.folder.vendor.fonts));
});

gulp.task('vendor:javascripts', function()
{
    return gulp.src(settings.vendor.javascripts)
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.vendor.javascripts))
        .pipe(uglify())
        .pipe(sourcemaps.write(settings.folder.vendor.root))
        .pipe(gulp.dest(settings.folder.vendor.root));
});

gulp.task('vendor:stylesheets', function()
{
    return gulp.src(settings.vendor.stylesheets)
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.vendor.stylesheets))
        .pipe(minifyCss())
        .pipe(sourcemaps.write(settings.folder.vendor.root))
        .pipe(gulp.dest(settings.folder.vendor.root));
});
