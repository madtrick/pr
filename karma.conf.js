'use strict';

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'sinon'],

    files: [
      'tests/**/*.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
