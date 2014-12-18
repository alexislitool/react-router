module.exports = function (config) {
  config.set({

    browsers: [ 'Chrome' ],

    frameworks: [ 'mocha' ],

    files: [
      'modules/**/__tests__/*-test.js'
    ],

    preprocessors: {
      'modules/**/__tests__/*-test.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map'
    }

  });
};
