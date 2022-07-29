


const fleekStorage =require ('@fleekhq/fleek-storage-js');
const fs = require('fs');
require('dotenv').config()

function upload (  infilepath, filekey) {

    let filePath  = infilepath;
    fs.readFile(filePath, async (error, fileData) => {
      const uploadedFile = await fleekStorage.upload({
        apiKey: process.env.FLEEKAPIKEY,
        apiSecret: process.env.FLEEKAPISECRET,
        key: filekey,
        ContentType: 'image/jpeg',
        data: fileData,
        httpUploadProgressCallback: (event) => {
          console.log(Math.round(event.loaded/event.total*100)+ '% done');
        }
      });
    
      console.log(uploadedFile.hash);
      console.log(uploadedFile.publicUrl);
    })
}

async function main() {
 


 upload('./files/city.json','city.json');
upload('./files/bike1.json','bike1.json');
 upload('./files/coaster.json','coaster.json');
 upload('./files/countrystreet.json','countrystreet.json');
 upload('./files/food.json','food.json');
 upload('./files/notabike.json','notabike.json');
 upload('./files/notabike2.json','notabike2.json');
  
 

}
 

main();

console.log("done");