module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  coverageThreshold: {
    global: {
      statements: -10, // maximum 10 un-covered statements
      branches: 95,
      functions: 95,
      lines: 95
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ]
};
