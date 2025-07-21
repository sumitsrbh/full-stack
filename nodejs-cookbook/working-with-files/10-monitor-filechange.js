import fs from 'fs'

function watchFile(){
    try {
        setInterval(()=>{
            fs.watchFile('user.json', (curr, prev)=>{
            console.log("Current mtime is:",curr.mtime);
            console.log("Current mtime is:",prev.mtime);
        })
        ,500})
         
    } catch (error) {
        console.log('Error reading file',error);
    }
}
watchFile()