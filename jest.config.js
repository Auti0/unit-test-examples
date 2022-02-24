module.exports = {
  setupFiles: ['<rootDir>/tests/js/setupTests.js'],
  testMatch: ['**/tests/js/**/*.test.js'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageProvider: 'babel',
  collectCoverageFrom: ['src/js/*.js'],
  coverageDirectory: '.coverage'
};
