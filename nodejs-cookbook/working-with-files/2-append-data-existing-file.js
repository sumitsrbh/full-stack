import fs from 'fs/promises'

async function appendData(){
    const content= `New timestamp- ${new Date().toISOString()}`
    try {
        await fs.appendFile('content-log.txt',content)
        console.log('New timestamp added ');
        
    } catch (error) {
        console.error('Error writing data',error)
    }
}
appendData();