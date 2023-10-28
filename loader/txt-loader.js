export default function(content) {
  console.log(this)
  // 获得一个能够在js中正常运行的代码
  const code = `
  const test = "${content}"
  export default test
  `
  return code
}