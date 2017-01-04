# ES6Learn
## Learning ES6 Step by Step：

1. `npm init` -> Init NPM 

1. `babel-eslint babel-plugin-external-helpers babel-preset-es2015 babel-register --save-dev` -> Install babel Tool(Convert ES6 to ES5)

1. `npm install eslint --save-dev`

1. `npm install gulp gulp-connect gulp-eslint gulp-sourcemaps@2.1.1 --save-dev` -> Install gulp Tool(Auto Finish Tool)

1. `npm install rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-includepaths rollup-plugin-node-resolve rollup-plugin-uglify rollup-stream --save-dev` -> Install rollup Tool(Combine js file in a js file)

1. `npm install vinyl-buffer vinyl-source-stream --save-dev`

1. Create `.babelrc`, `.eslintignore`, `.eslintrc.json` file

1. Create src folder, dist folder, test Folder

1. Create moudel js file (./src/Foo.js), main js file(./src/index.js)

1. Create gulpfile.babel js file (./gulpfile.babel.js)

1. `gulp bundelAnduglifyJSFile` Run gulp 'bundelAnduglifyJSFile' task, will export bundel file, bundel map file, bundel.min file, bundel.min map file

1. Create Test html file (./test/index.html)

1. `gulp` Run gulp default task