const task = require('./task');

module.exports = () => {

    switch (task) {

        case 'dev':
            return {
                devtool: 'eval-source-map',

            };

        default:
            return {
                devtool: 'source-map',

            };

    }

};
