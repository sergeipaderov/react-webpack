module.exports = {
    entry: './src/App.jsx',

    output: {
        filename: 'bundle.js',
        path: __dirname +  '/public'
    },

    devServer: {
        contentBase: './public',
        port: 3000

    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: [' ', '.js', '.jsx']
    }
};