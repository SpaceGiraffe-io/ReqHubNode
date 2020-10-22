module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:security/recommended'
  ],
  'plugins': [
    'security'
  ],
  'settings': {
  },
  // couldn't get rule overrides to work for spec files
  // wanted no-undef off for *.spec.js
  "globals": {
    'describe': 'readonly',
    'it': 'readonly',
    'expect': 'readonly',
    'beforeEach': 'readonly',
    'afterEach': 'readonly',
    'spyOn': 'readonly',
    'jest': 'readonly'
  },
  'ignorePatterns': [
    'node_modules/',
    '*.config.js'
  ],
  'rules': {
    'semi': [ 'error', 'always' ]
  }
};
