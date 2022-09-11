const { resolve } = require('dns');
const path = require('path');
module.exports = {
    mode: 'development',
    // devtool: 'eval-source-map',
    devtool: 'nosources-source-map',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        //明确告诉webpack把生成的bundle.js文件存放刀dist目录下的js子目录中
        filename: 'js/bundle.js',
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}