const path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.js',
    library: 'example',
    libraryTarget: 'umd'
  },
  externals: {
    lodash:{
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    foobar: 'var foo.bar'
  }
};
