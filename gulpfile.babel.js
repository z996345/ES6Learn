/**
 * @author michael / gulpfile.babel.js
 */

import gulp from 'gulp';
import connect from 'gulp-connect';
import eslint from 'gulp-eslint';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import grollup from 'rollup-stream';
import rollup from 'rollup';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const babelOptions = {
	exclude: 'node_modules/**',
	'presets': [
		['es2015', {
			modules: false
		}]
	],
	plugins: ['external-helpers'],
	babelrc: false
};

gulp.task('lint', () => {
	return gulp.src('src/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('bundelJSfile', ['lint'], () => {
	return grollup({
		entry: 'src/index.js',
		format: 'umd',
		sourceMap: true,
		moduleName: 'rollupTest',
		moduleId: 'rollupTest',
		plugins: [
			babel(babelOptions),
			nodeResolve({
				jsnext: true,
				extensions: ['', '.js', '.jsx']
			}),
			commonjs()
		],
		rollup
	})
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('uglifyJSfile', ['lint'], () => {
	return grollup({
		entry: 'src/index.js',
		format: 'umd',
		sourceMap: true,
		moduleName: 'rollupTest',
		moduleId: 'rollupTest',
		plugins: [
			babel(babelOptions),
			nodeResolve({
				jsnext: true,
				extensions: ['', '.js', '.jsx']
			}),
			commonjs(),
			uglify()
		],
		rollup
	})
		.pipe(source('bundle.min.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('bundelAnduglifyJSFile', ['bundelJSfile', 'uglifyJSfile']);

gulp.task('startWebServer', () => {
	connect.server({
		port: 8080,
		root: ['test', 'dist'],
		livereload: true
	});
});

gulp.task('listenFileUpload', () => {
	gulp.watch(['./test/*.html'], ['reloadPage']);
	gulp.watch(['./src/*.{js,jsx}'], ['bundelAnduglifyJSFile']);
});

gulp.task('reloadPage', () => {
	return gulp.src('./test/*.html')
		.pipe(connect.reload());
});

gulp.task('default', ['bundelAnduglifyJSFile', 'listenFileUpload', 'startWebServer']);