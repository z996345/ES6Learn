# ES6Learn
Learning ES6

. `npm init` Init NPM 

. `babel-eslint babel-plugin-external-helpers babel-preset-es2015 babel-register --save-dev` Install babel Tool(Convert ES6 to ES5)

. `npm install eslint --save-dev`

. `npm install gulp gulp-connect gulp-eslint gulp-sourcemaps@2.1.1 --save-dev` Install gulp Tool(Auto Finish Tool)

. `npm install rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-includepaths rollup-plugin-node-resolve rollup-plugin-uglify rollup-stream --save-dev` Install rollup Tool(Combine js file in a js file)

. `npm install vinyl-buffer vinyl-source-stream --save-dev`

. Create `.babelrc`, `.eslintignore`, `.eslintrc.json` file

. Create src folder, dist folder, test Folder

. Create moudel js file (./src/Foo.js), main js file(./src/index.js)

. Create gulpfile.babel js file (./gulpfile.babel.js)

. `gulp bundelAnduglifyJSFile` Run gulp 'bundelAnduglifyJSFile' task, will export bundel file, bundel map file, bundel.min file, bundel.min map file

. Create Test html file (./test/index.html)

. `gulp` Run gulp default task