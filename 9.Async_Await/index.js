// async function will always return a promise 
// await functin will always be writeten inside of async function
// await function actually pauses the exectution of fcuntion unless and ultii the promise gets resolved

function delayFn(time)
{
    return new Promise((resolve)=> setTimeout(resolve,time))
}

async function delayedGreet(name) {
    await delayFn(2000);
    console.log(name);
}
delayedGreet("Shivam");


async function division (num1,num2)
    {
        try
            {
                if(num2==0)
                        throw new Error("cannot divide with 0")
                return num1/num2;
            }
        catch(error)
            {
                console.error('error',error)
                return null;
            }
    }
    async function mainFn ()
        {
            console.log(await division (10,2));
            console.log(await division (10,0));
        }