// here we are going to learn about async function

function delayFn(time)
    {
        return new Promise((resolve )=>setTimeout(resolve,time))
    }
    async function delayedGreet(name)
        {
            await delayFn(2000);
            console.log(name);
    }

delayedGreet("Shivam");

async function division (num1, num2)
    {
        try{
            if(num2==0)
                    {
                        throw new Error("Cannot divide with zero"); 
                    }
            return num1/num2;
        }
        catch (Error)
        {
            console.error("Error",Error);
            return null
        }
    }

async function mainFn() 
    {
        console.log(await division(10,2));
        console.log(await division(10,0));
}
mainFn();