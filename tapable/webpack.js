import { SyncHook } from 'tapable'

const webpack = {
  compiler: {
    hooks: {
      seal: new SyncHook(['source']),
      afterEmit: new SyncHook(['asset'])
    }
  },
  compilation: {
    hooks: {
      build: new SyncHook(['filename'])
    }
  }
}

// 编写插件逻辑
webpack.compiler.hooks.seal.tap('plugin', (source) => {
  console.log(source)
})

// webpack内部执行
// webpack.compiler.run()
// webpack.compiler.compile()
// 声明周期节点
webpack.compiler.hooks.seal.call('test.png')



