//const {writeFile} = require('fs/promises')

//const createBifFile = async () => {
//  await writeFile('./data/bigfile.txt','hello world'.repeat(100))
//}

//createBifFile()

const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigfile.txt",{
    encoding:'utf-8',
});

stream.on("data", function (chunk) {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("ya termine de leer el archivo");
});

stream.on("error", (error) => {
  console.log(error);
});
