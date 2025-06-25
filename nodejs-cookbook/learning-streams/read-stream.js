import fs from 'fs'

// const rs= fs.createReadStream('./file.txt')

// data event handler- will execute each time, chunk of data read 
rs.on('data', (data)=>{
    //Buffer data logged 
    // console.log('Read chunk:', data);

    // .toString()  on individual chunks of data 
    console.log('Read chunk:', data.toString());
})

// end event handler - fired; no data left 
rs.on('end',()=>{
    console.log('No more data');
})
// all node.js streams are instance of EventEmitter class. exp -data, end, close etc.
