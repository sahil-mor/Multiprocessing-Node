const express = require("express")
const fork = require("child_process").fork
const app = express();

var isPrime = require("./isPrimeFunc")

app.get("/:num",(req,res) => {
    var {num} = req.params
    const childProcess = fork('./isPrime.js')
    childProcess.send({ num })
    childProcess.on("message" , response => res.send(response) )

})

app.get("/blocked/:num",(req,res)=>{

    var {num} = req.params
    const response = isPrime(num)
    res.send(response)
})


app.listen(3000,() => {
    console.log("at 3000")
})

// 29355126551