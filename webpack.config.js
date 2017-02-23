const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('../css/bundle.css');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: './App.jsx',

    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].bundle.js'
    },
    
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3001,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }
        ]
    },

    plugins: [
        extractCSS
    ],

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './public')
        ]
    }
};