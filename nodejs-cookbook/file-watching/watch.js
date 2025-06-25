import fs from 'fs'
import path from 'path'

const file= path.join(process.cwd(),'file.txt')
fs.watchFile(file,(current,previous)=>{
    const formattedTime= new Intl.DateTimeFormat('en-GB',
        {
            dateStyle: 'full',
            timeStyle:'long'
        }
    ).format(current.mtime)    
    return console.log(`${file} updated ${(formattedTime)}`)
})
