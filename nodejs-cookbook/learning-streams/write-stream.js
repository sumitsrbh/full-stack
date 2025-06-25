import fs from 'fs'

// const file= fs.createWriteStream('./file.txt')
// for(let i=0;i< 100000;i++){
//     file.write(
//         'Node.js is JS runtime built on Google Chrome \'s V* JS Engine'
//     )
// }

const file= fs.createWriteStream('./file.txt')

 for(let i=0;i<=1000000;i++){
    file.write(  'Node.js is JS runtime built on Google Chrome \'s V* JS Engine')
 }
 // all node.js streams are instance of EventEmitter class. close, drain, error 
 //  these events emitted on writable streams.
 