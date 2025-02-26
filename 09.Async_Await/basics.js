// Q1 Write an async function that returns "Hello, Async!" after 2 seconds using setTimeout and Promise.

setTimeout(()=>{
    console.log("Delayed for 3 seconds")
},3000);

//Q2 Modify delayedHello to take a custom message and delay as arguments.

function delayedMessage(message,delayTime)
    {
        setTimeout(()=>{
            console.log(message);
        },delayTime);
    }
delayedMessage("Hi, This is Shivam",2000);

// The following code tries to print numbers 1 to 5 with a 1-second delay each, but it doesn’t work correctly. Why? Fix it.

function print1to5()
    {
        for(let i=1;i<=5;i++)
                {
                    setTimeout(()=> {
                        console.log(i)
                    },1000);
                }
    }
print1to5();

//  Write a function wait that returns a Promise, which resolves after n milliseconds.
function wait(n) {
    // Your code here
    return new Promise((resolve)=>{setTimeout(resolve,8000)})
  }
  
  wait(3000).then(() => console.log("Done waiting!")); // Should log after 3 seconds
  



  function chainMessages() {
    // Your code here
    setTimeout(()=>{
        console.log("1st Message");

        setTimeout(()=>{
            console.log("2nd Message");

            setTimeout(()=>{
                console.log("3nd Message");
            },3000)
        },2000)
    },1000)
  }
  
  chainMessages();