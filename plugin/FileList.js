// 静态属性
class FileListWebpackPlugin {
  static name = 'FileListWebpackPlugin'

  constructor(option = {filename: 'info.md'}) {
    this.option = option
  }

  apply(compiler) {

    const { webpack } = compiler;

    // Compilation 对象提供了对一些有用常量的访问。
    const { Compilation } = webpack;
    const { RawSource } = webpack.sources;

    const pluginName = FileListWebpackPlugin.name
    // 不是pluginName也可以正常挂载
    compiler.hooks.thisCompilation.tap(pluginName,
      (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: pluginName,
            stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
          },
          (asset) => {
            const fileInfoMdStr = Object.keys(asset).map(item => {
              return `- ${item} ${asset[item].size()}`
            }).join('\n')
            compilation.emitAsset(this.option.filename, new RawSource(fileInfoMdStr))
          }
        )
      })
  }
}

console.log(FileListWebpackPlugin.name)

export { FileListWebpackPlugin }