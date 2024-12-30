import gulp from "gulp";
import autoprefixer from "autoprefixer";
import del from "del";
import squoosh from "gulp-libsquoosh";
import terser from "gulp-terser";
import webp from "gulp-webp";
import sourcemap from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import svgstore from "gulp-svgstore";
import csso from "postcss-csso";
import rename from "gulp-rename";
import sync from "browser-sync";
import sass from 'gulp-dart-sass';
import webphtml from "gulp-webp-html";
import fileinclude from "gulp-file-include";
import formatHTML from 'gulp-format-html';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import fonter from 'gulp-fonter';
import ghPages from 'gulp-gh-pages';

//deploy
gulp.task('deploy', () => {
    return gulp.src('./build/**/*')
        .pipe(ghPages())
})

//resourses
const vendors = () => {
    return gulp.src("source/vendors/**", { encoding: false })
      .pipe(gulp.dest('build/vendors'))
  }

//fonts
 const fonts =() => {
    gulp.src("source/fonts/*.otf")
    .pipe(fonter({
        formats: ['ttf']
     }))
    .pipe(gulp.dest('source/fonts'));
    gulp.src("source/fonts/*.ttf2")
    .pipe(ttf2woff2())
    .pipe(gulp.dest('build/fonts'));
    return gulp.src("source/fonts/*.ttf")
    .pipe(ttf2woff())
    .pipe(gulp.dest('build/fonts'));
 };

//WebP
export const createWebp = (done) => {
    gulp.src('source/img/*.{png,jpg,tiff}')
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest('build/img'))
    done();
}


//Styles
const styles = () => {
    return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
        autoprefixer(),
        csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

//Html
const html = () => {
 return gulp.src("source/*.html")
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(formatHTML())
    .pipe(gulp.dest("build"))
    .pipe(sync.stream());
}

//Scripts
const scripts = () => {
    return gulp.src("source/js/main.js")
    .pipe(gulp.dest("build/js"))
    .pipe(terser())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}


//Image
const OptimizeImage = () => {
    return gulp.src('source/img/*.{png,jpg,svg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
}


//copy Image
const copyImage = () => {
    return gulp.src('source/img/*.{png,jpg,svg}')
    .pipe(gulp.dest('build/img'))
    .pipe(sync.stream());
}

//Sprite
const sprite = () => {
    return gulp.src("source/img/**/*.svg")
    .pipe(svgstore(
        { inlineSvg: true })
        )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/sprite"))
}


//Copy
const copy = () => {
    return gulp.src([
        "source/fonts/*.{woff,woff2}",
        "source/*.ico",
        "source/img/**/*.svg",
        "!source/img/icons/*.svg"
    ], {
        base: "source"
        })
    .pipe(gulp.dest("build"))
    done();
}


// Clean
const clean = () => {
    return del("build");
  };

// //Server
const server = (done) => {
    sync.init({
      server: {
        baseDir: "build"
      },
      cors: true,
      notify: false,
      ui: false,
    });
    done();
  }


// Reload
const reload = (done) => {
    sync.reload();
    done();
}

//Watcher
const watcher = () => {
    gulp.watch("source/sass/**/*.scss", gulp.series(styles));
    gulp.watch("source/js/main.js", gulp.series(scripts));
    gulp.watch('source/**/*.html', gulp.series(html,reload));
    gulp.watch('source/img', copyImage);
}

//Build
export const build = gulp.series(
    clean,
    copy,
    OptimizeImage,
    gulp.parallel (
        styles,
        html,
        scripts,
        createWebp,
        sprite,
        fonts,
        vendors
    ),
);

//Default
export default gulp.series(
    clean,
    copy,
    copyImage,
    gulp.parallel (
        styles,
        html,
        scripts,
        sprite,
        createWebp,
        fonts,
        vendors
    ),
    gulp.series(
        server,
        watcher
    )
)
