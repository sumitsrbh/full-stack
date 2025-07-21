
import fs from  'fs/promises'

async function deleteFile(){
    // fs.existsSync('oldFileRenamed.txt', (error)=>{
    //     if(error) console.error("No such file found");
    // })
    // Also, using fs.existsSync() is discouraged for async flows — it's better to just try/catch.
    try {
        await fs.unlink('oldFileRenamed.txt')
        console.log('File deleted');
               
    } catch (error) {
       if (error.code === 'ENOENT') {
        // 'ENOENT' stands for:
         // Error NO ENTry
        // ➤ It means: "No such file or directory"
      console.error('No such file found');
    } else {
      console.error('Error deleting file:', error);
    }
    }
}
deleteFile()