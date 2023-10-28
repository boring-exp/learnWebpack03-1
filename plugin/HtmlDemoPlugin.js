class HtmlDemoPlugin {
  static name = 'HtmlDemoPlugin'
  static defaultOptions = {
    outputFile: 'index.html'
  }

  // 需要传入自定义插件构造函数的任意选项
  //（这是自定义插件的公开API）
  constructor(options = {}) {
    // 在应用默认选项前，先应用用户指定选项
    // 合并后的选项暴露给插件方法
    // 记得在这里校验所有选项
    this.options = { ...HtmlDemoPlugin.defaultOptions, ...options }
  }

  apply(compiler) {
    compiler.hooks.emit.tap(HtmlDemoPlugin.name, (compilation) => {
      
    })
  }
}

export { HtmlDemoPlugin }