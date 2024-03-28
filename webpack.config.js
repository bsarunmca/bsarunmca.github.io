var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './main.jsx',
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'portfolio/'),
        publicPath: '/portfolio/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use babel-loader for transpiling JSX to JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Include presets for React and environment
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // File extensions to resolve
    },
    mode: 'development',
};