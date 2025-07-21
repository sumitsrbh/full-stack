// import jsonfile from './user.json'
import fs from 'fs/promises'

async function readJsonFile(){
    try {
        const content=JSON.parse(await fs.readFile('user.json','utf-8'))  
        console.log("File read:",content);
    } catch (error) {
        console.error("Error reading file:",error)
    }
}
readJsonFile()