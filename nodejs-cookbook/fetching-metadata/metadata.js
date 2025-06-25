import fs from 'fs'

//read the file name as command line agrument
const file= process.argv[2]
console.log("-======process.argv[0]=====",process.argv[0],"\n process.argv[1]",process.argv[1])
//create printMetadata function
function printMetadata(file){
    try {
        const fileStats= fs.statSync(file)
        console.log(fileStats);
    } catch (error) {
        console.error('Error reading file path:',file)
    }
}
printMetadata(file)
