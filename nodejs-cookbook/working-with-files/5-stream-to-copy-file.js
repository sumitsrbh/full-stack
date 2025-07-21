import fs from 'fs'


async function streamsToReadFile(){
    const streamContnet= fs.createReadStream('user.json')
    const streamWrite= fs.createWriteStream('user_backup.json')
    try {
        streamContnet.on('data', (data)=>{
            console.log('Read chunk',JSON.parse(data));
            streamWrite.write(data)
        })
        streamContnet.on('end',()=>{
            'No more data'
        })
    } catch (error) {
        console.error("Error reading stream",error)
    }
}

async function readStream(){
    console.log("Now reading user_backup.json");
    const file=fs.createReadStream('user_backup.json')
    try {
        file.on('data', data=>{
            console.log('Data stream',data)
        })
    } catch (error) {
        console.error('Error reading file',error)
    }
}


streamsToReadFile()
readStream()