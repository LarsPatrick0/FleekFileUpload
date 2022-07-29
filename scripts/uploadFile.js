


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
 


upload('./files/city.jpeg','city.jpeg');
upload('./files/bike1.jpeg','bike1.jpeg');
upload('./files/coaster.jpeg','coaster.jpeg');
upload('./files/countrystreet.jpeg','countrystreet.jpeg');
upload('./files/food.jpeg','food.jpeg');
upload('./files/notabike.jpeg','notabike.jpeg');
upload('./files/notabike2.jpeg','notabike2.jpeg');
  
 

}
 

main();

console.log("done");