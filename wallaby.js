var babel = require('babel');

module.exports = function (wallaby) {
  var wallabyBabelCompiler = wallaby.compilers.babel({
    babel: babel,
    stage: 0
  });

  return {
    debug: true,
    files: [
      'jest-setupEnvScriptFile.js',
      'jest-setupTestFrameworkScriptFile.js',
      'package.json',
      'src/**/*.js'
    ],
    tests: [
      '__tests__/**/*.js'
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },
    compilers: {
      'src/**/*.js*': wallabyBabelCompiler
    },
    workers: {
      initial: 10,
      regular: 5
    },
    testFramework: 'jest',
    bootstrap: function (wallaby) {
      var config = require('./package.json').jest;
      wallaby.testFramework.configure(config);
    }
  };
};
