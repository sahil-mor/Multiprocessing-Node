const express = require("express")
const fork = require("child_process").fork
const app = express();

var isPrime = require("./isPrimeFunc")

// route which will use multiprocessing and fork child process and treat each route request by a different child process
app.get("/:num",(req,res) => {
    var {num} = req.params
    console.log(`${num} comes for non-blocking process which will fork route`)
    const childProcess = fork('./isPrime.js') // child process forked
    childProcess.send({ num }) // data sent to child process
    childProcess.on("message" , response => { // receiving dat from child process
        console.log(`${num} response will be sent for non-blocking which will fork route`)
        res.send(response)
    } )

})

// route which will not use multiprocessing and treat each route request by a single process one by one in sequential manner
app.get("/blocked/:num",(req,res)=>{
    var {num} = req.params
    console.log(`${num} comes for blocking(simple) route`)
    const response = isPrime(num)
    console.log(`${num} response will be sent for blocking(simple) route`)
    res.send(response)
})

var port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server at ${port}`)
})

// 29355126551 -> use this number to to block route 