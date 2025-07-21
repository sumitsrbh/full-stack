import fs from 'fs/promises'

async function createAndRenameFile(){
    try {
       const file= await fs.writeFile('oldFile.txt', 'This is the content.')
        console.log('File created');
        
        const newFile= await fs.rename('oldFile.txt', 'oldFileRenamed.txt')
        console.log("File renamed");
        
    } catch (error) {
        console.error("Error creating file",error)
    }
}
createAndRenameFile()