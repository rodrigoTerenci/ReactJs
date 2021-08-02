const path = require('path')

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
    }
    
    /*module:{
        rules:[
            {test:/\.(js|jsx)$/},
            {exclude: /node_modules/},
            {use:{
                {loader:"babel-loader"},
                {options: {
                    presets: ['@babel/preset-env']
                }}
            }
        ]
        
    }*/
}