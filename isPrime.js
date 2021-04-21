// importing function which will check if a number is prime or not
var isPrime = require("./isPrimeFunc") 

process.on("message", message => {
    const jsonRes = isPrime(message.num)
    process.send(jsonRes) // sending response back to parent process
    process.exit() // child process exits out
})
