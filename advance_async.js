let a = false;
 
setTimeout(function() {
    a = true
},1000)

while(!a)
{
    console.log(1)
}

// again takes more than 1 sec as interpreter is never free of the while loop to execute done statement