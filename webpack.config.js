import path from 'node:path'
import process from 'node:process'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'

const config = {
  entry: './src/main.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    // 根据后缀名的不同，采用不同的编译工具
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      // sass-loader如果想能够正常工作，需要安装sass工具包
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
}

export default config