const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
//const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '': path.resolve(__dirname, '..', 'src'),
      'assets': path.resolve(__dirname, '..', 'src/assets/'),
      'components': path.resolve(__dirname, '..', 'src/components/'),
      'context': path.resolve(__dirname, '..', 'src/context/'),
      'models': path.resolve(__dirname, '..', 'src/models/'),
      'services': path.resolve(__dirname, '..', 'src/services/'),
      'store': path.resolve(__dirname, '..', 'src/store/'),
      'utils': path.resolve(__dirname, '..', 'src/utils/'),
      'views': path.resolve(__dirname, '..', 'src/views/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SMH-ServiceManagementHub',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './src/template.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '..', 'src/assets/resource/favicon.ico'),
      prefix: '',
      outputPath: path.resolve(__dirname, '..', 'dist/public/resource'),
      inject: (htmlPlugin) =>
        path.basename(htmlPlugin.options.filename) === 'index.html',
    }),
  ],
  stats: 'errors-only',
}
// new CopyPlugin({
//       patterns: [
//           { from: "src/assets", to: "public" }
//       ],
//   })