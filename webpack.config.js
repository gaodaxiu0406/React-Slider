let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        path:path.resolve('build'),
        filename: "bondle.js"
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.(jpg|png|gif)$/,loader:'url-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};