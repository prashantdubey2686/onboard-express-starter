module.exports = {
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended'
  ],
  env: {
    browser : true,
    es6     : true,
    node    : true
  },
  globals: {
    PRODUCTION: true
  },
  plugins: [
    'flowtype'
  ],
  rules: {
    
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
