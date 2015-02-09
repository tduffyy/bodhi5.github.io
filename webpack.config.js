var webpack = require('webpack')
  , CommonChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin();
var commonPlugin = new CommonChunkPlugin('vendor', 'vendor.bundle.js');

module.exports = {
  plugins: [commonPlugin, uglifyPlugin],
  entry: {
    app: './jsx/index.js',
    vendor: ['react']
  },
  output: {
    path: './assets',
    filename: 'bundle.js', //this is the default name, so you can skip it
    //at this directory our bundle file will be available
    //make sure port 8090 is used when launching webpack-dev-server
    publicPath: '/assets'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony&stripTypes&sourceMap', exclude:['node_modules'] },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs <=8k images, direct URLs for rest
    ]
  },
  externals: {},
  resolve: {
    moduleDirectories: ['node_modules', 'components'],
    extensions: ['', '.js', '.jsx']
  }
};
