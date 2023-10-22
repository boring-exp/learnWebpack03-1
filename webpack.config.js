import path from 'node:path'
import process from 'node:process'

const config = {
  entry: './src/main.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: []
  },
  plugins: []
}

export default config