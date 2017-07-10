// const gulp = require("gulp");
// const ts = require("gulp-typescript");
// const tsProject = ts.createProject("tsconfig.json");
// const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps')


// gulp.task('default', function () {
//     gulp.src('src/**/*.ts')
//         .pipe(ts({
//             noImplicitAny: true,
//             out: 'scripts.js'
//         }))
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(sourcemaps.write('/'))
//         .pipe(gulp.dest('./dist/'));
// })

const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

