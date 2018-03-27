/**
 * @overview generated by ghoti-cli
 * @fileoverview webpack dev configs
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public', 'template.html');
const FAVICON_DIR = path.resolve(__dirname, 'public', 'favicon.ico');

let config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        APP_DIR + "/index.dev.tsx"
    ],
    output: {
        filename: "bundle.js",
        path: BUILD_DIR,
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass"]
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: './tsconfig.json'
                    }
                }]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.(t|j)sx?$/,
                loader: "source-map-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'championggbotweb',
            template: PUBLIC_DIR
        }),
        new CopyWebpackPlugin([{
            from: FAVICON_DIR,
            to: BUILD_DIR,
        }], {}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};

module.exports = config;