// Membuat folder secara async
// const fs = require("fs");
// fs.mkdir("project", { recursive: true }, (err) => {
//     if (err) throw err;
//   }); 


// Membuat folder secara Sync
// const fs = require("fs");
// fs.mkdirSync("project");
// Membuat file secara Sync
// fs.writeFileSync("project/index.html", "");


//  Sebaiknya menggunakan try and catch bila secara async
// try {
//     const fs = require("fs");
//     fs.mkdirSync("project");
//     fs.writeFileSync("project/index.html", "");
//     console.log("success");
// } catch (error) {
//    console.log(console.log(error));
// }

// Membuat folder dan file html, css, js, secara langsung
const fs = require("fs");
const folderName = process.argv[2] || "project";

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.css`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
    console.log("success");
} catch (error) {
    console.log(error);
}