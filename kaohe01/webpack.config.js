const {resolve} =require("path");
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
module.exports={
    //入口，指示webpack从哪个文件开始打包
    entry:"./src/index.js",
    //出口，定义webpack的输出
    output:{
        publicPath:"/",
    	//最终打包后输出的文件名
        filename:"js/bundle.js",
        //最终打包好的文件输出的位置 ，__dirname是node的一个变量，代表当前文件的目录的绝对路径
        path:resolve(__dirname,"dist")
    },
    //loader的配置
    module:{   
    //定义规则，遇到什么类型的文件应该调用 什么loader去处理
        rules:[
            {
                //匹配哪些文件
                test:/\.css$/,
                //使用哪些loader进行处理
                //use数组中loader执行顺序，从右到左，从下到上，依次执行
                use:[
                    //style-loader的作用是创建一个标签，将js中的css样式资源插入进去，添加到页面中的head中生效
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    //css-loader的作用是将css文件以字符串的形式变成common.js的模块加载到js中，内容是样式字符串
                    'css-loader'
                   
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      esModule:false,
                      name:"[hash:10].[ext]",
                      outputPath:"img"
                    }
                  }
                ]
              },
              {
                test:/\.html$/,
                loader:"html-loader"
              }
        ]
    },
    //plugins的配置
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"css/bulid.css"
        }),
        new PurgeCSSPlugin({
                paths: glob.sync(path.join(__dirname, 'index.html')),
          })
    ],
    //模式
    mode:"development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        compress: true,
        port: 9000,
        hot: true,  
        host:'localhost',
        open:true
      },
      //可以对打包后的文件进行调试代码
      devtool:'inline-source-map',
}
