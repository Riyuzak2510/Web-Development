function someAsyncTask(callback)
{
    console.log("Beginning of task")
    setTimeout(function() {
        console.log("End of Task")
        callback();
    },3000)
}

/*someAsyncTask(function() {
    console.log("We did some task")
})
*/
let someTaskPromise = function() {
    return new Promise(function(resolve,reject) {
    someAsyncTask(resolve)
    })
}
someTaskPromise()
.then(function() {
    console.log("Task is Complete")
})