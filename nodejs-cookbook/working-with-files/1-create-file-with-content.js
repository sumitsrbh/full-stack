
import fs from 'fs/promises'

async function createLogFile(){
     const content= `Log started at ${new Date().toISOString()}`
     try {
        await fs.writeFile('content-log.txt',content)
        console.log("File created and content written");
        
     } catch (error) {
        console.error('Error writing file',error)
     }
}
createLogFile()