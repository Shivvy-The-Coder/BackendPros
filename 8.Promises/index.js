// promises are better way to work with the async functions

function delay(time)
{
    return new Promise((resolve)=>setTimeout(resolve,time))
}
console.log("promise lecture starts")
delay(2000).then(()=>console.log("after 2 seconds"))
console.log("end");


