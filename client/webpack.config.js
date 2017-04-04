var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');
module.exports = {
entry:'./app/main.ts',
output:{
    path:__dirname+'/dist',
    filename:'app.bundle.js'
},


module:{
    rules:[


{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    },

       {
        test: /\.css$/,
          use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader",
                publicPath: "/dist"
            })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader'
      },
    ]
},

plugins: [
        new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, './app')
        ),
       
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        }),
       
        new HtmlWebpackPlugin({
            hash:true,
            template: 'index.html',
    }),
        new webpack.LoaderOptionsPlugin({
        htmlLoader: {
            minimize: true, // workaround for ng2
            customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
            customAttrAssign: [ /\)?\]?=/ ],    
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            // Skip mangling these
            except: ['routerLink']
        }
})
    
    ],
resolve:{
    extensions:['.js','.ts','.css']
}

} 