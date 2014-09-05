
/*
=====================================
GULPFILE
// where all the build magic happens
// configure this file to your liking
=====================================
*/


/* plugins */
var gulp            = require('gulp'),
    gutil           = require('gulp-util'),

    stylus          = require('gulp-stylus'),
    autoprefixer    = require('gulp-autoprefixer'),

    jshint          = require('gulp-jshint'),
    stylishReporter = require('jshint-stylish'),


    debug           = require('gulp-debug');



/*
============
default task
============
*/
gulp.task('default', function() {

    gutil.log('Happy Gulping!');

});




/*
=================
css file handling
=================
*/
gulp.task('css', function() {

    return gulp.src(['css/stylus/header.styl', 'css/stylus/off-canvas-menu.styl', 'css/stylus/general.styl'])
        .pipe( 
            stylus({
                errors: true,
                url: { name: 'inline-image' }
            }) 
        )
        .pipe( autoprefixer('last 3 version', 'ie 8', 'Android 2') )
        .pipe( gulp.dest('demo/css/') );
});



/*
================
js file handling
================
*/
gulp.task('jshint', function() {

    return gulp.src(['**/*.js', '!libs{,/**}'], {cwd: 'js/'})
        .pipe( jshint('./.jshintrc') )
        .pipe( jshint.reporter(stylishReporter) );

});




/*
==========
watch task
==========
*/
gulp.task('watch',  function() {

    /* stylus */
    gulp.watch([
        'css/**/*.styl',
    ], ['css']);

    /* jshint */
    gulp.watch([
        'js/**/*.js',
    ], ['jshint']);

});













