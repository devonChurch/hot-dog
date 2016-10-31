/* global __dirname */

const root = __dirname.replace('/webpack', '');
const src = `${root}/src`;
const dist = `${root}/dist`;

module.exports = () => {

    return {root, src, dist};

};
