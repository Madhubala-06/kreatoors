const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel for JS files
        },
      },
      {
        test: /\.css$/,  // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,  // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',  // Output image folder
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // HTML template for the app
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // Serve content from 'dist'
    port: 3000,  // Port number
    open: true,  // Open the browser automatically
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX extensions
  },
};
