const express = require("express")
const fork = require("child_process").fork
const app = express();

var isPrime = require("./isPrimeFunc")

app.get("/:num",(req,res) => {
    var {num} = req.params
    console.log(`${num} comes for non-blocking which will fork route`)
    const childProcess = fork('./isPrime.js')
    childProcess.send({ num })
    childProcess.on("message" , response => {
        console.log(`${num} response will be sent for non-blocking which will fork route`)
        res.send(response)
    } )

})

app.get("/blocked/:num",(req,res)=>{
    var {num} = req.params
    console.log(`${num} comes for blocking simple route`)
    const response = isPrime(num)
    console.log(`${num} response will be sent for blocking simple route`)
    res.send(response)
})

var port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server at ${port}`)
})

// 29355126551