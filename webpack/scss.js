const ExtractTextPlugin = require('extract-text-webpack-plugin');
const task = require('./task');
const path = require('./path')();

module.exports = () => {

    switch (task) {

        case 'dev':
            return {

                module: {

                    loaders: [

                        {
                            test: /\.scss$/,
                            loaders: ['style', 'css', 'postcss', 'sass'],
                            include: path.src

                        }

                    ]

                },

            };

        default:
            return {

                module: {

                    loaders: [

                        {
                            test: /\.scss$/,
                            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass'),
                            include: path.src

                        }

                    ]

                },

                plugins: [
                    new ExtractTextPlugin('hot-dog.css')
                ]

            };

    }

};
