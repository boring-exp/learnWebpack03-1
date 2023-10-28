import path from 'node:path'
import process from 'node:process'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import webpack from 'webpack';
const { ProgressPlugin } = webpack;

// 不用管产物路径
const devServer = {
  // static: {
  //   directory: path.join(__dirname, 'public'),
  // },
  compress: true,
  port: 9000,
  allowedHosts: ['test.hahah.com'],
  client: {
    progress: true,
  },
  proxy: {
    '/api': 'http://localhost:3000',
  },
}


const config = {
  entry: './src/main.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'js/[name].[fullhash:8].js'
  },
  mode: 'production',
  module: {
    // 根据后缀名的不同，采用不同的编译工具
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      // sass-loader如果想能够正常工作，需要安装sass工具包
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // 处理图片
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      // 处理音视频文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      // 处理字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public'
        }
      ]
    }),
    new CleanWebpackPlugin(),
    new ProgressPlugin()
  ],
  devServer,
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024 // 1mb
  }
}

export default config
