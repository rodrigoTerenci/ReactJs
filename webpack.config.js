const path = require('path')
const HtmlWebPackPlugins = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      path : path.resolve(__dirname, 'dist').replace(/\\/g, "/"),
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
                presets: ['@babel/preset-env',
                          // "@babel/preset-react",                                
                ]
              }
            }
          }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    plugins:[
        new HtmlWebPackPlugins({
            template:"./src/index.html",
            filename: "./index.html"
        })
    ]
}