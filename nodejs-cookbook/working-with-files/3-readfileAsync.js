import fs from 'fs/promises'
import path from 'path'

async function readFlAsyc(){
    // const filepath=path.join(process.cwd(),'content-log.txt')
    try {
        const content=await fs.readFile('content-log.txt','utf-8')
        console.log(`File read: `, content)
    } catch (error) {
        console.error("Reading file error ",error)
    }
}
readFlAsyc()