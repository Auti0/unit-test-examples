module.exports = {
  setupFiles: ["<rootDir>/tests/js/setupTests.js"],
  testMatch: ["**/tests/js/**/*.test.js"],
  collectCoverage: true,
  coverageReporters: ["cobertura", "lcov"],
  collectCoverageFrom: ["src/js/*.js"],
};
