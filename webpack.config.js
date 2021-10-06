const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CssMin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const IsProd = !isDev;



module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './web/webpack/src'),
    },
    output: {
        path: path.resolve(__dirname, './web/webpack/dist'),
        filename: '[name].js',
        assetModuleFilename: './images/[name][ext]'
    },
    devtool: isDev ? 'source-map': false,
    plugins: [
        new CleanWebpackPlugin(),
        new CssMin({
            filename: 'style.css',
        }),
    ],
    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test:/\.s[ac]ss$/i,
                use: [
                    CssMin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}