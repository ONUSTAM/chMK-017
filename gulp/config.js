// @file config.js
var path = require('path'); // 追記(watch)
var app = 'app.js';
var outPutFileName = 'app.js';
var dest = './build'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src);  // 追記(watch)

var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

  // 出力先の指定
  dest: dest,
  // jsのビルド設定
  js: {
    src: src + '/scripts/**',
    dest: dest,
    // dest: dest + '/scripts',
    uglify: false
  },

  // webpackの設定
  webpack: {
    watch: true,
    entry: src + '/scripts/' + app,
    output: {
      filename: outPutFileName
    },
    resolve: {
      extensions: ['', '.js']
    },
    module:  {
      noParse: /es6-promise\.js$/,
      loaders: [
        { test: /\.vue$/,   loader: 'vue' },
        { test: /\.css$/,   loader: 'style-loader!css-loader' },
        { test: /\.styl$/,  loader: 'style-loader!css-loader!stylus-loader' },
        { test: /\.svg$/,   loader: 'url-loader?mimetype=image/svg+xml' },
        { test: /\.woff$/,  loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.eot$/,   loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.ttf$/,   loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.scss$/,  loaders: ['style', 'css', 'sass'] },
        { test: /\.html$/,  loader: "html" },
        // { test: /jquery/, loader: 'expose?$!expose?jQuery' },
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new BowerWebpackPlugin({
        modulesDirectories: ["bower_components"],
        manifestFiles:      "bower.json",
        includes:           /.*/,
        excludes:           /.*\.less/,
        searchResolveModulesDirectories: true
      }),
      // jqueryプラグインを使う際に使われる接頭句を登録しておく
      new webpack.ProvidePlugin({
        $:      "jquery",
        jQuery: "jquery"
      }),
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        files: dest + "/**/*",
        server: {
          "baseDir": dest,
          "middleware": function(req, res, next){
            var timestamp = "[" + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + "] ";
            console.log(timestamp + req.method + " " + req.originalUrl + " - " +  req.connection.remoteAddress + " - " + req.headers['user-agent']);
            next();
          }
        }
      }),
      // miniふぁい
      // new webpack.optimize.UglifyJsPlugin()
    ]
  },

  copy: {
    src: [
      // src + '/favicon.ico',
      // src + '/www/index.html',
      // src + '/www/3.html',
      // src + '/www/7.html'
      src + '/www/**'
    ],
    dest: dest
  },

  watch: {
    encoding: dest + '/**',
    js: relativeSrcPath + '/scripts/**',
    styl: relativeSrcPath + '/styles/**',
    www: relativeSrcPath + '/www/**'
  },

  encoding: {
    src: dest + '/' + outPutFileName,
    outuptPath: dest + '/sjis',
    to: 'windows-31J'
    // to: 'Shift_JIS'
  }

}
