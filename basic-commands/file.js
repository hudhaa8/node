const fs = require('fs');

// const quote = "All is well 👍🌹🍟🎉";

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("completed writing")
// })


// // const fs = require('fs')

// const quote2 = "Be healthy and wealthy";

// for(let i=1; i<=10; i++) {
// fs.writeFile(`./backup/text-${i}.html` , quote2, (err)=>{
//     console.log("completed writing")
// })
// }

// const quote3 = "Happy day be wealthy"

// const n= process.argv[2]

// for(let i=1; i<=n; i++) {
//     fs.writeFile(`./happy-${i}.txt`,quote3,(err)=>{
//         console.log("completed writing")
//     })
// }

//utf-8 to read emoji and other symbols
fs.readFile("./cool.txt","utf-8" ,(err,content) => {
    if(err){
        console.log("Error no file to read", err)
    }
    console.log("Reading completed ", content)
})


// fs.readFile("./cool888.txt","utf-8" ,(err,content) => {
//     if(err){
//         console.log("Error no file to read", err)
//     }
//     console.log("Reading completed ", content)
// })

// quote5 = " Insha Allah make everyday Great"
// fs.appendFile("./nice.txt", quote5 +"\n", (err)=>{
//     console.log("completed appending")
// })

// fs.unlink("./deleted-file.css" ,(err)=>{
//     console.log("file deleted successfully")
// })


// fs.readdir("./backup",(err, file)=> {
//    file.forEach((filename)=>{
//     fs.unlink(`./backup/${filename}`, (err)=>{
//         console.log("file deleted")
//     })
//    })
// })