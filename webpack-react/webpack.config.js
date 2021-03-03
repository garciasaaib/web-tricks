const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@style': path.resolve(__dirname, 'src/style/'),
    }
  },
  module: {
    rules:  [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 3000,
  //   open: true,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}
