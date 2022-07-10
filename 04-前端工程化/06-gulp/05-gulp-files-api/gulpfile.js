const { src, dest } = require('gulp')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

// yarn gulp
exports.default = () => {
  // return src('src/normalize.css')
  return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
