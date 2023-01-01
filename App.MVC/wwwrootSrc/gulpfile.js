const { src, dest, parallel } = require("gulp");
const uglify = require("gulp-uglify");
const image = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));

const destPrefix = "../wwwroot/";

async function minifyJs() {
    const paths = ["./js/*.js", "./js/**/*.js", "./js/**/**/*.js"];
    let tasks = paths.map(function (path) {
        return src(path)
            .pipe(
                uglify({
                    mangle: true,
                    output: {
                        beautify: false,
                    },
                })
            )
            .pipe(dest(destPrefix + "js"));
    });

    return await tasks;
}

async function minifyImage() {
    const paths = ["./images/**/*.{png,gif,jpg,svg,webp}"];
    let tasks = paths.map(function (path) {
        return src(path)
            .pipe(image())
            .pipe(dest(destPrefix + "images"));
    });

    return await tasks;
}

async function handleSass() {
    const paths = ["./styles/*.scss", "./styles/**/*.scss"];
    let tasks = paths.map(function (path) {
        return src(path)
            .pipe(sass({ outputStyle: "compressed" }))
            .pipe(dest(destPrefix + "styles"));
    });

    return await tasks;
}

async function handleCss() {
    const paths = ["./styles/*.css", "./styles/**/*.css"];
    let tasks = paths.map(function (path) {
        return src(path)
            .pipe(sass({ outputStyle: "compressed" }))
            .pipe(dest(destPrefix + "styles"));
    });

    return await tasks;
}

async function handleStatic() {
    const paths = ["./favicon.ico"];
    let tasks = paths.map(function (path) {
        return src(path)
            .pipe(dest(destPrefix));
    });

    return await tasks;
}

exports.default = parallel(minifyJs, minifyImage, handleSass, handleCss, handleStatic);