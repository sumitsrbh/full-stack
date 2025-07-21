import fs from 'fs/promises'

async function readAllFilesInDir(){
    try {
    const files= await fs.readdir('./')
       for(const file of files){
        console.log(file);
    } 
    } catch (error) {
        console.error("Error reading", error);       
    }
}
readAllFilesInDir()