const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            watch: true
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        hot: true,
        watchFiles: ['src/**/*.html'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript', // Añade este preset para el soporte de TypeScript
                    ],
                },
            }, 
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',  // Inyecta CSS en el DOM.
                'css-loader',    // Traduce CSS a CommonJS.
                'sass-loader'    // Compila Sass a CSS.
              ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};