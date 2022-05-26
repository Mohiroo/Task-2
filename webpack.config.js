const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    'landing': "./pages/landing/landing.js",
    'sign-in': './pages/sign-in/sign-in.js',
    'registration': './pages/registration/registration.js',
    'search-room': './pages/search-room/search-room.js',
    'room-details': './pages/room-details/room-details.js',
    'page404': './pages/page404/page404.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: 'auto',
    filename: (pathData) => pathData.chunk.name === 'landing' ? 'js/index.js' : 'js/[name].js',
  },
  devServer: {
    magicHtml: true,
    compress: true,
    hot: true,
    port: 4200,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './pages/landing/landing.pug',
      chunks: ['landing'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './pages/sign-in/sign-in.pug',
      chunks: ['sign-in'],
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './pages/registration/registration.pug',
      chunks: ['registration'],
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pages/search-room/search-room.pug',
      chunks: ['search-room'],
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './pages/room-details/room-details.pug',
      chunks: ['room-details'],
    }),
    new HtmlWebpackPlugin({
      filename: 'page404.html',
      template: './pages/page404/page404.pug',
      chunks: ['page404'],
    }),
    new MiniCssExtractPlugin({
      filename: (pathData) => pathData.chunk.name === 'landing' ? 'css/index.css' : 'css/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{
        test: /\.pug$/,
        use: {
          loader: 'simple-pug-loader',
          options: {
            pretty: true,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'resource/images/[name][ext]',
        },
      },
      {
        test: /font-.*\.(ttf|svg|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'resource/fonts/[name][ext]',
        },
      },
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};