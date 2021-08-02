const path = require('path')
const HtmlWebPackPlugins = require('html-webpack-plugin')

module.exports = {
    
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins:[
        new HtmlWebPackPlugins({
            template:"./src/index.html",
            filename: "/index.html"
        })
    ]
}