
import fs from 'fs/promises'
import path from 'path'

// const filepath=path.join(process.cwd(),'hello.txt')
// async function run(){
//     try {       
//         const contents= await fs.readFile(filepath,'utf8')
//           console.log('file contents', contents);
//     } catch (error) {
//         console.log("file reaidng error:", error);
        
//     }
// }
// run()

const filepaht=path.join(process.cwd(),'hello.txt')
async function run(){
    try{
        const contents= await fs.readFile(filepaht,'utf8')
        console.log("File contnet",contents)
    }catch(error){
        console.error("Erro reading file",error)
    }
} run()