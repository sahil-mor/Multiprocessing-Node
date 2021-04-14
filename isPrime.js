var isPrime = require("./isPrimeFunc")

process.on("message", message => {
    const jsonRes = isPrime(message.num)
    process.send(jsonRes)
    process.exit()
})
