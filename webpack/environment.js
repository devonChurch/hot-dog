const webpack = require('webpack');
const task = require('./task');
const environment = task === 'dev' ? 'development' : 'production';

module.exports = () => {

    return new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(environment)
    });

};

// console.log('process.env.DEVELOPMENT', process.env.DEVELOPMENT);

// BUILD_DEV=1 BUILD_PRERELEASE=1 webpack

// const createFlag = (flag) => JSON.stringify(JSON.parse(process.env[flag] || 'false'));
// const environments = {};
//
// environments.__DEVELOPMENT__ = createFlag('DEVELOPMENT');
// environments.__PRODUCTION__ = createFlag('PRODUCTION');
// environments.__ENVIRONMENT__ = Object.keys(environments).filter((environment) => environments[environment])[0].replace(/_/g, '');
//
// module.exports = () => {
//
//     return new webpack.DefinePlugin(environments);
//
// };
