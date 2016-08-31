'use strict';

/**
 * Created by x on 11/23/15.
 */
var path = require('path');

/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */
var webpack           = require('webpack');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SplitByPathPlugin = require('webpack-split-by-path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc  = path.resolve(__dirname, 'src');
var pathToBuild  = path.resolve(__dirname, 'www');
var config = {
    pathToBuild: pathToBuild,
    devtool: "source-map",
    //入口文件配置
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8676',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'ts/index')
        ]
    },
    resolve:     {
        extensions: ['', '.js', '.jsx','.ts','.tsx'] //当requrie的模块找不到时，添加这些后缀

    },
    //输出文件配置
    output:      {
        path: path.resolve(__dirname, 'www/dist'),
        chunkFilename: '[name].js',
        filename:   '[name].js',
        publicPath: '/dist/'
    },
    module:      {
        loaders: [
            {
                test:    /\.(js|jsx|tsx|ts)?$/,
                loaders:['ts-loader'],
                //loaders: ['react-hot', 'babel','ts-loader'],
                exclude: /node_modules/
            },
            {
                test:   /\.(less|css)$/,
                loader: 'style!css!less'
            }
        ],
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    plugins:     [
        /*new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename:"common.js"
        }),*/
        new SplitByPathPlugin([
            {
                name: 'common',
                path: node_modules
            }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'react ui组件123',
            addLinkCss: ['/styles/iconfont.css'],
            template: './template/index.ejs',
            hash: true,    //为静态资源生成hash值
        })
        /*new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
           filename:'./www/index.html',    //生成的html存放路径，相对于 path
           template:'./view/index.html',    //html模板路径
           inject:true,    //允许插件修改哪些内容，包括head与body
           hash:true,    //为静态资源生成hash值
           title: 'react 组件',
           minify:{    //压缩HTML文件
           removeComments:true,    //移除HTML中的注释
            collapseWhitespace:false    //删除空白符与换行符
      }
     })*/
        /*new HtmlWebpackPlugin({
            title: 'react 组件',
            addLinkCss:[ '/styles/iconfont.css','/styles/app.css'],
            template: './templates/index.html'
        })*/
    ]
};


module.exports = config;
