import fs from 'fs/promises';

async function nestedDirCrt(){
    try {
        await fs.mkdir('test-folder', {recursive: true})
        console.log("created directories")
    } catch (error) {
        console.error('Error creating directories')
    }
}
nestedDirCrt()
