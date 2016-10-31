const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('./path')();

module.exports = () => {

    return {

        plugins: [
            new CleanWebpackPlugin([path.dist], {
                root: path.root
            })
        ]

    };

};
