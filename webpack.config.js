let config;
const task = require('./webpack/task');
const common = require('./webpack/common');
const devtool = require('./webpack/devtool');
const clean = require('./webpack/clean');
const scss = require('./webpack/scss');
const uglify = require('./webpack/uglify');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

// NOTE: do not leave trailing commas in this Webpack config (you will error the build).

if (task === 'dev') {

    console.log('>> running task DEV');

    config = merge(

        common(),
        devtool(),
        scss()

    );

} else {

    console.log('>> running task PROD');

    config = merge(

        common(),
        devtool(),
        clean(),
        scss(),
        uglify()

    );

}

module.exports = validate(config);
