// Imports
var gulp = require('gulp');
var path = require('path');

// Plugin imports
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');

// Settings
var settings = {
    file: {
        javascripts: 'application.min.js',
        stylesheets: 'application.min.css',
        templates: 'templates.min.js',
        vendor: {
            javascripts: 'vendor.min.js',
            stylesheets: 'vendor.min.css',
        },
    },
    folder: {
        root: '.',
        vendor: {
            root: '.',
            fonts: 'fonts',
        },
    },
    htmls: [
        'index.html',
    ],
    javascripts: [
        'application/application.js',
        'application/routes.js',
        'application/translations/*.js',
        'application/controllers/**/*.js',
        'application/directives/*.js',
        'application/filters/*.js',
        'application/providers/*.js',
        'application/services/*.js',
    ],
    stylesheets: [
        'stylesheets/material-design-icons.css',
        'stylesheets/application.css',
    ],
    templates: [
        'templates/**/*.html',
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
gulp.task('build', [
    'htmls',
    'javascripts',
    'stylesheets',
    'templates',
]);

gulp.task('default', [
    'build',
    'vendor'
]);

gulp.task('htmls', function()
{
    return gulp.src(settings.htmls)
        .pipe(plumber())
        .pipe(connect.reload());
});

gulp.task('javascripts', function()
{
    return gulp.src(settings.javascripts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.javascripts))
        .pipe(uglify())
        .pipe(sourcemaps.write(settings.folder.root))
        .pipe(gulp.dest(settings.folder.root))
        .pipe(connect.reload());
});

gulp.task('server', function()
{
    var options = {
        fallback: 'index.html',
        host: '0.0.0.0',
        livereload: true,
        port: 8080
    };

    return connect.server(options);
});

gulp.task('stylesheets', function()
{
    return gulp.src(settings.stylesheets)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.stylesheets))
        .pipe(minifyCss())
        .pipe(sourcemaps.write(settings.folder.root))
        .pipe(gulp.dest(settings.folder.root))
        .pipe(connect.reload());
});

gulp.task('templates', function()
{
    var options = {
        module: 'application.templates',
        standalone: true,
    };

    return gulp.src(settings.templates)
        .pipe(plumber())
        .pipe(htmlmin())
        .pipe(templateCache(settings.file.templates, options))
        .pipe(gulp.dest(settings.folder.root))
        .pipe(connect.reload());
});

gulp.task('vendor', [
    'vendor:fonts',
    'vendor:javascripts',
    'vendor:stylesheets',
]);

gulp.task('vendor:fonts', function()
{
    return gulp.src(settings.vendor.fonts)
        .pipe(plumber())
        .pipe(gulp.dest(settings.folder.vendor.fonts));
});

gulp.task('vendor:javascripts', function()
{
    return gulp.src(settings.vendor.javascripts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.vendor.javascripts))
        .pipe(uglify())
        .pipe(sourcemaps.write(settings.folder.vendor.root))
        .pipe(gulp.dest(settings.folder.vendor.root));
});

gulp.task('vendor:stylesheets', function()
{
    return gulp.src(settings.vendor.stylesheets)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat(settings.file.vendor.stylesheets))
        .pipe(minifyCss())
        .pipe(sourcemaps.write(settings.folder.vendor.root))
        .pipe(gulp.dest(settings.folder.vendor.root));
});

gulp.task('watch', [
    'server',
    'watch:htmls',
    'watch:javascripts',
    'watch:stylesheets',
    'watch:templates',
]);

gulp.task('watch:htmls', function()
{
    return gulp.watch(settings.htmls, [
        'htmls',
    ]);
});

gulp.task('watch:javascripts', function()
{
    return gulp.watch(settings.javascripts, [
        'javascripts',
    ]);
});

gulp.task('watch:stylesheets', function()
{
    return gulp.watch(settings.stylesheets, [
        'stylesheets',
    ]);
});

gulp.task('watch:templates', function()
{
    return gulp.watch(settings.templates, [
        'templates',
    ]);
});
