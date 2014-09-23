I'm working on a rather full-featured auto-recompiling and auto-reloading build system (Gulp+Browserify+BrowserSync+Nodemon), but trying to get a jQuery plugin shimmed into the DOM has me stumped.  There's several moving pieces, so please bear with me.  The issue I'm trying to resolve is how to properly shim or require jQuery so that dependencies are met without unneeded bloat.  Here are the relevant files and their relevant contents:

### 1. The pre-browserified client-side script `bundle.js` that seeks to initialize the slider:

<!-- language: lang-js -->

    var $ = require('jquery')
    var nouislider = require('nouislider')
    var maskedinput = require('maskedinput')

    function initSlider() {
      return $('div#slider').noUISlider()
    }

    function maskInputs() {
      return $('input#zip').mask('99999')

    initSlider()
    maskInputs()

### 2. A page `index.html` which contains the slider element to be initialized:

<!-- language: lang-html -->

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>NoUISlider Gulp Demo</title>
    </head>
    <body>
        <div id="nouislider"></div>
        <input type="tel" id="zip">
        <script src="/dist/js/all.js"></script>
    </body>
    </html>

### 3. `bower.json` which brings in the jQuery and jQuery plugins

<!-- language: lang-json -->

    "dependencies": {
      "jquery": "~2.1.1", // not sure if need jquery via bower or not
      "jquery.maskedinput": "~1.3.1",
      "nouislider": "~7.0.7"
    }


### 4. `package.json` which witchcrafts the modules into browserify shims, setting their exported names and their dependencies:
<!-- language: lang-json -->

    "browserify": {
      "transform": [
        "browserify-shim"
      ]
    },
    "browser": {
      "jquery": "./node_modules/jquery/dist/jquery.js",
      "maskedinput": "./bower_components/jquery.maskedinput/jquery.maskedinput.min.js",
      "nouislider": "./bower_components/nouislider/distribute/jquery.nouislider.all.min.js"
    },
    "browserify-shim": {
      "jquery": "global:jQuery",
      "maskedinput": {
        "exports": "maskedinput",
        "depends": [ "jquery:$" ]
      },
      "nouislider": {
        "exports": "nouislider",
        "depends": [ "jquery:$" ]
      }
    },
    "dependencies": {
      "jquery": "~2.1.1"
    },
    "devDependencies": {
      "browserify": "^5.11.0",
      "browserify-shim": "^3.6.0",
      "gulp": "^3.7.0",
      "vinyl-source-stream": "^1.0.0"
    }

I've tried using the bower version of jquery too, substituting this for the npm version in `package.json`:

<!-- language: lang-json -->

    ==== try this ====
    "jquery": "./bower_components/jquery/lib/jquery.js",
    ==== or this ====
    "jquery": "./node_modules/jquery/dist/jquery.js",


### 5. `gulpfile.js` which contains the browserify gulp task:

<!-- language: lang-js -->

    var gulp = require('gulp')
    var browserify = require('browserify')
    var stream = require('vinyl-source-stream')

    gulp.task('browserify', function(){
      return browserify('bundle.js')
            .bundle()
            .pipe(stream('all.js'))
            .pipe(gulp.dest('./'))
    })

    gulp.task('default', ['browserify'])


Note that I'm able to `require('maskedinput')` in my client-side js, but when I try to `require('nouislider')`, I see a console error that seems to say NoUISlider is not finding its jQuery dependency: "Uncaught TypeError: Cannot read property 'fn' of undefined" when trying to initialize the NoUISlider.  I've put together a sandbox repo if you'd like to try it for yourself: [gulp-browserify-bower-test]()