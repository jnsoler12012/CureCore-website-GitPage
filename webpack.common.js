const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        `${__dirname}/src/index.js`,
        `${__dirname}/src/Application/scripts/scrollreveal.min.js`
    ],
    output: {
        path: `${__dirname}/dist`,
        clean: true,
        filename: '[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Images: path.resolve(__dirname, 'src/UI/assets/img'),
            Svg: path.resolve(__dirname, 'src/UI/assets/svg'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.template.ejs'),
            favicon: path.resolve(__dirname, 'src/UI/assets/ico/dashboard.ico'),
            title: 'custom name',
            inject: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        compact: false
                    },

                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    target: ["web", "es5"],
};