import fs from 'fs'
import path from 'path';

const filepath= path.join(process.cwd(), 'hello.txt')
const contents= fs.readFileSync(filepath,'utf8')
console.log("file contents",contents);
const lowerContents=contents.toLowerCase()
fs.writeFileSync(filepath,lowerContents)
console.log("File updated");

