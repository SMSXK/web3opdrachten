const fs = require('fs');
function  fileWriteAndRead() {
    fs.writeFile('file.txt', 'Khava Djabrailova', err => {
        if (err)
             console.log(err);
        else
        console.log('file is aangemaakt!');
    });
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err)
         console.log(err);
    else
    console.log('file word gelezen '+ data);
});
}
module.exports = fileWriteAndRead();

