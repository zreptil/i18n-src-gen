import fs from 'fs';
import * as path from 'path';
import * as xml from 'fast-xml-parser';

const fileList = [];
let tplFile = null;
let outFile = null;

for (const arg of process.argv) {
  const check = arg.toLowerCase();
  const parts = arg.split('=');
  const cmd = parts[0].toLowerCase();
  parts.splice(0, 1);
  const value = parts.join('=');
  switch (cmd) {
    case '--src':
      fileList.push(path.join(__dirname, value));
      break;
    case '--srcdir':
      fs.readdirSync(path.join(__dirname, value)).forEach((file, index) => {
        fileList.push(path.join(__dirname, value, file));
      });
      break;
    case '--srcmask':
      let pos = value.lastIndexOf('/');
      if (pos < 0) {
        pos = value.lastIndexOf('\\');
      }
      if (pos >= 0) {
        const dir = value.substr(0, pos);
        const regexp = new RegExp(value.substr(pos + 1));
        fs.readdirSync(path.join(__dirname, dir)).filter((file) => {
          if (regexp.test(file)) {
            fileList.push(path.join(__dirname, dir, file));
          }
        });
      }
      break;
    case '--tplfile':
      try {
        tplFile = fs.readFileSync(path.join(__dirname, value)).toString();
      } catch (ex) {
        tplFile = null;
        console.error(ex.message);
      }

      break;
    case '--outfile':
      outFile = value;
      break;
  }
}

if (tplFile == null || fileList.length === 0) {
  process.exit(1);
}

fileList.forEach((file, index) => {
  try {
    const content = fs.readFileSync(file).toString();
    fileList[index] = content;
  } catch (ex) {
    console.error(ex.message);
  }
});

const output = [];

for (const content of fileList) {
  const ext = extract(content);
  if (ext) {
    output.push(ext);
  }
}

const result = fill(tplFile, output);
fs.writeFileSync(outFile, result);
console.log(`Die Datei ${outFile} wurde erstellt`);

function fill(tpl: string, data: any): string {
  const dataList = [];
  for (const item of data) {
    const temp = [];
    for (const sub of item.list) {
      temp.push(`\n'${sub.src}': '${sub.dst}'`);
    }
    dataList.push(`{id: '${item.id}', data: {${temp.join(',')}}}`);
  }

  tpl = tpl.replace(/@dataList@/g, dataList.join(', '));

  return tpl;
}

function extract(content: string): any {
  const options = {
    parseNodeValue: false,
    ignoreAttributes: false,
    parseAttributeValue: false,
  };
  const doc = xml.parse(content, options);
  const srcLang = doc.xliff.file['@_source-language'];
  let dstLang = doc.xliff.file['@_target-language'];
  if (!dstLang) {
    dstLang = srcLang;
  }
  const ret = {id: dstLang, list: []};
  for (const node of doc.xliff.file.body['trans-unit']) {
    const srcText = node['@_id'];
    let dstText = node.source['#text'] || node.source;
    if (node.target) {
      dstText = node.target['#text'] || node.target;
    }
    ret.list.push({src: srcText, dst: dstText});
  }
  return ret;
}
