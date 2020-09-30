// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require('babel-polyfill')
require('@babel/register')({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
})

require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-transform-classes', '@babel/plugin-proposal-class-properties'],
})

// Import the rest of our application.
module.exports = require('./index.js')
