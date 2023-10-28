import YAML from 'yaml'

export default function(content) {
  const result = YAML.parse(content)
  const jsonStr = JSON.stringify(result)
  console.log(result)
  const code = `
  const yamlObj = ${jsonStr}
  export default yamlObj
  `
  console.log('hello world!')
  return code
}
