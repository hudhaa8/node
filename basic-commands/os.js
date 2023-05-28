const os= require("os");

console.log("Toatal Memory",os.totalmem())

console.log("Toatal RAM Memory in GB",os.totalmem()/1024/1024/1024)

console.log("Free RAM Memory in GB" , os.freemem()/1024/1024/1024);

console.log("Windows version", os.version())

console.log("Processor", os.cpus())
