var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bloguerastechie'
    },
    port: 3000,
    db: 'mongodb://localhost/bloguerastechie-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bloguerastechie'
    },
    port: 3000,
    db: 'mongodb://localhost/bloguerastechie-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bloguerastechie'
    },
    port: 3000,
    db: 'mongodb://localhost/bloguerastechie-production'
  }
};

module.exports = config[env];
