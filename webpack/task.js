/* global process */

// task references the NPM task eg "start" represents "npm start".
module.exports = (() => {

    console.log('process.env.npm_lifecycle_event', process.env.npm_lifecycle_event);

    const environment = process.env.npm_lifecycle_event;

    switch (true) {

        case environment === 'build:development' || environment === 'start':
            return 'dev';

        default:
            return 'prod';

    }

})();
