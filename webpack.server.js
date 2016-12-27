'use strict';

/**
 * Created by x on 11/23/15.
 */
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.dev.config');
var open           = require('open');
const opts_config = {
    port:8676
}
// "dev": "webpack-dev-server --devtool eval --progress --colors --hot  --content-base build",
new WebpackDevServer(webpack(config), {
    devtool: config.devtool,
    contentBase: config.pathToBuild,
    publicPath: config.output.publicPath,
    quiet: false,
    noInfo: false,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        progress: true
    },
}).listen(opts_config.port, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at 127.0.0.1:8676/dist/');
    open(`http://127.0.0.1:${opts_config.port}/dist/`);
});