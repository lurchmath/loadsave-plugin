
# Build processes using [Gulp](http://gulpjs.com)

Load Gulp modules.

    gulp = require 'gulp' # main tool
    coffee = require 'gulp-coffee' # compile coffeescript
    uglify = require 'gulp-uglify' # minify javascript
    sourcemaps = require 'gulp-sourcemaps' # create source maps
    pump = require 'pump' # good error handling of gulp pipes
    rm = require 'gulp-rm' # for "clean" task

This task compiles CoffeeScript source into minified JavaScript with source
maps.

    gulp.task 'compile-source', -> pump [
        gulp.src 'source/*.litcoffee'
        sourcemaps.init()
        coffee bare : yes
        uglify()
        sourcemaps.write '.'
        gulp.dest 'release'
    ]

This task copies compiled code from the releases folder to the example
folder.

    gulp.task 'create-example', [ 'compile-source' ], ->
        gulp.src 'release/*'
        .pipe gulp.dest 'example/'

The default task does everything in sequence.

    gulp.task 'default', [ 'create-example' ]

Or delete everything.

    gulp.task 'clean', ->
        gulp.src [
            'release/*.js'
            'release/*.map'
            'example/*.js'
            'example/*.map'
            'example/filedialog.html'
        ], read : false
        .pipe rm()
