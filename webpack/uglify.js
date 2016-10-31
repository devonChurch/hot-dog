const webpack = require('webpack');

module.exports = () => {

    return {

        plugins: [
            new webpack.optimize.UglifyJsPlugin({

                // Keep the code as compressed as possible by not beautifying.
                beautify: false,

                // Remove comments.
                comments: false,

                compress: {

                    // Uglify sends out a bunch or frivolous warnings each build.
                    // Turn them off here.
                    warnings: false,

                    // Remove console.log() references.
                    drop_console: true

                },

                // Can possibly break a bunch or string based function references?
                // mangle: {}

            })
        ]

    };

};
