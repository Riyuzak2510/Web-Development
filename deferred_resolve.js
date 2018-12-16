function downloadPromise (){
    return new Promise(function(resolve,reject) {
        console.log("Starting to Download the File")
        setTimeout(function() {
            console.log("Download is Complete")
            resolve();
        },3000)
    })
}
let downloadedFile = downloadPromise()

setTimeout(function() {
    downloadedFile.then(function() {
        console.log("After download")
    })
},5000)
/* this case shows the promise when then statement was used after some delay and it is referred to as deferred resolve*/