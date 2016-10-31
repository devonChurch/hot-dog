const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('./path')();
const environment = require('./environment');

module.exports = () => {

    return {

        context: path.src,

        // Entry accepts a path or an object of entries.
        // We'll be using the latter form given it's
        // convenient with more complex configurations.
        entry: {
            src: ['babel-polyfill', './index.js']
        },

        output: {
            path: path.dist,
            filename: 'hot-dog.js' // '[name].js'
        },

        module: {

            preLoaders: [

                {
                    test: /\.js$/,
                    loaders: ['eslint'],
                    include: path.src
                }

            ],

            loaders: [

                {
                    test: /\.js$/,
                    loaders: ['babel'],
                    include: path.src
                }

            ]

        },

        externals: {
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
        },

        plugins: [
            environment(),
            new CopyWebpackPlugin([
                {from: `./index.html`, to: `./index.html`}
            ])
        ],

        postcss() {
            return [autoprefixer];
        },

    };

};
