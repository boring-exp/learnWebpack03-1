import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser"

export default function(content) {
  const parser = new XMLParser();
  let jObj = parser.parse(content);

  // TODO: js模块代码构造
  const code = ``
  return code
}

