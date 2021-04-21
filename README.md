# Multiprocessing-Node
Parallel processing in Nodejs.

<br />

## Files
It includes 3 javascript files - index.js, isPrime.js and isPrimeFunc.js. <br /> 
1) index.js is our main backend file file where routes are written. <br />
2) isPrime.js is the file which is used by child process. <br />
3) isPrimeFunc.js is the file which check if a number is prime or not and give response accordingly. 

<br />

## Working
index.js have 2 routes, one is home route and other is /blocked, both expects a number as parameter which is to be checked if is prime or not. <br />
Home route use multiprocessing and forks a child process for each request and send this number to it and get response from that. So, this route can handle requests in parallel and thus this route will never be responsible for blocking. <br />
Blocked route does not use multiprocessing and thus processes one request at a time. So, for any reason if that request is not fulfilled, then all other request will also not be processed which ultimately leads to blocking. <br />

<br />

## How To Check
Fork or clone this repository.<br />
Run npm install to download module - express.<br />
Run npm start.<br />
Then visit localhost:3000 and give any number as parameter to home or /blocked route and you get response.<br /> 
Try with number - 29355126551 as parameter and open other tab give other number, it will work fine. <br />
But if you give 29355126551, this number to /blocked route as parameter and then try to check for any other number, it will not work as it handles process one by one, even home route will not work as well as parent process is still busy in handling earlier request. <br /> 

<br />

# Author
Sahil Mor<br />

