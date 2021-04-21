
function isPrime(num){
    var startTime = new Date()
    var endTime = new Date()
    var response = {
        num,
        isPrime : true,
        startTime
    }
    for(var i = 3 ; i < num ; i++){
        if( num % i == 0 ){
            response.isPrime = false
            endTime = new Date()
            break;
        }
        endTime = new Date()
    }
    response.time = endTime.getTime() - startTime.getTime()
    response.endTime = endTime
    return response
}


module.exports = isPrime