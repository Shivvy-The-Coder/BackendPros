// promises are better way to work with the async functions


// here we have created a function where a simple delay of 2 second is being done
function delay(time)
{
    // working with promise and if no error thann resolve will happen
    return new Promise((resolve)=>setTimeout(resolve,time))
    // time parameter is being passed from the bottom 
}

// states the mark of starting of two seconds
console.log("promise lecture starts")
// 2second passed throigh thr funxtion
// promise happens after 2 second
delay(2000)
.then(()=>console.log("after 2 seconds"))
// logs out the end of promise
console.log("end");



// Aother function named divide with two paramterss num1 and num2
function divide(num1,num2)
{
    // states wether it will et rehected or resolved 
    return new Promise((resolve,reject)=>{
        // if the denominator value os 0 then its should get rejected
        if(num2==0)
                reject("division cannot be performed if denominator is '0' ");
        else
        // else it shoul be resolved and a result through it should be generated
                resolve(num1/num2);
    })    
}

// now we are calling the funciton divide and passing the two parameter herer
divide(10,2)
// is resolved then
.then(result=> console.log(result))
//  and id the error occurs then we need to catch the error
.catch(error=> console.log("error", error))