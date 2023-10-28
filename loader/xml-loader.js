import { XMLParser } from "fast-xml-parser"

export default function(content) {
  const parser = new XMLParser();
  let jObj = parser.parse(content);
  const jsonStr = JSON.stringify(jObj)

  // TODO: js模块代码构造
  const code = `
  const xmlObj = ${jsonStr}
  export default xmlObj
  `
  return code
}

