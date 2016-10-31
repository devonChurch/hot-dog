// Components
//
// - - - - - - - - - - -
//
// Header
// -
//
// - - - - - - - - - - -
//
// Shell
// - Header
// - Add button
//
// - - - - - - - - - - -
//
// Listing
// - Profile icon
// - Text
// - Star
// - More
//   - Dropdown
//
// - - - - - - - - - - -
//
// Footer
// - Github
//
// - - - - - - - - - - -
//
// xx


require('./initialise');
const requireAll = (context) => context.keys().map(context);
const scss = require.context('./', true, /^\.\/.*\.scss$/);

requireAll(scss);



// const queryBase = (directory) => directory.startsWith('./base/');
// // const onlyBase = allScss.keys().filter(queryBase).map(allScss);
// // const notBase = allScss.keys().filter((directory) => !queryBase(directory)).map(allScss);
// const onlyBase = allScss.keys().filter(queryBase);
// const notBase = allScss.keys().filter((directory) => !queryBase(directory));
//
// console.log('[...onlyBase, ...notBase]', [...onlyBase, ...notBase]);
//
// [...onlyBase, ...notBase].map(allScss);
