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
  watchFiles: ['src/**/*', 'public/**/*'], // dev server自动刷新
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
      },
      // 自定义loader，处理文本文件
      {
        test: /\.txt$/, 
        use: {
          loader: path.resolve(process.cwd(), './loader/txt-loader.js')
        }
      },
      {
        test: /\.xml$/,
        use: {
          loader: path.resolve(process.cwd(), './loader/xml-loader.js')
        }
      },
      {
        test: /\.yml$/,
        use: {
          loader: path.resolve(process.cwd(), './loader/yml-loader.js')
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
  // 改写打包后文件大小限制，否则webpack会有告警
  performance: {
    maxEntrypointSize: 1024 * 1024 * 3,
    maxAssetSize: 1024 * 1024 * 3 // 1mb
  },
}

const configFn = (env) => {
  console.log(env)
  if (env.mode === 'dev') {
    config.devtool = 'eval-source-map'
  }
  return config
}

export default configFn
